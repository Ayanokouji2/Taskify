import Navbar from "./components/Navbar";
import TaskList from "./components/TaskList";
import { TaskProvider } from "./hooks/useLocalStorage";

const App = () => {
	return (
		<div>
			<Navbar />
			<TaskProvider>
				<TaskList />
			</TaskProvider>
		</div>
	);
};

export default App;
