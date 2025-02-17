"use client";

import { useEffect, useState } from 'react';
import {fetchTasks, updateTask, deleteTask, createTask} from '@/utils/api';
import TaskItem from './TaskItem';
import TaskForm from './TaskForm';

const TaskList: React.FC = () => {
    const [tasks, setTasks] = useState<{ id: number; title: string; description: string; completed: boolean }[]>([]);

    useEffect(() => {
        loadTasks();
    }, []);

    const loadTasks = async () => {
        const tasks = await fetchTasks();
        setTasks(tasks);
    };

    const handleAddTask = async (task: { title: string; description: string }) => {
        await createTask(task);
        loadTasks();
    };

    const handleToggleTask = async (id: number) => {
        const task = tasks.find((t) => t.id === id);
        if (task) {
            await updateTask(id, { completed: !task.completed });
            loadTasks();
        }
    };

    const handleDeleteTask = async (id: number) => {
        await deleteTask(id);
        loadTasks();
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Task Manager</h1>
            <TaskForm onSubmit={handleAddTask} />
            <div>
                {tasks.map((task) => (
                    <TaskItem
                        key={task.id}
                        task={task}
                        onDelete={handleDeleteTask}
                        onToggle={handleToggleTask}
                    />
                ))}
            </div>
        </div>
    );
};

export default TaskList;