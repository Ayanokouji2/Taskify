import { useContext } from "react";
import { TaskContext } from "../hooks/useLocalStorage";

const Header = ({ propValue, toggleProp }) => {
	const {tasks} = useContext(TaskContext)
	return (
		<div className="mb-8">
			<div className="flex items-center justify-between py-4 border-b border-gray-200 dark:border-gray-700">
				<div className="flex items-center gap-2">
					<h2 className="text-xl font-semibold text-gray-800 dark:text-white">Task Overview</h2>
					<span className="px-3 py-1 text-sm font-medium text-purple-700 bg-purple-100 dark:bg-purple-600 dark:text-white rounded-full">
						{tasks.length} task
					</span>
				</div>
				<button
					className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white transition-colors bg-purple-600 rounded-lg hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
					onClick={() => toggleProp("newTask")}
				>
					<span>+</span>
					Add New Task
				</button>
			</div>
		</div>
	);
};

export default Header;
