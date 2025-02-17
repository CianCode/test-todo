import axios from 'axios';

const API_URL = 'http://localhost:3001/tasks'; // Replace with your backend URL

// Fetch all tasks
export const fetchTasks = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

// Create a new task
export const createTask = async (task: { title: string; description: string }) => {
    const response = await axios.post(API_URL, task);
    return response.data;
};

// Update a task
export const updateTask = async (id: number, updates: { title?: string; description?: string; completed?: boolean }) => {
    const response = await axios.put(`${API_URL}/${id}`, updates);
    return response.data;
};

// Delete a task
export const deleteTask = async (id: number) => {
    await axios.delete(`${API_URL}/${id}`);
};