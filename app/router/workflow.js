'use strict';


module.exports = app => {

  const { router, controller } = app;
  const { workflow } = controller;

  router.get('/workflow',
    workflow.showWorkflow
  );

};
