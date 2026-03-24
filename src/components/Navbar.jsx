import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Rick & Morty Explorer</h1>
        <div className="space-x-4">
          <Link 
            to="/dashboard" 
            className={({ isActive }) => 
              `hover:text-blue-300 transition ${
                isActive ? 'text-blue-300' : ''
              }`
            }
            end
          >
            Home
          </Link>
          <Link 
            to="/dashboard/characters" 
            className={({ isActive }) => 
              `hover:text-blue-300 transition ${
                isActive ? 'text-blue-300' : ''
              }`
            }
          >
            Characters
          </Link>
          <Link 
            to="/dashboard/about" 
            className={({ isActive }) => 
              `hover:text-blue-300 transition ${
                isActive ? 'text-blue-300' : ''
              }`
            }
          >
            About
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;