const express = require('express')
const router = express.Router()

const {updateTask, removeTask, createTask, getAllTasks, getTask} = require('../controller/task')

router.route("/").get(getAllTasks).post(createTask)
router.route("/:id").get(getTask).patch(updateTask).delete(removeTask)

module.exports = router