const mongoose    = require('mongoose')
const Schema      = mongoose.Schema

var transactionSchema = new Schema({
  member: { type: Schema.Types.ObjectId, ref: 'customers' },
  days: { type: Number, required: true },
  out_date: { type: Date },
  due_date: { type: Date },
  in_date: { type: Date },
  fine: Number,
  booklist: [{ type: Schema.Types.ObjectId, ref: 'books' }]
}, {
  timestamps: true
})

module.exports = mongoose.model('transactions', transactionSchema)
