import { FaEdit, FaTrash } from 'react-icons/fa';

interface TaskItemProps {
    task: {
        id: number;
        title: string;
        description: string;
        completed: boolean;
    };
    onDelete: (id: number) => void;
    onToggle: (id: number) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onDelete, onToggle }) => {
    return (
        <div className="bg-white p-4 rounded-lg shadow-md mb-4 flex justify-between items-center">
            <div>
                <h3 className={`text-lg font-semibold ${task.completed ? 'line-through' : ''}`}>{task.title}</h3>
                <p className="text-gray-600">{task.description}</p>
            </div>
            <div className="flex space-x-2">
                <button
                    onClick={() => onToggle(task.id)}
                    className={`px-4 py-2 rounded ${task.completed ? 'bg-yellow-500' : 'bg-green-500'} text-white`}
                >
                    {task.completed ? 'Undo' : 'Complete'}
                </button>
                <button onClick={() => onDelete(task.id)} className="bg-red-500 text-white px-4 py-2 rounded">
                    <FaTrash />
                </button>
            </div>
        </div>
    );
};

export default TaskItem;