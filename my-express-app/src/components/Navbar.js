import React from 'react';  
import { Link } from 'react-router-dom';  
  
function Navbar() {  
  return (  
    <nav className="bg-gray-800 p-4">  
      <div className="max-w-4xl mx-auto flex justify-between items-center">  
        <div className="flex">  
          <Link to="/">  
            <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 mx-2">  
              🏠 Home  
            </button>  
          </Link>  
          <Link to="/winners">  
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mx-2">  
              🏆 View Current Winners  
            </button>  
          </Link>  
          <Link to="/past-winners">  
            <button className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 mx-2">  
              📜 View Past Winners  
            </button>  
          </Link>  
        </div>  
      </div>  
    </nav>  
  );  
}  
  
export default Navbar;  