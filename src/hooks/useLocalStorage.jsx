import { useState, useEffect, createContext } from "react";

const TaskContext = createContext();
const TaskProvider = ({ children }) => {
	const [tasks, setTask] = useState([]);
	// const [taskIdToEdit, setTaskIdToEdit] = useState(null);

	useEffect(() => {
		const fetchData = () => {
			const taskInLS = Object.keys(localStorage)
				.map((key) => key.includes("task_") && localStorage.getItem(key))
				.filter(Boolean)
				.map((task) => JSON.parse(task));

			console.log("this is running", taskInLS);
			setTask(taskInLS);
		};
		fetchData();
	}, []);

	const getTask = (taskId) => JSON.parse(localStorage.getItem(taskId));

	const addTaskToLS = (taskId, task) =>
		localStorage.setItem(taskId, JSON.stringify(task));

	const addTask = (task) => {
		// react state is updated.
		setTask((prev) => [...prev, task]);

		// localStorage is updated.
		addTaskToLS(task.taskId, task);
		// localStorage.setItem(task.taskId, JSON.stringify(task));
	};

	const removeTask = (taskId) => {
		setTask((prev) => prev.filter((key) => key.taskId !== taskId));

		localStorage.removeItem(taskId);
	};

	const markCompleted = (taskId) => {
		// tasks.find(key => key.taskId === taskId).status = "completed"
		setTask((prev) =>
			prev.map((task) =>
				task.taskId === taskId ? { ...task, status: "completed" } : task
			)
		);

		const task = getTask(taskId);
		task.status = "completed";

		addTaskToLS(taskId, task);
		// localStorage.setItem(taskId,JSON.stringify(task));
	};

	const updateTask = (taskId, task) => {
		setTask((prev) =>
			prev.map((item) => (item.taskId === taskId ? task : item))
		);
		const item = getTask(taskId);

		const updatedTask = { ...item, ...task };

		addTaskToLS(taskId, updatedTask);
		// localStorage.setItem(taskId, JSON.stringify(updatedTask));
	};

	const TaskValue = {
		tasks,
		addTask,
		removeTask,
		markCompleted,
		updateTask,
	};

	return (
		<TaskContext.Provider value={TaskValue}>{children}</TaskContext.Provider>
	);
};

export { TaskContext, TaskProvider };
