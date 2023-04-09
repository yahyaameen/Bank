const mongoose = require('mongoose')
const CONFIG = require('../config')
const connectToDB = function() {
    mongoose.connect(CONFIG.CONFIG.DB_URL, {
        useNewUrlParser: true,
    }).catch((err) => console.log(err))
}
module.exports = { connectToDB }