// src/components/Navbar.js  
import React from 'react';  
import { Link } from 'react-router-dom';  

const Navbar = () => {  
    return (  
        <nav className="bg-purple-600 p-4">  
            <div className="container mx-auto flex justify-between items-center">  
                <h1 className="text-white text-2xl font-bubblegum">🐼 Polygon Panda Party</h1>  
                <div className="space-x-4">  
                    <Link to="/" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">  
                        🏆 View Current Winners  
                    </Link>  
                    <Link to="/winners" className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600">  
                        📜 View Past Winners  
                    </Link>  
                </div>  
            </div>  
        </nav>  
    );  
};  

export default Navbar;  
