const mongoose = require('mongoose')

const connect = async (uri) => {
    return mongoose.connect(uri)
    .then(() => console.log("Connected to mongo database succesfully!"))
}

module.exports = {
    connect
}