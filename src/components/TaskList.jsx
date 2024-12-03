import { useState } from "react";
import Header from "./Header";
import TaskInput from "./TaskInput";
import Card from "./Card";
import useLocalStorage from "../hooks/useLocalStorage";

const TaskList = () => {
	const [propToggleValue, setPropValue] = useState(false);
	const { tasks } = useLocalStorage();

	const toggleProp = (value) => {
		setPropValue(value);
	};

	return (
		<div className={`px-12 relative w-full`}>
			{propToggleValue && <TaskInput toggleProp={toggleProp} />}
			<Header propValue={propToggleValue} toggleProp={toggleProp} />
			<div className="grid gap-5 md:grid-cols-3 lg:grid-cols-5 py-5 ">
				
				{/*container for all the task*/}
				{tasks.length > 0 ? (
					tasks.map((item) => <Card task={item} key={item.taskId} />)
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
