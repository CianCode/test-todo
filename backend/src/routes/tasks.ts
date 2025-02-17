import express from 'express';
import { taskController } from '../controllers/taskController';

// Create a new router instance
const taskRoutes = express.Router();

// Define routes
taskRoutes.get('/', taskController.getAllTasks);
taskRoutes.get('/:id', taskController.getTaskById);
taskRoutes.post('/', taskController.createTask);
taskRoutes.put('/:id', taskController.updateTask);
taskRoutes.delete('/:id', taskController.deleteTask);

// Export the router
export default taskRoutes;