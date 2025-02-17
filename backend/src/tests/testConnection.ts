import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config();

const supabase = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_KEY!);

// Test query
const testConnection = async () => {
    const { data, error } = await supabase.from('tasks').select('*');
    if (error) {
        console.error('Error connecting to Supabase:', error);
    } else {
        console.log('Connected to Supabase. Tasks:', data);
    }
};

testConnection();