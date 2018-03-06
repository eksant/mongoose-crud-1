var express = require('express');
var router = express.Router();
var { getBooks, getBooksById, createBooks, updateBooks, deleteBooks } = require('../controllers/books')

router.get('/', getBooks)
router.get('/:id', getBooksById)
router.post('/',  createBooks)
router.put('/:id', updateBooks)
router.delete('/:id', deleteBooks)

module.exports = router;
