'use strict';


const Promise = require('bluebird');


async function generalArrange(rootTask, service, self) {

  const { ctx } = self;
  const { arrange } = ctx;

  const taskMap = {};

  await run(rootTask, ctx, taskMap);

  return taskMap;

  async function run(task, ctx, taskMap) {

    const curType = task.type;

    const { params, throwError, isAsync, name, desc, sequence, metaTasks } = task;

    if (curType === 'set') {

      let curPromise;

      if (sequence === 'serial') { // 串行
        curPromise = await setElemEachFlowWrapper(metaTasks, isAsync, throwError, serialFlowHandler, ctx, taskMap);
      } else if (sequence === 'parallel') {
        curPromise = await setElemParallelWrapper(metaTasks, isAsync, throwError, parallelFlowHandler, ctx, taskMap);
      }

      return curPromise;

    } else if (curType === 'atom') {

      const curService = task.service;
      const curFunction = task.function;

      arrange.curStepName = name;
      // arrangeContext.curStepDesc = desc;

      const curFun = service[curService][curFunction];

      const execPromiseFunc = function execPromiseFunc() {
        if (isAsync) { // 不应该出现异步抛出Error, 所以不对异步做throwError判断
          return atomicElemAsyncWrapper(curFun, params, self, taskMap); //
        } else if (!isAsync) { // 同步
          return atomicElemSyncWrapper(curFun, params, throwError, self, taskMap);
        }
      };

      return execPromiseFunc;
    }
  }

  async function parallelFlowHandler(curTasks, paramCtx) {

    const allTasks = [];

    /*
    for (let i = 0; i < curTasks.length; i++) {
      if (curTasks[i].type === 'atom') {
        const curFun = await run(curTasks[i], paramCtx, taskMap);
        const curPromise = curFun();
        allTasks.push(curPromise);
      } else {
        const curPromise = await run(curTasks[i], paramCtx, taskMap);
        allTasks.push(curPromise);
      }
    }
     */

    for (const curTask of curTasks) {
      if (curTask.type === 'atom') {
        const curFun = await run(curTask, paramCtx, taskMap);
        const curPromise = curFun();
        allTasks.push(curPromise);
      } else {
        const curPromise = await run(curTask, paramCtx, taskMap);
        allTasks.push(curPromise);
      }
    }

    return allTasks;
  }

  async function serialFlowHandler(curTasks, paramCtx) {

    const serialPromise = Promise.each(curTasks, async function(curTask) {
      const { type, name, desc } = curTask;

      arrange.curStepName = name;
      // arrangeContext.curStepDesc = desc;

      if (type === 'atom') {
        const curFun = await run(curTask, paramCtx, taskMap);
        await curFun();
      } else if (type === 'set') {
        await run(curTask, paramCtx, taskMap);
      }
    });

    return serialPromise;
  }
}


async function setElemEachFlowWrapper(curTasks, isAsync, throwError, serialFlowHandler, ctx) {

  let curPromise;

  if (isAsync) { // 异步, 不存在抛错
    curPromise = new Promise(resolve => {
      serialFlowHandler(curTasks, ctx)
        .then(() => {}, err => { /* 记录log */ });
      resolve();
    });
  } else if (!isAsync) { // 同步
    if (throwError) {
      curPromise = serialFlowHandler(curTasks, ctx);
    } else if (!throwError) {
      curPromise = new Promise(resolve => {
        serialFlowHandler(curTasks, ctx)
          .then(() => resolve(), err => { /* 记录log */ resolve(); });
      });
    }
  }

  return curPromise;
}


async function setElemParallelWrapper(curTasks, isAsync, throwError, parallelFlowHandler, ctx) {

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


function atomicElemAsyncWrapper(func, externalParams, self, taskMap) {

  const { ctx } = self;
  const { arrange } = ctx;

  const curPromise = new Promise(resolve => {
    func.call(self, externalParams)
      .then(() => {}, err => { /* 记录log */ });

    const curTaskRes = {
      mode: 'async',
    };

    curTaskRes.status = 0;
    taskMap[arrange.curStepName] = curTaskRes;

    resolve();
  });

  return curPromise;
}


async function atomicElemSyncWrapper(func, externalParams, throwError, self, taskMap) {

  const { ctx } = self;
  const { arrange } = ctx;

  const curPromise = new Promise((resolve, reject) => {

    const curTaskRes = {
      mode: 'sync',
    };

    if (throwError) { // 抛错
      func.call(self, externalParams)
        .then(res => {

          curTaskRes.status = 0;
          curTaskRes.res = res;
          taskMap[arrange.curStepName] = curTaskRes;

          resolve();
        }, err => {
          curTaskRes.status = -1;
          curTaskRes.error = err;
          taskMap[arrange.curStepName] = curTaskRes;

          reject(err);
        });
    } else if (!throwError) { // 不抛错
      func.call(self, arrange, externalParams)
        .then(res => {

          curTaskRes.status = 0;
          curTaskRes.res = res;
          taskMap[arrange.curStepName] = curTaskRes;

          resolve();
        }, err => {

          curTaskRes.status = 1;
          curTaskRes.error = err;
          taskMap[arrange.curStepName] = curTaskRes;

          resolve();
        });
    }
  });

  return curPromise;
}


module.exports = {
  generalArrange,
};
