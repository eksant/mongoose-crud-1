var express = require('express');
var router = express.Router();
var { getTransactions, createTransactions, updateTransactions } = require('../controllers/transactions')

router.get('/', getTransactions)
router.post('/', createTransactions)
router.put('/:id',  updateTransactions)

module.exports = router;
