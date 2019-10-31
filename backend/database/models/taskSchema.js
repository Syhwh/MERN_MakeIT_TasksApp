const mongoose = require('mongoose');

const TaskSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        require: true
    },
    done: false
});

module.exports = mongoose.model('Task', TaskSchema);