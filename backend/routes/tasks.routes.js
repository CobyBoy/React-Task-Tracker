import { Router } from "express";
import taskController from '../controllers/taskController/tasksController.js'

const taskRouter = Router()

taskRouter.get('/tasks', taskController.getAllTasks)

export default taskRouter;