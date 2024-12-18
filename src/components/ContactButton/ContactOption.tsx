import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ContactOptionProps {
  icon: LucideIcon;
  label: string;
  action: string;
  color: string;
}

export default function ContactOption({ icon: Icon, label, action, color }: ContactOptionProps) {
  const colorClasses = {
    green: 'hover:text-green-600',
    blue: 'hover:text-blue-600',
    orange: 'hover:text-orange-600',
  };

  return (
    <a
      href={action}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center px-4 py-2 text-gray-700 ${colorClasses[color as keyof typeof colorClasses]} transition-colors`}
    >
      <Icon className="h-5 w-5 mr-3" />
      <span>{label}</span>
    </a>
  );
}