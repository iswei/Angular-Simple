/**
 * Created by linwei on 3/16/2015.
 */
/**
 ignore since db is not use
 **/

var simpledb = require('mongoose-simpledb');

var db = simpledb.init('mongodb://localhost/test');

exports.create = function(req, res) {

  var user = new db.User({
    name: {
      first: req.param('firstName'),
      last: req.param('lastName')
    },
    age:parseInt(req.param('age')),
    email: req.param('email'),
    createDate: new Date(),
    editDate: new Date(),
    active: false
  });

  user.save(function(err) {
    if (err) {
      return res.send('register', {
        errors: err.errors,
        client: client
      });
    } else {
      res.jsonp(client);
    }
  });
}

exports.all = function(req, res, next) {
  db.user.find().exec(function(err,users){
    if (err) {
      res.render('error', {
        status: 500
      });
    } else {
      res.jsonp(users);
    }

  })

}
