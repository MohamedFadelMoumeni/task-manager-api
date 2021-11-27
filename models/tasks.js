const mongoose = require('mongoose');

// Tasks Schema
const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Can not be more than 20 caracteres"],
        trim: true
    },
    completed:{
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('Task', TaskSchema);