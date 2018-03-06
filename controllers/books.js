const books = require('../models/books')

module.exports = {
  getBooks: (req, res) => {
    books.find()
    .then(data => res.status(200).json(data))
    .catch(err => console.error(err))
  },

  getBooksById: (req, res) => {
    books.findOne({'_id': req.params.id})
    .then(data => res.status(200).json(data))
    .catch(err => console.error(err))
  },

  createBooks: (req, res) => {
    books.create({
      isbn    : req.body.isbn,
      title   : req.body.title,
      author  : req.body.author,
      category: req.body.category,
      stock   : req.body.stock,
    })
    .then(data => res.status(200).json({
      message: 'Success to insert record',
      data
    }))
    .catch(err => console.error(err))
  },

  updateBooks: (req, res) => {
    books.findByIdAndUpdate({'_id' : req.params.id}, {$set: {
      isbn    : req.body.isbn,
      title   : req.body.title,
      author  : req.body.author,
      category: req.body.category,
      stock   : req.body.stock,
    }})
    .then(data => res.status(200).json({
      message: 'Success to update record',
      data
    }))
    .catch(err => console.error(err))
  },

  deleteBooks: (req, res) => {
    user.findByIdAndRemove(req.params.id)
    .then(data => res.status(200).json({
      message: 'Success to update record'
    }))
    .catch(err => console.error(err))
  }
}
