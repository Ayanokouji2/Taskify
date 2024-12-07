import { useContext } from "react";
import { TaskContext } from "../hooks/useLocalStorage";


const EditOption = ({ taskId, setEdit }) => {

	const { removeTask, markCompleted } = useContext(TaskContext);
	
	// const { removeTask, markAsCompleted, setTaskId } = useLocalStorage();

	const handleEdit = () => {
		localStorage.setItem("editId", taskId)
		setEdit("updateTask");
	}
	return (
		<>
			<div className="flex flex-col gap-2 absolute right-6 top-1 bg-white shadow-lg rounded-md p-2 border border-gray-200 min-w-[160px] z-20">
				<button
					className="text-left px-3 py-1.5 text-sm text-gray-700 hover:bg-purple-50 rounded transition-colors flex items-center gap-2"
					onClick={() =>{handleEdit()}}
				>
					<span>✏️</span> Edit
				</button>
				<button
					className="text-left px-3 py-1.5 text-sm text-red-600 hover:bg-red-50 rounded transition-colors flex items-center gap-2"
					onClick={() => {
						removeTask(taskId);
					}}
				>
					<span>🗑️</span> Delete
				</button>
				<button
					className="text-left px-3 py-1.5 text-sm text-green-600 hover:bg-green-50 rounded transition-colors flex items-center gap-2"
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