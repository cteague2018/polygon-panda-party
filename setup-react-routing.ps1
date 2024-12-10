function App() {
    return (
        <div className="min-h-screen bg-gray-100">
            <nav className="bg-white shadow-lg mb-8">
                <div className="container mx-auto px-4">
                    <ul className="flex space-x-8 py-4">
                        <li>
                            <button onClick={() => console.log('Home clicked')} className="text-gray-800 hover:text-blue-600 transition-colors">
                                Home
                            </button>
                        </li>
                        <li>
                            <button onClick={() => console.log('Winners clicked')} className="text-gray-800 hover:text-blue-600 transition-colors">
                                Winners
                            </button>
                        </li>
                        <li>
                            <button onClick={() => console.log('About clicked')} className="text-gray-800 hover:text-blue-600 transition-colors">
                                About
                            </button>
                        </li>
                    </ul>
                </div>
            </nav>

            <div className="container mx-auto px-4 py-8">
                <h1 className="text-4xl font-bold mb-4">Welcome to Polygon Panda Party! 🐼</h1>
                <p className="text-lg">This is the home page.</p>
            </div>
        </div>
    );
}