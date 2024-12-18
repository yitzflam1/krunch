import { useEffect, useState, RefObject } from 'react';

export function useJotForm(formId: string, containerRef: RefObject<HTMLDivElement>) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let scriptElement: HTMLScriptElement | null = null;
    let styleElement: HTMLStyleElement | null = null;

    const loadForm = async () => {
      try {
        // Remove any existing JotForm scripts
        document.querySelectorAll('script[src*="jotform"]').forEach(el => el.remove());
        
        // Create and append the JotForm script
        scriptElement = document.createElement('script');
        scriptElement.src = `https://form.jotform.com/jsform/${formId}`;
        scriptElement.async = true;

        // Create custom styles
        styleElement = document.createElement('style');
        styleElement.textContent = `
          .jotform-form { 
            padding: 0 !important;
            margin: 0 !important;
          }
          .form-all { 
            box-shadow: none !important;
            padding: 0 !important;
            margin: 0 !important;
            background: transparent !important;
          }
          .formFooter { 
            display: none !important;
          }
          .supernova { 
            background: transparent !important;
          }
          body { 
            background: transparent !important;
          }
          .form-submit-button {
            background: #ea580c !important;
            border: none !important;
          }
          .form-submit-button:hover {
            background: #c2410c !important;
          }
        `;

        document.head.appendChild(styleElement);

        // Handle script loading
        const scriptLoadPromise = new Promise((resolve, reject) => {
          if (scriptElement) {
            scriptElement.onload = resolve;
            scriptElement.onerror = reject;
          }
        });

        if (containerRef.current) {
          containerRef.current.appendChild(scriptElement);
          await scriptLoadPromise;
          setIsLoading(false);
        }
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to load form'));
        setIsLoading(false);
      }
    };

    loadForm();

    // Cleanup function
    return () => {
      if (scriptElement && scriptElement.parentNode) {
        scriptElement.parentNode.removeChild(scriptElement);
      }
      if (styleElement && styleElement.parentNode) {
        styleElement.parentNode.removeChild(styleElement);
      }
      document.querySelectorAll('script[src*="jotform"]').forEach(el => el.remove());
    };
  }, [formId, containerRef]);

  return { isLoading, error };
}