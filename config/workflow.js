'use strict';


// 1234串联
exports.cal1 = {
  name: 'calculation1',
  desc: 'this is the whole node',
  type: 'set',
  params: {},
  throwError: true,
  isAsync: false,
  sequence: 'serial',
  metaTasks: [
    {
      name: 'multi2',
      desc: 'num1 * 2',
      type: 'atom',
      params: {},
      throwError: true,
      isAsync: false,
      service: 'calculation',
      function: 'multi2',
    },
    {
      name: 'multi4',
      desc: 'num2 * 4',
      type: 'atom',
      params: {},
      throwError: true,
      isAsync: false,
      service: 'calculation',
      function: 'multi4',
    },
    {
      name: 'result',
      desc: 'result',
      type: 'atom',
      params: {},
      throwError: true,
      isAsync: false,
      service: 'calculation',
      function: 'add',
    }
  ],
};

// 1234串联
exports.case1 = {
  name: 'wholeWorkflow',
  desc: 'this is the whole node',
  type: 'set',
  params: {},
  throwError: true,
  isAsync: false,
  sequence: 'serial',
  metaTasks: [
    {
      name: 'node1',
      desc: '节点1',
      type: 'atom',
      params: {
        timeout: 100,
      },
      throwError: true,
      isAsync: false,
      service: 'node',
      function: 'node1',
    },
    {
      name: 'node2',
      desc: '节点2',
      type: 'atom',
      params: {
        timeout: 200,
      },
      throwError: true,
      isAsync: false,
      service: 'node',
      function: 'node2',
    },
    {
      name: 'node3',
      desc: '节点3',
      type: 'atom',
      params: {
        timeout: 300,
      },
      throwError: true,
      isAsync: false,
      service: 'node',
      function: 'node3',
    },
    {
      name: 'node4',
      desc: '节点4',
      type: 'atom',
      params: {
        timeout: 400,
      },
      throwError: true,
      isAsync: false,
      service: 'node',
      function: 'node4',
    },
  ],
};


// 123并联, 同步(都执行完), 同步
exports.case2 = {
  name: 'wholeWorkflow',
  desc: 'this is the whole node',
  type: 'set',
  params: {},
  throwError: true,
  isAsync: false,
  sequence: 'parallel',
  metaTasks: [
    {
      name: 'node1',
      desc: '节点1',
      type: 'atom',
      params: {
        timeout: 100,
      },
      throwError: true,
      isAsync: false,
      service: 'node',
      function: 'node1',
    },
    {
      name: 'node2',
      desc: '节点2',
      type: 'atom',
      params: {
        timeout: 100,
      },
      throwError: true,
      isAsync: false,
      service: 'node',
      function: 'node2',
    },
    {
      name: 'node3',
      desc: '节点3',
      type: 'atom',
      params: {
        timeout: 100,
      },
      throwError: true,
      isAsync: false,
      service: 'node',
      function: 'node3',
    },
    {
      name: 'node4',
      desc: '节点4',
      type: 'atom',
      params: {
        timeout: 400,
      },
      throwError: true,
      isAsync: false,
      service: 'node',
      function: 'node4',
    },
  ],
};


// 123并联, 异步(调用后立刻acknowledge)
exports.case3 = {
  name: 'wholeWorkflow',
  desc: 'this is the whole node',
  type: 'set',
  params: {},
  throwError: true,
  isAsync: true,
  sequence: 'parallel',
  metaTasks: [
    {
      name: 'node1',
      desc: '节点1',
      type: 'atom',
      params: {
        timeout: 100,
      },
      throwError: true,
      isAsync: false,
      service: 'node',
      function: 'node1',
    },
    {
      name: 'node2',
      desc: '节点2',
      type: 'atom',
      params: {
        timeout: 200,
      },
      throwError: true,
      isAsync: false,
      service: 'node',
      function: 'node2',
    },
    {
      name: 'node3',
      desc: '节点3',
      type: 'atom',
      params: {
        timeout: 300,
      },
      throwError: true,
      isAsync: false,
      service: 'node',
      function: 'node3',
    },
    {
      name: 'node4',
      desc: '节点4',
      type: 'atom',
      params: {
        timeout: 400,
      },
      throwError: true,
      isAsync: false,
      service: 'node',
      function: 'node4',
    },
  ],
};


// 1234串联, 3异步, 124同步, 同步接口
exports.case4 = {
  name: 'wholeWorkflow',
  desc: 'this is the whole node',
  type: 'set',
  params: {},
  throwError: true,
  isAsync: false,
  sequence: 'serial',
  metaTasks: [
    {
      name: 'node1',
      desc: '节点1',
      type: 'atom',
      params: {
        timeout: 100,
      },
      throwError: true,
      isAsync: false,
      service: 'node',
      function: 'node1',
    },
    {
      name: 'node2',
      desc: '节点2',
      type: 'atom',
      params: {
        timeout: 200,
      },
      throwError: true,
      isAsync: false,
      service: 'node',
      function: 'node2',
    },
    {
      name: 'node3',
      desc: '节点3',
      type: 'atom',
      params: {
        timeout: 300,
      },
      throwError: true,
      isAsync: true,
      service: 'node',
      function: 'node3',
    },
    {
      name: 'node4',
      desc: '节点4',
      type: 'atom',
      params: {
        timeout: 400,
      },
      throwError: true,
      isAsync: false,
      service: 'node',
      function: 'node4',
    },
  ],
};


