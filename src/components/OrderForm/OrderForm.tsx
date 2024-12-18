import React from 'react';
import JotForm from '../JotForm/JotForm';

export default function OrderForm() {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-semibold mb-6 text-center text-gray-900">Place Your Order</h2>
          <JotForm formId="243512945221148" />
        </div>
      </div>
    </div>
  );
}