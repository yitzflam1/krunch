import React from 'react';
import { Phone, Mail, MessageCircle } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-lg text-gray-600">We're here to serve you the best chicken in Jerusalem</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
              
              <div className="space-y-6">
                <a
                  href="https://wa.me/+972000000000"
                  className="flex items-center space-x-3 text-gray-600 hover:text-green-600 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="h-6 w-6" />
                  <span>WhatsApp Us</span>
                </a>

                <a
                  href="tel:+972000000000"
                  className="flex items-center space-x-3 text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <Phone className="h-6 w-6" />
                  <span>Call Us</span>
                </a>

                <a
                  href="mailto:info@krunchies.com"
                  className="flex items-center space-x-3 text-gray-600 hover:text-orange-600 transition-colors"
                >
                  <Mail className="h-6 w-6" />
                  <span>Email Us</span>
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold mb-6">Order Online</h2>
            <iframe
              id="JotFormIFrame-243512945221148"
              title="Krunchies Order Form"
              src="https://form.jotform.com/243512945221148"
              style={{
                minWidth: '100%',
                height: '539px',
                border: 'none',
              }}
              scrolling="no"
            />
            <style>{`
              #JotFormIFrame-243512945221148 {
                min-width: 100%;
                max-width: 100%;
                height: 539px;
                border: none;
              }
              /* Hide JotForm branding */
              iframe[src*="jotform"] div[class*="branding"] {
                display: none !important;
              }
            `}</style>
          </div>
        </div>
      </div>
    </div>
  );
}