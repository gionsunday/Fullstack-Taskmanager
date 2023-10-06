const express = require('express');
const router = express.Router()
const {
    getTask,
     getSingleTask,
     createTask, 
     deleteTask,
     updateTask
     
    } = require('../contollers/methods')
    
const auth = require('../middleware/auth')

router.route('/').get(getTask)
router.post('/', createTask)
router.route('/:id').get(getSingleTask).patch(updateTask).delete(deleteTask)
module.exports = router
