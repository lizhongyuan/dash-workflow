'use strict';


module.exports = app => {

  const { router, controller } = app;
  const { workflow, calculation } = controller;

  router.get('/workflow',
    workflow.showWorkflow
  );

  router.post('/cal1',
    workflow.cal1
  );

};
