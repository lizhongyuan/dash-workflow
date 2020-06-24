'use strict';


const Promise = require('bluebird');


async function generalArrange(arrangeContext, rootTask, service, self) {

  const { ctx } = self;

  const taskArr = [];

  // return await run(rootTask, ctx, taskArr);
  await run(rootTask, ctx, taskArr);

  return taskArr;

  async function run(task, ctx, taskArr) {

    const curType = task.type;

    const { params, throwError, isAsync, name, desc, sequence, metaTasks } = task;

    if (curType === 'set') {

      let curPromise;

      if (sequence === 'serial') { // 串行
        curPromise = await setElemEachFlowWrapper(metaTasks, isAsync, throwError, arrangeContext, serialFlowHandler, ctx, taskArr);
      } else if (sequence === 'parallel') {
        curPromise = await setElemParallelWrapper(metaTasks, isAsync, throwError, arrangeContext, parallelFlowHandler, ctx, taskArr);
      }

      return curPromise;

    } else if (curType === 'atom') {

      const curService = task.service;
      const curFunction = task.function;

      arrangeContext.curStepName = name;
      // arrangeContext.curStepDesc = desc;

      const curFun = service[curService][curFunction];

      const execPromiseFunc = function execPromiseFunc() {
        if (isAsync) { // 不应该出现异步抛出Error, 所以不对异步做throwError判断
          return atomicElemAsyncWrapper(curFun, arrangeContext, params, self, taskArr); //
        } else if (!isAsync) { // 同步
          return atomicElemSyncWrapper(curFun, arrangeContext, params, throwError, self, taskArr);
        }
      };

      return execPromiseFunc;
    }
  }

  async function parallelFlowHandler(curTasks, paramCtx) {

    const allTasks = [];

    for (let i = 0; i < curTasks.length; i++) {
      if (curTasks[i].type === 'atom') {
        const curFun = await run(curTasks[i], paramCtx, taskArr);
        const curPromise = curFun();
        allTasks.push(curPromise);
      } else {
        const curPromise = await run(curTasks[i], paramCtx, taskArr);
        allTasks.push(curPromise);
      }
    }

    return allTasks;
  }

  async function serialFlowHandler(curTasks, arrangeContext, paramCtx) {

    const serialPromise = Promise.each(curTasks, async function(curTask) {
      const { type, name, desc } = curTask;

      arrangeContext.curStepName = name;
      // arrangeContext.curStepDesc = desc;

      if (type === 'atom') {
        const curFun = await run(curTask, paramCtx, taskArr);
        await curFun();
      } else if (type === 'set') {
        await run(curTask, paramCtx, taskArr);
      }
    });

    return serialPromise;
  }
}


async function setElemEachFlowWrapper(curTasks, isAsync, throwError, arrangeContext, serialFlowHandler, ctx) {

  let curPromise;

  if (isAsync) { // 异步, 不存在抛错
    curPromise = new Promise(resolve => {
      serialFlowHandler(curTasks, arrangeContext, ctx)
        .then(() => {}, err => { /* 记录log */ });
      resolve();
    });
  } else if (!isAsync) { // 同步
    if (throwError) {
      curPromise = serialFlowHandler(curTasks, arrangeContext, ctx);
    } else if (!throwError) {
      curPromise = new Promise(resolve => {
        serialFlowHandler(curTasks, arrangeContext, ctx)
          .then(() => resolve(), err => { /* 记录log */ resolve(); });
      });
    }
  }

  return curPromise;
}


async function setElemParallelWrapper(curTasks, isAsync, throwError, arrangeContext, parallelFlowHandler, ctx) {

  let curPromise;

  const allTasks = await parallelFlowHandler(curTasks, ctx);

  if (isAsync) { // 异步
    curPromise = new Promise(resolve => {
      Promise.all(allTasks)
        .then(() => {}, err => { /* 记录log */ });
      resolve();
    });
  } else if (!isAsync) { // 同步
    if (throwError) { // 抛错
      curPromise = Promise.all(allTasks);
    } else if (!throwError) { // 不抛错
      curPromise = new Promise(resolve => {
        Promise.all(allTasks)
          .then(() => resolve(), err => { /* 记录日志 */ resolve(); });
      });
    }
  }

  return curPromise;
}


function atomicElemAsyncWrapper(func, arrangeContext, externalParams, self) {
  const curPromise = new Promise(resolve => {
    func.call(self, arrangeContext, externalParams)
      .then(() => {}, err => { /* 记录log */ });
    resolve();
  });

  return curPromise;
}


async function atomicElemSyncWrapper(func, arrangeContext, externalParams, throwError, self, taskArr) {

  const curPromise = new Promise((resolve, reject) => {

    const curTaskRes = {
      mode: 'sync',
    };

    if (throwError) { // 抛错
      func.call(self, arrangeContext, externalParams)
        .then(res => {

          curTaskRes.res = res;
          taskArr.push(curTaskRes);

          resolve();
        }, err => reject(err));
    } else if (!throwError) { // 不抛错
      func.call(self, arrangeContext, externalParams)
        .then(() => resolve(), err => { /* 记录日志 */ resolve(); });
    }
  });

  return curPromise;
}


module.exports = {
  generalArrange,
};
