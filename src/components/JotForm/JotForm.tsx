import React, { useEffect, useRef } from 'react';
import { useJotForm } from '../../hooks/useJotForm';

interface JotFormProps {
  formId: string;
}

export default function JotForm({ formId }: JotFormProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { isLoading, error } = useJotForm(formId, containerRef);

  if (error) {
    return (
      <div className="text-center py-8">
        <p className="text-red-600">Failed to load the order form. Please try again later.</p>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-600">Loading order form...</p>
      </div>
    );
  }

  return <div ref={containerRef} className="min-h-[600px]" />;
}