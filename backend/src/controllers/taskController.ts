import { Request, Response } from 'express';
import { taskModel } from '../models/taskModel';
import { logger } from '../utils/logger';

// Task controller for handling HTTP requests
export const taskController = {
    // Get all tasks
    getAllTasks: async (req: Request, res: Response): Promise<void> => {
        try {
            const tasks = await taskModel.getAllTasks();
            logger.success('Fetched all tasks successfully');
            res.status(200).json(tasks);
        } catch (error: any) {
            logger.error(`Error fetching tasks: ${error.message}`);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    },

    // Get a task by ID
    getTaskById: async (req: Request, res: Response): Promise<void> => {
        try {
            const task = await taskModel.getTaskById(Number(req.params.id));
            if (!task) {
                logger.warn(`Task with ID ${req.params.id} not found`);
                res.status(404).json({ error: 'Task not found' });
                return;
            }
            logger.success(`Fetched task with ID ${req.params.id} successfully`);
            res.status(200).json(task);
        } catch (error: any) {
            logger.error(`Error fetching task: ${error.message}`);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    },

    // Create a new task
    createTask: async (req: Request, res: Response): Promise<void> => {
        try {
            const newTask = await taskModel.createTask(req.body);
            logger.success('Task created successfully');
            res.status(201).json(newTask);
        } catch (error: any) {
            logger.error(`Error creating task: ${error.message}`);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    },

    // Update a task
    updateTask: async (req: Request, res: Response): Promise<void> => {
        try {
            const updatedTask = await taskModel.updateTask(Number(req.params.id), req.body);
            logger.success(`Task with ID ${req.params.id} updated successfully`);
            res.status(200).json(updatedTask);
        } catch (error: any) {
            logger.error(`Error updating task: ${error.message}`);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    },

    // Delete a task
    deleteTask: async (req: Request, res: Response): Promise<void> => {
        try {
            await taskModel.deleteTask(Number(req.params.id));
            logger.success(`Task with ID ${req.params.id} deleted successfully`);
            res.status(204).send();
        } catch (error: any) {
            logger.error(`Error deleting task: ${error.message}`);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    },
};