var express = require('express');
var router = express.Router();
var { getCustomers, getCustomersById, createCustomers, updateCustomers, deleteCustomers } = require('../controllers/customers')

router.get('/', getCustomers)
router.get('/:id', getCustomersById)
router.post('/',  createCustomers)
router.put('/:id', updateCustomers)
router.delete('/:id', deleteCustomers)

module.exports = router;
