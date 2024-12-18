import React from 'react';
import ContactButton from '../ContactButton/ContactButton';
import OrderButton from '../OrderButton/OrderButton';

export default function Hero() {
  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?auto=format&fit=crop&q=80"
          alt="Premium Fried Chicken"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>
      
      <div className="relative min-h-screen flex items-center justify-center">
        <div className="text-white text-center max-w-4xl px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-5xl sm:text-6xl font-bold mb-8">Welcome to Krunchies Jerusalem</h1>
          <p className="text-xl mb-12 leading-relaxed">
            Experience premium takeout chicken crafted with passion. At Krunchies Jerusalem, 
            we take pride in serving the finest chicken dishes to our community. Our commitment 
            to quality and taste has made us the go-to destination for yeshiva and seminary students, 
            as well as prestigious events throughout Jerusalem.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <OrderButton />
            <ContactButton />
          </div>
        </div>
      </div>
    </div>
  );
}