import  mongoose  from 'mongoose';

const taskSchema = new mongoose.Schema({
    task: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: new Date(),
        required: true
    },
    reminder: {
        type: Boolean,
        default: false
    }

})

const TaskModel = mongoose.model('Task', taskSchema);
export default TaskModel;