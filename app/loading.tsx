'use client';

import { useEffect, useState } from 'react';

export default function Loading() {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 40);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress < 100) return;

    const timer = window.setTimeout(() => setIsVisible(false), 250);
    return () => window.clearTimeout(timer);
  }, [progress]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-white flex flex-col items-center justify-center z-99999">
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-mono font-bold text-black mb-8 tracking-tight">
          devTemilorun. is loading...
        </h1>
        <div className="w-64 h-1 bg-gray-200 rounded-full overflow-hidden mx-auto">
          <div 
            className="h-full bg-black rounded-full transition-all duration-100 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="mt-4 text-gray-600 font-mono text-sm tracking-wider">
          {progress}% — INITIALIZING
        </p>
      </div>
    </div>
  );
}