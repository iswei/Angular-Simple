var async = require('async');

module.exports = function(app) {
    //Client Routes
    var user = require('../userapi/user');
   app.get('/', user.all);
    app.post('/register', user.create);
  //  app.get('/clients/:clientId', clients.show);
  //  app.put('/clients/:clientId', clients.update);
  //  app.del('/clients/:clientId', clients.destroy);

    //Finish with setting up the clientId param
//    app.param('clientId', clients.client);
};
