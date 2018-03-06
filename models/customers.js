const mongoose    = require('mongoose')
const Schema      = mongoose.Schema

var customerSchema = new Schema({
  name: { type: String, required: true },
  memberid: { type: String, required: true, unique: true },
  address: { type: String },
  zipcode: String,
  phone: String
}, {
  timestamps: true
})

module.exports = mongoose.model('customers', customerSchema)
