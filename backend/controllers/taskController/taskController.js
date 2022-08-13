import taskModel from '../../models/taskModel.js'

const taskController = {
    getAllTasks: async (req, res) => {
       try {
           const newTask = await taskModel.find()
           res.status(200).json(newTask)
       } catch (error) {
           res.status(400).json({message: error.message})
       }
    },
    getTaskById: async (req, res) => {
        try {
            const task =  await taskModel.findById(req.params.id)
            res.status(200).json(task)
        } catch (error) {
            res.status(400).json({ message: error.message })
        }
    },
    createTask: async (req, res) => {
        const task = req.body;
        console.log(task)
        const newTask = new taskModel(task);
        try {
            await newTask.save();
            res.status(201).json(newTask);
        } catch (error) {
            res.status(409).json({message: error.message})
        }
    },
    deleteTask: async (req, res) => {
        console.log(req.params.id)
        try {
            await taskModel.deleteOne()
            res.status(201)
        } catch (error) {
            res.status(409).json({ message: error.message })
        }
    }
}

export default taskController;