var promise = require('bluebird');

var options = {
	//Initialization Options
	promiseLib: promise
};

var pgp = require('pg-promise')(options);
var connectionString = 'postgres://postgres:tictoc@localhost:5432/database';
var db = pgp(connectionString);

// add query fucntions
function getCustomer(req, res, next) {
  var first_name = req.params.first_name;
  db.one('select * from customers where first_name = $1', [first_name])
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved User'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function getCustomers(req, res, next) {
  var first_name = req.params.first_name;
  db.one('select first_name from customers', [first_name])
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved User'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

module.exports = {
	getCustomer: getCustomer,
  getCustomers: getCustomers
}