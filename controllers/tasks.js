const taskModel = require('../models/tasks');
const getAllTasks = async (req, res) => {
    try{
        const allTheTasks = await taskModel.find();
        if(allTheTasks.length > 0){
            res.status(200).json(allTheTasks);
        }else{
            res.status(404).json({message: "Empty"});
        }
    }catch(e){
        res.status(400).json({error: e.message})
    }
}

const createTask = async (req, res) => {
    try{
        const taskToCreate = await taskModel.create(req.body);
        res.status(200).json({taskToCreate})
    }catch(e){
        res.status(400).json({error: e.message})
    }
}
const getSingleTask = async (req, res) => {
    const {id} = await req.params;
    try{
        const singleTask = await taskModel.findOne({_id: id});
        if(!singleTask){
            return res.status(404).json({msg: `No task with ID : ${id}`})
        }
        res.status(200).json({singleTask})
    }catch(e){
        res.status(500).json({error: e.message})
    }
}
const deleteTask = async (req, res) => {
    try{
        const {id} = await req.params;
        const deltedTask = await taskModel.findOneAndDelete({_id:id})
        if(!deltedTask){
            return res.status(404).json({msg: `No task with ID : ${id}`})
        }
        res.status(200).json({deltedTask})
    }catch(e){
        res.status(500).json({error: e.message});
    }
}
const updateTask = async (req, res) => {
    try{
        const {id} = await req.params;
        const task = await taskModel.findOneAndUpdate({_id: id}, req.body);
        if(!task) return res.json({error: `No Task with ID ${id}`});
        res.status(200).json({data: req.body});
    }catch(e){
        res.json({error: e.message});
    }
}

module.exports = {
    getAllTasks,
    createTask,
    getSingleTask,
    updateTask,
    deleteTask
}