import React, { useEffect, useState, useRef, useContext } from "react";
import { XIcon } from "lucide-react";
import { TaskContext } from "../hooks/useLocalStorage";

const TaskUpdate = ({ onClose }) => {
	const { tasks, updateTask } = useContext(TaskContext);
	const [taskId, setTaskId] = useState(null);
	const textareaRef = useRef(null);

	const [formValues, setFormValues] = useState({
		description: "",
		priority: "low",
	});

	useEffect(() => {
		const currentTaskId = localStorage.getItem("editId");
		if (!currentTaskId) return null;

		setTaskId(currentTaskId);
		textareaRef.current && textareaRef.current.focus();

		const item = tasks.find(task => task.taskId === currentTaskId);
		setFormValues({
			description: item?.description,
			priority: item?.priority,
		});
	}, [tasks]);

	const handleSubmit = (event) => {
		event.preventDefault();
		const formData = new FormData(event.target);

		const updates = {
			description: formData.get("description"),
			priority: formData.get("priority"),
		};

		updateTask(taskId, updates);
		onClose(null);
		localStorage.setItem("editId", null);
	};

	const handleCancel = () => {
		onClose(null);
		localStorage.setItem("editId", null);
	};

	return (
		<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
			<div className="bg-white rounded-lg shadow-2xl w-full max-w-md relative animate-fadeIn dark:bg-gray-800">
				<button 
					className="absolute right-4 top-4 p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"  
					onClick={handleCancel}
				>
					<XIcon className="text-gray-500 hover:text-red-500 transition-colors dark:text-gray-300" strokeWidth={2} />
				</button>

				<form onSubmit={handleSubmit} className="p-6">
					<h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-6">
						Update Task
					</h2>

					{/* Task ID Field */}
					<div className="mb-6">
						<label className="block text-gray-700 dark:text-gray-300 text-sm font-semibold mb-2" htmlFor="taskId">
							Task ID
						</label>
						<input
							type="text"
							name="taskId"
							id="taskId"
							value={taskId ?? ""}
							className="w-full px-4 py-2 text-gray-500 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg cursor-not-allowed"
							disabled
						/>
					</div>

					{/* Description Field */}
					<div className="mb-6">
						<label className="block text-gray-700 dark:text-gray-300 text-sm font-semibold mb-2" htmlFor="description">
							Description
						</label>
						<textarea
							ref={textareaRef}
							name="description"
							id="description"
							rows="4"
							value={formValues.description}
							onChange={(e) =>
								setFormValues((prev) => ({
									...prev,
									description: e.target.value,
								}))
							}
							className="w-full px-4 py-2 text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all resize-none"
							placeholder="Update task description..."
							required
						></textarea>
					</div>

					{/* Priority Dropdown */}
					<div className="mb-8">
						<label className="block text-gray-700 dark:text-gray-300 text-sm font-semibold mb-2" htmlFor="priority">
							Priority
						</label>
						<select
							name="priority"
							id="priority"
							value={formValues.priority}
							onChange={(e) =>
								setFormValues((prev) => ({ ...prev, priority: e.target.value }))
							}
							className="w-full px-4 py-2 text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all"
							required
						>
							<option value="low">Low</option>
							<option value="medium">Medium</option>
							<option value="high">High</option>
						</select>
					</div>

					{/* Action Buttons */}
					<div className="flex gap-4">
						<button
							type="button"
							onClick={handleCancel}
							className="w-full py-2 px-4 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-200 focus:ring-offset-2"
						>
							Cancel
						</button>
						<button
							type="submit"
							className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-all"
						>
							Save Changes
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default TaskUpdate;
