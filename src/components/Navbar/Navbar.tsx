import React from 'react';
import Logo from '../Logo/Logo';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Logo />
          <div className="flex space-x-6">
            <Link to="/" className="text-gray-700 hover:text-orange-600 transition-colors">Home</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}