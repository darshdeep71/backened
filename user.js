let mongoose = require("mongoose");

let schema = mongoose.Schema( {
    email: String,
    password: String
} )

module.exports = mongoose.model('user-datas', schema);