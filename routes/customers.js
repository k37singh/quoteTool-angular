var express = require('express');
var router = express.Router();

var db = require('../queries');


/* GET users listing. */

router.get('/:first_name', db.getCustomer);
router.get('/', db.getCustomers);

module.exports = router;
