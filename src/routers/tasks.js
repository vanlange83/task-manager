const express = require('express')
const Task = require('../models/task')
const router = new express.Router()
const auth = require('../middleware/auth')


// GET /tasks?completed=false
router.get('/tasks', auth,  async (req,res) => {
    let match
    let num = 1
    let task
   
    try {
        
        //also works 
        //await req.user.populate('tasks').execPopulate()
        if (req.query.completed) {
            match = req.query.completed === 'true'
            task = await Task.find({owner: req.user._id, completed: match }).limit(num)
        } 
        else if (!req.query.completed){
            task = await Task.find({owner: req.user._id }).limit(num)
        }
        res.status(200).send(task)
    } catch (e) {
        res.status(500).send()
    }

})

router.get('/tasks/:id', auth, async (req,res) => {
    const _id = req.params.id
    try {
            const task = await Task.findOne({ _id, owner: req.user._id })

            if(!task) {
                return res.status(404).send()
            }
            res.status(200).send(task)
    } catch (e) {
        res.status(500).send()
    }
})

router.post('/tasks', auth, async (req, res) => {
   
    const task = new Task({
        ...req.body,
        owner: req.user._id
    })

    try {
        await task.save()
        res.status(201).send(task)
    } catch (e) {
        res.status(400).send()
    }
 
})

router.patch('/tasks/:id', auth, async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['description', 'completed']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidOperation) {
      return  res.status(400).send({error: 'Invalid update'})
    }

    try {
        const task = await Task.findOne({ _id: req.params.id, owner: req.user._id })

       

        if (!task) {
            res.status(400).send()
        }

        // for mongoose schema to work
        //const task = await Task.findByIdAndUpdate(req.params.id)
        updates.forEach((update) => task[update] = req.body[update]);
        
        await task.save()
        
        res.send(task)
    } catch (e) {
        res.status(500).send(e)
    }
})

router.delete('/tasks/:id', auth, async (req, res) => {
    try {
        const task = await Task.findOneAndDelete({ _id: req.params.id, owner: req.user._id})

        if (!task) {
            res.status(400).send()
        }
        res.send(task)
    } catch (e) {
        res.status(500).send()
    }
})

module.exports = router