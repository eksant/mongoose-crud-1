const transactions = require('../models/transactions')
const days        = 6
const fineDay     = 2000

function addDays(theDate, days) {
  return new Date(theDate.getTime() + days * 24 * 60 * 60 * 1000);
}

function daysBetween(dateStart, dateEnd) {
  let one_day       = 1000 * 60 * 60 * 24;
  let date1_ms      = dateStart.getTime();
  let date2_ms      = dateEnd.getTime();
  let difference_ms = date2_ms - date1_ms;

  return Math.round(difference_ms/one_day);
}

module.exports = {
  getTransactions: (req, res) => {
    transactions.find()
    .populate(['member', 'booklist'])
    .then(data => res.status(200).json(data))
    .catch(err => console.error(err))
  },

  createTransactions: (req, res) => {
    transactions.create({
      member    : req.body.member,
      days      : days,
      out_date  : req.body.out_date,
      due_date  : addDays(new Date(req.body.out_date), days),
      in_date   : '',
      fine      : 0,
      booklist  : req.body.booklist,
    })
    .then(data => res.status(200).json({
      message: 'Success to insert record',
      data
    }))
    .catch(err => console.error(err))
  },

  updateTransactions: (req, res) => {
    transaction.findOne({'_id': req.params.id})
    .then(function(transaction) {
      if (transaction) {
        let fine      = 0
        let message   = 'Congrat bro, You have no late fees..'
        let in_date   = req.body.in_date
        let late_day  = daysBetween(new Date(transaction.due_date), new Date(in_date))

        if (late_day > 0) {
          fine    = late_day * fineDay
          message = `Sorry bro, You have a late penalty of IDR ${fine}`
        }

        transaction.in_date = in_date
        transaction.fine    = fine
        transaction.save()
        .then(updatedTransaction => res.send(updatedTransaction))
        .catch(err => res.status(500).send(err))
      }
    })
    .catch(err => console.error(err))
  }
}
