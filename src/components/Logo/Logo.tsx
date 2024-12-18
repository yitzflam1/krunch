import React from 'react';
import { ChefHat } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Logo() {
  return (
    <Link to="/" className="flex items-center space-x-2">
      <div className="relative w-10 h-10">
        {/* Placeholder for actual logo */}
        <ChefHat className="h-10 w-10 text-orange-600" />
      </div>
      <span className="font-bold text-xl text-gray-900">Krunchies</span>
    </Link>
  );
}