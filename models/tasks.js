const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    name:{
        type: String,
        trim:true,
        required: [true, 'please provide an name'],
        maxlength: [20, "name must not be greater than 20 characters"]
    },   
    status:{ 
        type: String,
        default: "Not Done!"
    },
    createdBy:{ 
        type: String,
        default: "Anonymous"
    },
    
})
module.exports = mongoose.model('Task', TaskSchema)