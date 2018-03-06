const customers = require('../models/customers')

module.exports = {
  getCustomers: (req, res) => {
    customers.find()
    .then(data => res.status(200).json(data))
    .catch(err => console.error(err))
  },

  getCustomersById: (req, res) => {
    customers.findOne({'_id': req.params.id})
    .then(data => res.status(200).json(data))
    .catch(err => console.error(err))
  },

  createCustomers: (req, res) => {
    customers.create({
      name      : req.body.name,
      memberid  : req.body.memberid,
      address   : req.body.address,
      zipcode   : req.body.zipcode,
      phone     : req.body.phone,
    })
    .then(data => res.status(200).json({
      message: 'Success to insert record',
      data
    }))
    .catch(err => console.error(err))
  },

  updateCustomers: (req, res) => {
    customers.findByIdAndUpdate({'_id' : req.params.id}, {$set: {
      name      : req.body.name,
      memberid  : req.body.memberid,
      address   : req.body.address,
      zipcode   : req.body.zipcode,
      phone     : req.body.phone,
    }})
    .then(data => res.status(200).json({
      message: 'Success to update record',
      data
    }))
    .catch(err => console.error(err))
  },

  deleteCustomers: (req, res) => {
    user.findByIdAndRemove(req.params.id)
    .then(data => res.status(200).json({
      message: 'Success to update record'
    }))
    .catch(err => console.error(err))
  }
}
