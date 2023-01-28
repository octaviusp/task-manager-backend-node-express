const Task = require('../model/task.js')
const task = Task.task_model

const getAllTasks = async (req,res) => {
    try {
        const tasks = await task.find({})
        res.status(200).json({tasks})
    } catch (error) {
        res.status(404).json({'Error':error})
    }
}

const createTask = async (req,res) => {
    try {
        const new_task = req.body
        await task.create(new_task)
        res.status(201).send('Task created succesfully!')
    } catch (error) {
        res.send(error)
    }
}

/** ROUTES THAT USE REQ.PARAMS */

const getTask = async (req,res) => {
    try {
        const get_task = task.findOne({_id:req.params.id})
        res.status(200).json({get_task})
    } catch (error) {
        res.status(400).send(error)
    }
}

const removeTask = async (req,res) => {
    try {
        await task.findOneAndDelete({_id:req.params.id})
        res.status(200).send("Task removed succesfully")
    } catch (error) {
        res.status(404).send(error)
    }
}

const updateTask = async (req,res) => {
    try {
        await task.findOneAndUpdate({_id:req.params.id}), req.body
        res.status(200).send("Task updated succesfully")
    } catch (error) {
        res.status(400).send(error)
    }
}

module.exports = {
    getAllTasks,
    getTask,
    createTask,
    removeTask,
    updateTask
}