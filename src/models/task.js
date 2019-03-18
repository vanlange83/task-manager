const mongoose = require('mongoose')

//create mongoose model and define how fields are defined
const Task = mongoose.model('Task', {
    description: {
        type: String,
        trim: true,
        required: true
    },
    completed: {
        type: Boolean,
        default: false,
        required: false
    }
})

module.exports = Task