exports.case5 = {
  name: 'wholeWorkflow',
  desc: 'this is the whole node',
  type: 'set',
  params: {},
  throwError: true,
  isAsync: false,
  sequence: 'serial',
  metaTasks: [
    {
      name: 'node1',
      desc: '节点1',
      type: 'atom',
      params: {
        timeout: 100,
      },
      throwError: true,
      isAsync: false,
      service: 'node',
      function: 'node1',
    },
    {
      name: 'node2',
      desc: '节点2',
      type: 'atom',
      params: {
        timeout: 200,
      },
      throwError: true,
      isAsync: false,
      service: 'node',
      function: 'node2',
    },
    {
      name: 'parallelFlow1',
      desc: '串工作流1',
      type: 'set',
      params: {},
      throwError: true,
      isAsync: true,
      sequence: 'serial',
      metaTasks: [
        {
          name: 'node3',
          desc: '节点3',
          type: 'atom',
          params: {
            timeout: 300,
          },
          throwError: true,
          isAsync: false,
          service: 'node',
          function: 'node3',
        },
        {
          name: 'node4',
          desc: '节点4',
          type: 'atom',
          params: {
            timeout: 400,
          },
          throwError: true,
          isAsync: false,
          service: 'node',
          function: 'node4',
        },
      ],
    },
  ],
};


exports.nodeConfig_final = {
  name: 'wholeWorkflow',
  desc: 'this is the whole node',
  type: 'set',
  params: {},
  throwError: true,
  isAsync: false,
  sequence: 'serial',
  metaTasks: [{
    name: 'node1',
    desc: '节点1',
    type: 'atom',
    params: {
      timeout: 100,
    },
    throwError: true,
    isAsync: false,
    service: 'node',
    function: 'node1',
  },
  {
    name: 'parallelFlow1',
    desc: '并行工作流1',
    type: 'set',
    params: {},
    throwError: true,
    isAsync: false,
    sequence: 'parallel',
    metaTasks: [{
      name: 'serialFlow1',
      desc: '串行工作流1',
      type: 'set',
      params: {},
      throwError: true,
      // isAsync: true,
      isAsync: false,
      sequence: 'serial',
      metaTasks: [{
        name: 'node2',
        desc: '节点2',
        type: 'atom',
        params: {
          timeout: 200,
        },
        throwError: true,
        isAsync: false,
        service: 'node',
        function: 'node2',
      },
      {
        name: 'node5',
        desc: '节点5',
        type: 'atom',
        params: {
          timeout: 500,
        },
        throwError: true,
        isAsync: false,
        service: 'node',
        function: 'node5',
      },
      {
        name: 'node6',
        desc: '节点6',
        type: 'atom',
        params: {
          timeout: 600,
        },
        throwError: true,
        isAsync: false,
        service: 'node',
        function: 'node6',
      },
      {
        name: 'parallelWorkflow2',
        desc: '并行工作流2',
        type: 'set',
        params: {},
        throwError: true,
        isAsync: false,
        sequence: 'parallel',
        metaTasks: [{
          name: 'node7',
          desc: '节点7',
          type: 'atom',
          params: {
            timeout: 700,
          },
          throwError: true,
          // isAsync: true,
          isAsync: false,
          service: 'node',
          function: 'node7',
        },
        {
          name: 'node8',
          desc: '节点8',
          type: 'atom',
          params: {
            timeout: 800,
          },
          throwError: true,
          // isAsync: true,
          isAsync: false,
          service: 'node',
          function: 'node8',
        },
        {
          name: 'node9',
          desc: '节点9',
          type: 'atom',
          params: {
            timeout: 900,
          },
          throwError: true,
          // isAsync: true,
          isAsync: false,
          service: 'node',
          function: 'node9',
        },
        ],
      },
      ],
    },
    {
      name: 'node3',
      desc: '节点3',
      type: 'atom',
      params: {
        timeout: 300,
      },
      throwError: true,
      // isAsync: true,
      isAsync: false,
      service: 'node',
      function: 'node3',
    },
    {
      name: 'serialFlow2',
      desc: '串行工作流2',
      type: 'set',
      params: {},
      throwError: true,
      // isAsync: true,
      isAsync: false,
      sequence: 'serial',
      metaTasks: [{
        name: 'node4',
        desc: '节点4',
        type: 'atom',
        params: {
          timeout: 400,
        },
        throwError: true,
        isAsync: false,
        service: 'node',
        function: 'node4',
      },
      {
        name: 'serialFlow3',
        desc: '串行工作流3',
        type: 'set',
        params: {},
        throwError: true,
        isAsync: false,
        sequence: 'serial',
        metaTasks: [{
          name: 'node10',
          desc: '节点10',
          type: 'atom',
          params: {
            timeout: 1000,
          },
          throwError: true,
          isAsync: false,
          service: 'node',
          function: 'node10',
        },
        {
          name: 'node11',
          desc: '节点11',
          type: 'atom',
          params: {
            timeout: 1100,
          },
          throwError: true,
          isAsync: false,
          service: 'node',
          function: 'node11',
        },
        ],
      },
      ],
    },
    ],
  },
  ],
};


/*
module.exports = {
  nodeConfig,
};
 */
