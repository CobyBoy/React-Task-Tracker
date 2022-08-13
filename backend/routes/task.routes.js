import { Router } from "express";
import taskController from '../controllers/taskController/taskController.js';

const taskRouter = Router();

taskRouter.get('/tasks', taskController.getAllTasks);
taskRouter.get('/tasks/:id', taskController.getTaskById);
taskRouter.post('/tasks', taskController.createTask);
taskRouter.delete('/tasks/:id', taskController.deleteTask )
export default taskRouter;