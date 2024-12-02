import avatar from "../assets/avatar.png";

const Navbar = () => {
	return (
		<nav className="bg-white shadow-md">
			<div className="max-w-7xl mx-auto px-8 py-4">
				<div className="flex justify-between items-center">
					<div className="flex items-center">
						<span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent hover:from-purple-500 hover:to-purple-700 transition-all cursor-pointer">
							Taskify
						</span>
					</div>

					<div className="flex items-center space-x-4">
						<div className="flex items-center gap-3 px-4 py-2 rounded-full bg-purple-50 hover:bg-purple-100 transition-colors cursor-pointer">
							<img 
								src={avatar} 
								alt="Profile" 
								className="h-10 w-10 rounded-full border-2 border-purple-200 hover:border-purple-400 transition-colors"
							/>
							<span className="font-medium text-gray-700 hover:text-purple-700 transition-colors">
								Master Shivam
							</span>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
