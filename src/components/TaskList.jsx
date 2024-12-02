import { useState, useEffect } from "react";
import Header from "./Header";
import TaskInput from "./TaskInput";
import Card from "./Card";

const TaskList = () => {
	const [propToggleValue, setPropValue] = useState(false);
	const [allTask, setAllTask] = useState([]);

	const toggleProp = (value) => {
		setPropValue(value);
	};

	useEffect(() => {
		const items = Object.keys(localStorage)
			.map((key) => localStorage.getItem(key))
			.map((item) => JSON.parse(item));

		setAllTask(items);
	}, []);

	return (
		<div className={`px-12 relative w-full`}>
			{propToggleValue && (
				<TaskInput
					propValue={propToggleValue}
					toggleProp={toggleProp}
					taskList={allTask}
					updateTaskList={(value) => setAllTask(value)}
				/>
			)}
			<Header propValue={propToggleValue} toggleProp={toggleProp} />
			<div className="grid gap-5 md:grid-cols-3 lg:grid-cols-5 py-5 ">
				{" "}
				{/*container for all the task*/}
				{allTask.length > 0 ? (
					allTask.map((item) => <Card task={item} key={item.taskId} />)
				) : (
					<div className="col-span-full flex items-center justify-center min-h-[300px]">
						<div className="text-xl font-medium text-gray-600 p-8 bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg shadow-md border border-purple-200 max-w-lg text-center">
							<span>No tasks added yet. Add a new task to get started! ✨</span>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default TaskList;
