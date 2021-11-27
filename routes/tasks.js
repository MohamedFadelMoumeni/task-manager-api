const express = require('express');
const router  = express.Router();

//Controllers

const {
    getAllTasks,
    createTask,
    deleteTask,
    updateTask,
    getSingleTask
} = require('../controllers/tasks');

router.route('/').get(getAllTasks).post(createTask);
router.route('/:id').get(getSingleTask).patch(updateTask).delete(deleteTask);

module.exports = router;