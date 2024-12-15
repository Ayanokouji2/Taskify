import { useEffect } from 'react';
import Navbar from './components/Navbar';
import TaskList from './components/TaskList';
import { TaskProvider } from './hooks/useLocalStorage';
import useTheme from './hooks/theme/themeContext';

const App = () => {
	const { themeMode } = useTheme();

	useEffect(() => {
		const html = document.querySelector('html');

		html.classList.remove('light', 'dark');

		html.classList.add(themeMode);
	}, [themeMode]);

	return (
		<div className='w-full h-screen'>
			<Navbar />
			<TaskProvider>
				<TaskList />
			</TaskProvider>
		</div>
	);
};

export default App;
