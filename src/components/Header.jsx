const Header = ({ propValue, toggleProp }) => {
	return (
		<div className="mb-8">
			<div className="flex items-center justify-between py-4 border-b border-gray-200">
				<div className="flex items-center gap-2">
					<h2 className="text-xl font-semibold text-gray-800">Task Overview</h2>
					<span className="px-3 py-1 text-sm font-medium text-purple-700 bg-purple-100 rounded-full">
						{localStorage.length} task
					</span>
				</div>
				<button
					className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white transition-colors bg-purple-600 rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
					onClick={() => toggleProp(!propValue)}
				>
					<span>+</span>
					Add New Task
				</button>
			</div>
		</div>
	);
};

export default Header;
