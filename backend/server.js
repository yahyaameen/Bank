const express = require('express')
const path = require('path')
const app = express()
const api = require('./server/routes/bankApi')
const DBConnection = require('./server/utils/DBConnection')
const CONFIG = require('./server/config')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')

    next()
})

DBConnection.connectToDB()

app.use('/', api)

app.listen(CONFIG.CONFIG.PORT, function() {
    console.log(`Running on port ${CONFIG.CONFIG.PORT}`)
})