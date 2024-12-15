import { useState, useContext } from "react";
import Header from "./Header";
import TaskInput from "./TaskInput";
import Card from "./Card";

import TaskUpdate from "./TaskUpdate";
import { TaskContext } from "../hooks/useLocalStorage";

const TaskList = () => {

	const {tasks} = useContext(TaskContext)
	const [propToggleValue, setPropValue] = useState(null);
	

	const toggleProp = (value) => {
		setPropValue(value);
	};

	
	return (
		<div className={`px-12 relative w-full h-screen bg-white dark:bg-gray-900`}>
			
			{propToggleValue ==="newTask" && <TaskInput toggleProp={toggleProp} /> }
			{propToggleValue ==="updateTask" && <TaskUpdate  onClose={toggleProp}/>}
			<Header propValue={propToggleValue} toggleProp={toggleProp} />
			<div className="grid gap-5 md:grid-cols-3 lg:grid-cols-5 py-5 ">
				
				{/*container for all the task*/}
				{tasks.length > 0 ? (
					tasks.map((item, index) => <Card task={item} key={index} setEdit={toggleProp} />)
				) : (
					<div className="col-span-full flex items-center justify-center min-h-[300px]">
						<div className="text-xl font-medium text-gray-600 dark:text-gray-300 p-8 bg-gradient-to-r from-purple-50 to-purple-100 dark:from-purple-700 dark:to-purple-800 rounded-lg shadow-md border border-purple-200 dark:border-purple-600 max-w-lg text-center">
							<span>No tasks added yet. Add a new task to get started! ✨</span>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default TaskList;
