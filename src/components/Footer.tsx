import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm">
            Powered by <a href="https://techeasys.com" className="text-orange-400 hover:text-orange-300" target="_blank" rel="noopener noreferrer">TechEasy Solutions</a>
          </p>
          <p className="text-sm mt-2">© {new Date().getFullYear()} Krunchies Jerusalem. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}