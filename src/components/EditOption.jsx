const EditOption = ({taskId}) => {
	return (
		<div className="flex flex-col gap-2 absolute right-6 top-1 bg-white shadow-lg rounded-md p-2 border border-gray-200 min-w-[160px] z-20">
			<button 
				className="text-left px-3 py-1.5 text-sm text-gray-700 hover:bg-purple-50 rounded transition-colors flex items-center gap-2"
			>
				<span>✏️</span> Edit
			</button>
			<button 
				className="text-left px-3 py-1.5 text-sm text-red-600 hover:bg-red-50 rounded transition-colors flex items-center gap-2"
				onClick={() => {
					localStorage.removeItem(taskId);
					window.location.reload(); // Refresh to update UI after delete
				}}
			>
				<span>🗑️</span> Delete
			</button>
			<button 
				className="text-left px-3 py-1.5 text-sm text-green-600 hover:bg-green-50 rounded transition-colors flex items-center gap-2"
				onClick={() => {
					try {
						const item = JSON.parse(localStorage.getItem(taskId));
						if (!item) return;
						
						item.status = "completed";
						localStorage.setItem(taskId, JSON.stringify(item));
						window.location.reload(); // Refresh to update UI
					} catch (err) {
						console.error("Error updating task status:", err);
					}
				}}
			>
				<span>✅</span> Mark as Completed
			</button>
		</div>
	);
};

export default EditOption;
