import { useContext } from "react";
import { TaskContext } from "../hooks/useLocalStorage";


const EditOption = ({ taskId, setEdit }) => {

	const { removeTask, markCompleted } = useContext(TaskContext);
	
	const handleEdit = () => {
		localStorage.setItem("editId", taskId)
		setEdit("updateTask");
	}
	return (
		<>
			<div className="flex flex-col gap-2 absolute right-6 top-1 bg-gray-900 shadow-lg rounded-md p-2 border border-gray-700 min-w-[160px] z-20">
				<button
					className="text-left px-3 py-1.5 text-gray-300 hover:bg-purple-600 rounded transition-colors flex items-center gap-2"
					onClick={() =>{handleEdit()}}
				>
					<span>✏️</span> Edit
				</button>
				<button
					className="text-left px-3 py-1.5 text-red-300 hover:bg-red-600 rounded transition-colors flex items-center gap-2"
					onClick={() => {
						removeTask(taskId);
					}}
				>
					<span>🗑️</span> Delete
				</button>
				<button
					className="text-left px-3 py-1.5 text-green-300 hover:bg-green-600 rounded transition-colors flex items-center gap-2"
					onClick={() => {
						markCompleted(taskId);
					}}
				>
					<span>✅</span> Mark as Completed
				</button>
			</div>

			
		</>
	);
};

export default EditOption;