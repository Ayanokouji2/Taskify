import { XIcon } from "lucide-react";

const TaskInput = ({ propValue, toggleProp, taskList, updateTaskList }) => {
	
	const handleSubmit = (event) => {
		event.preventDefault();
		
		const formData = new FormData(event.target);

		const task = {
			taskId: Math.floor(Math.random()*9000 + 1000),
			description: formData.get("description"),
			status: formData.get("status"),
			priority: formData.get("priority")
		}

		localStorage.setItem(task.taskId,JSON.stringify(task))
		updateTaskList([...taskList,task])
		toggleProp(false)
	};

	return (
		<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
			<div className="bg-white rounded-lg shadow-2xl w-full max-w-md relative animate-fadeIn">
				<button 
					className="absolute right-4 top-4 p-2 hover:bg-gray-100 rounded-full transition-colors"  
					onClick={() => toggleProp(false)}
				>
					<XIcon className="text-gray-500 hover:text-red-500 transition-colors" strokeWidth={2} />
				</button>

				<form onSubmit={handleSubmit} className="p-6">
					<h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
						Add New Task
					</h2>

					{/* Description Field */}
					<div className="mb-6">
						<label
							className="block text-gray-700 text-sm font-semibold mb-2"
							htmlFor="description"
						>
							Description
						</label>
						<textarea
							id="description"
							name="description"
							rows={4}
							className="w-full px-4 py-2 text-gray-700 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all"
							placeholder="What needs to be done?"
							required
						/>
					</div>

					<div className="grid grid-cols-2 gap-6 mb-6">
						{/* Status Dropdown */}
						<div>
							<label
								className="block text-gray-700 text-sm font-semibold mb-2"
								htmlFor="status"
							>
								Status
							</label>
							<select
								id="status"
								name="status"
								className="w-full px-4 py-2 text-gray-700 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all"
								required
							>
								<option value="pending">Pending</option>
								<option value="completed">Completed</option>
							</select>
						</div>

						{/* Priority Dropdown */}
						<div>
							<label
								className="block text-gray-700 text-sm font-semibold mb-2"
								htmlFor="priority"
							>
								Priority
							</label>
							<select
								id="priority"
								name="priority"
								className="w-full px-4 py-2 text-gray-700 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all"
								required
							>
								<option value="low">Low</option>
								<option value="medium">Medium</option>
								<option value="high">High</option>
							</select>
						</div>
					</div>

					{/* Submit Button */}
					<div className="flex justify-end">
						<button
							type="submit"
							className="px-6 py-2.5 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-all transform hover:scale-105"
						>
							Add Task
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default TaskInput;
