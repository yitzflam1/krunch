import React, { useState } from 'react';
import { Phone, Mail, MessageCircle, X } from 'lucide-react';
import ContactOption from './ContactOption';

export default function ContactButton() {
  const [isOpen, setIsOpen] = useState(false);

  const contactOptions = [
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      action: 'https://wa.me/+972000000000',
      color: 'green',
    },
    {
      icon: Phone,
      label: 'Call',
      action: 'tel:+972000000000',
      color: 'blue',
    },
    {
      icon: Mail,
      label: 'Email',
      action: 'mailto:info@krunchies.com',
      color: 'orange',
    },
  ];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-white text-gray-900 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
      >
        Contact Us
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl z-50">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              <X size={20} />
            </button>
            <div className="py-2">
              {contactOptions.map((option, index) => (
                <ContactOption key={index} {...option} />
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}