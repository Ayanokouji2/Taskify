import React, { useState } from "react";
import { EllipsisVertical, Eye, EyeOff } from "lucide-react";
import EditOption from "./EditOption";

const Card = ({task, setEdit}) => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);

    const priorityColors = {
        low: "bg-blue-100 text-blue-800 border-blue-300",
        medium: "bg-yellow-100 text-yellow-800 border-yellow-300", 
        high: "bg-red-100 text-red-800 border-red-300"
    };

    const statusColors = {
        pending: "bg-gray-100 text-gray-800 border-gray-300",
        completed: "bg-green-100 text-green-800 border-green-300"
    };

    return (
        <div className={`group bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-6 relative dark:bg-gray-800 dark:border-gray-700 border border-gray-200`}>
            <button 
                onClick={() => setIsExpanded(!isExpanded)}
                className="absolute left-4 top-4 p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
                {isExpanded ? (
                    <EyeOff className="text-gray-600 dark:text-gray-300" size={20} />
                ) : (
                    <Eye className="text-gray-600 dark:text-gray-300" size={20} />
                )}
            </button>

            <button 
                onClick={() => setToggleMenu(!toggleMenu)}
                className="absolute right-4 top-4 p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
                <EllipsisVertical
                    className="text-gray-600 dark:text-gray-300"
                    size={20}
                />
                {toggleMenu && <EditOption taskId={task.taskId} setEdit={setEdit}/>}
            </button>

            <div className={`mb-8 mt-8 ${!isExpanded && 'h-[160px] overflow-hidden'}`}>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {task.description}
                </p>
            </div>

            <div className="flex justify-between items-center pt-4 border-t border-gray-200 dark:border-gray-600 absolute bottom-4 left-4 right-4">
                <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-600 dark:text-gray-300">Status</span>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        statusColors[task.status]
                    }`}>
                        {task?.status}
                    </span>
                </div>
                
                <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-600 dark:text-gray-300">Priority</span>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        priorityColors[task.priority]
                    }`}>
                        {task?.priority}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Card;
