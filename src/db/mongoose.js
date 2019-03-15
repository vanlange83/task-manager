const mongoose = require('mongoose')
const validator = require('validator')

//set up server connection using mongoose
mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true
})

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
