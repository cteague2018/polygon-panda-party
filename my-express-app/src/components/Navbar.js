import React from 'react';      
import { Link } from 'react-router-dom';      

function Navbar() {      
  return (      
    <nav className="bg-gray-800 p-4">      
      <div className="max-w-4xl mx-auto flex flex-col items-center"> {/* Changed to flex-col for vertical alignment */}      
        <div style={{ fontSize: '4rem', color: 'purple' }} className="font-bold mb-10">Polygon Panda Party</div> {/* Added margin-bottom */}      
        <div className="flex mt-1"> {/* Added margin-top for spacing above buttons */}      
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