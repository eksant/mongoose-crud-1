const mongoose    = require('mongoose')
const Schema      = mongoose.Schema

var bookSchema = new Schema({
  isbn: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  author: { type: String, required: true },
  category: String,
  stock: Number
}, {
  timestamps: true
})

module.exports = mongoose.model('books', bookSchema)
