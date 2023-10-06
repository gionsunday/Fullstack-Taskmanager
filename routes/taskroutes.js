const express = require('express');
const router = express.Router()
const {
    getTask,
     getSingleTask,
     createTask, 
     deleteTask,
     updateTask
     
    } = require('../contollers/methods')

router.route('/').get(getTask).post(createTask)
router.route('/:id').get(getSingleTask).patch(updateTask).delete(deleteTask)
module.exports = router