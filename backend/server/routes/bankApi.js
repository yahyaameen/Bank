const express = require('express')
const router = express.Router()
const Transaction = require('../models/Transaction')

router.get('/bank/transactions', function(req, res) {
    const breakdown = req.query.breakdown
    if (breakdown) {
        Transaction.aggregate([
            { $group:
                { _id:"$category",
                  amount:{$sum:"$amount"}                  
                }
            }
        ])
        
        .then(function(transactionsSumPerCategory) {
            res.send(transactionsSumPerCategory)
        }).catch((err) => res.status(500).send({ msg: "Internal server error" }))
    }else{
        Transaction.find({})
        .then(function(transactions) {
            res.send(transactions)
        }).catch((err) => res.status(500).send({ msg: "Internal server error" }))
    }
})

router.post('/bank/transaction', function(req, res) {
    let transaction = new Transaction(req.body)
    transaction.save().then(function() {
        res.status(201).send()
    })
})

router.delete('/bank/transaction/:transactionId', function(req, res) {
    const transactionId = req.params.transactionId
    Transaction.deleteOne({ _id: transactionId })
        .then(function() {
            res.status(204).send()
        })
})


module.exports = router