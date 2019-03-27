const mongoose = require('mongoose')


//set up server connection using mongoose
mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
})



