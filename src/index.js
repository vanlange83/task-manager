const express = require('express')
const app = express()
require('./db/mongoose')
const userRouter = require('./routers/users')
const taskRouter = require('./routers/tasks')


const port = process.env.PORT || 3000

// app.use((req, res, next) => {
//     if (req.method === 'GET') {
//         res.send('GET requests are disabled')
//     } else {
//         next()
//     }
// })

// app.use((req, res, next) => {
//         res.status(503).send('Site under contruction')
// })

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)


app.listen(port, () => {
    console.log('Server is up on port ' + port)
})


const Task = require('./models/task')
const User = require('./models/user')

// const main = async () => {
//     // const task = await Task.findById('5c949a736838d127b41e2a9f')
//     // await task.populate('owner').execPopulate()
//     // console.log(task.owner)

//     const user = await User.findById('5c9496bc74934e1428eeaba5')
//     //await user.populate('tasks').execPopulate()
//     console.log(user.tasks)
// }

// main()