import { useState, useEffect } from "react";

const useLocalStorage = () => {
	const [tasks, setTask] = useState([]);

	useEffect(() => {
		(() => {
			const item = Object.keys(localStorage)
				.map((key) => localStorage.getItem(key))
				.map((task) => task && JSON.parse(task));

            setTask(item);
		})();
	});

    const addTask = (task) => {

        setTask(prev => [...prev, task])
        localStorage.setItem(task.taskId, JSON.stringify(task))
        console.log(tasks,"What is the status of tasks.",task)
    }

    const removeTask = (taskId) => {
        localStorage.removeItem(taskId);
        const updatedTask = tasks.filter(task => task.taskId !==taskId);
        setTask(updatedTask)
    }

    const markAsCompleted = (taskId) => {
        const task = JSON.parse(localStorage.getItem(taskId));

        if(!task)return;

        task.status = "completed";
        localStorage.setItem(taskId, JSON.stringify(task));
        tasks.find(item=> taskId === item.taskId).status === "completed";

        console.log(tasks, "After updating");
    }
    return { tasks, addTask, removeTask, markAsCompleted };
};

export default useLocalStorage;
