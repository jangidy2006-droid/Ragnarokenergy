import React, { useEffect, useState } from 'react';

const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => onComplete(), 300);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-black z-[100] flex flex-col items-center justify-center">
      <div className="text-center space-y-8">
        <div className="wolf-logo animate-pulse">
          <h1 className="text-6xl md:text-8xl font-black text-white tracking-tight">
            RAGNAROK<span className="text-red-500">™</span>
          </h1>
          <p className="text-xl md:text-2xl font-bold text-gray-300 tracking-widest mt-2">
            ENERGY DRINK
          </p>
        </div>
        
        <div className="w-64 h-2 bg-gray-800 rounded-full overflow-hidden mx-auto">
          <div 
            className="h-full bg-gradient-to-r from-red-600 to-orange-500 rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        
        <p className="text-gray-400 text-sm font-semibold tracking-wider">
          UNLEASH THE WOLF
        </p>
      </div>
    </div>
  );
};

export default LoadingScreen;
