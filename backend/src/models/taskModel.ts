import { supabase } from '../config/supabase';

// Task model for interacting with Supabase
export const taskModel = {
    // Get all tasks
    getAllTasks: async () => {
        const { data, error } = await supabase.from('tasks').select('*');
        if (error) throw error;
        return data;
    },

    // Get a task by ID
    getTaskById: async (id: number) => {
        const { data, error } = await supabase.from('tasks').select('*').eq('id', id).single();
        if (error) throw error;
        return data;
    },

    // Create a new task
    createTask: async (task: { title: string; description: string; completed: boolean }) => {
        const { data, error } = await supabase.from('tasks').insert([task]).single();
        if (error) throw error;
        return data;
    },

    // Update a task
    updateTask: async (id: number, updates: { title?: string; description?: string; completed?: boolean }) => {
        const { data, error } = await supabase.from('tasks').update(updates).eq('id', id).single();
        if (error) throw error;
        return data;
    },

    // Delete a task
    deleteTask: async (id: number) => {
        const { error } = await supabase.from('tasks').delete().eq('id', id);
        if (error) throw error;
        return true;
    },
};