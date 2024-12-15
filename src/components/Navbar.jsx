import { MoonStar, Sun } from 'lucide-react';
import avatar from '../assets/avatar.png';
import useTheme from '../hooks/theme/themeContext';

const Navbar = () => {

	const { themeMode, setLightTheme, setDarkTheme } = useTheme()
	
	return (
		<nav className={`bg-gray-100 shadow-md dark:bg-gray-900 dark:border-b dark:border-gray-500`}>
			<div className='max-w-7xl mx-auto px-8 py-4'>
				<div className='flex justify-between items-center'>
					<div className='flex items-center'>
						<span className='text-2xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent hover:from-purple-300 hover:to-purple-500 transition-all cursor-pointer'>
							Taskify
						</span>
					</div>

					<div className='flex items-center space-x-4'>
						<div className='flex items-center gap-3 px-4 py-2 rounded-full bg-purple-700 dark:bg-gray-400 hover:bg-purple-600 transition-colors cursor-pointer'>
							<img
								src={avatar}
								alt='Profile'
								className='h-10 w-10 rounded-full border-2 border-purple-300 hover:border-purple-500 transition-colors'
							/>
							<span className='font-medium text-white hover:text-purple-300 transition-colors dark:text-white'>
								Master Shivam
							</span>
						</div>
					</div>

					<div className='bg-gray-700 rounded-full hover:bg-gray-600 p-3 cursor-pointer text-white' onClick={() => themeMode !== 'light' ? setLightTheme() : setDarkTheme()}>
						{themeMode !== 'light' ? <Sun /> : <MoonStar  />}
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
