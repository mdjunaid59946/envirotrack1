import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Leaf } from 'lucide-react';

export const Navbar: React.FC = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path ? 'text-green-600' : 'text-gray-600 hover:text-green-600';
  };

  return (
    <header className="bg-white shadow-sm fixed w-full z-10">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Leaf className="w-8 h-8 text-green-600" />
            <span className="text-2xl font-bold text-gray-900">EcoTrack</span>
          </Link>
          
          <div className="flex items-center space-x-8">
            <Link 
              to="/" 
              className={`${isActive('/')} font-medium transition-colors duration-200`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`${isActive('/about')} font-medium transition-colors duration-200`}
            >
              About Us
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};