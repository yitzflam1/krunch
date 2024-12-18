import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function OrderButton() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate('/order')}
      className="bg-orange-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-orange-700 transition-colors"
    >
      Order Now
    </button>
  );
}