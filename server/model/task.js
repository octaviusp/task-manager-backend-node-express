const mongoose = require('mongoose')

const Task = mongoose.Schema({
    name:{
        type:String,
        required:[true, 'The name is required'],
        trim:true,
        maxlength:[20, 'Max length of name 20']
    },
    completed:{
        type:Boolean,
        default:false
    },
    timestamp:{
        type:Date
    }
})

const task_model = mongoose.model('Task', Task)

module.exports = {
    task_model
}