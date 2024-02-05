import mongoose from 'mongoose';

const TaskSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true 
    },
    description: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        default: true
    },
    completed: {
        type: Boolean,
        default: false
    }
});

const TaskModel = mongoose.model('Task', TaskSchema);

export default TaskModel;