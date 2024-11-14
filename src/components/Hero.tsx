import React, { useEffect, useState } from 'react';
import { Leaf } from 'lucide-react';

export const Hero: React.FC = () => {
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) {
      setGreeting('Good Morning');
    } else if (hour >= 12 && hour < 18) {
      setGreeting('Good Afternoon');
    } else {
      setGreeting('Good Evening');
    }
  }, []);

  return (
    <div className="pt-16">
      <div 
        className="relative h-[70vh] overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop")'
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30 z-[1]" />
        
        {/* Content */}
        <div className="absolute inset-0 z-[2] flex flex-col items-center justify-center text-white">
          <div className="text-center space-y-6">
            <div className="flex items-center justify-center space-x-3 mb-2">
              <Leaf className="w-8 h-8" />
              <span className="text-2xl font-light">EcoTrack</span>
            </div>
            <h1 className="text-5xl font-bold mb-4">{greeting}!</h1>
            <div className="space-y-4">
              <p className="text-2xl font-light">Welcome to Your Environmental Dashboard</p>
              <p className="text-xl max-w-2xl mx-auto px-4 text-gray-200">
                Monitor air quality, track environmental changes, and discover ways to contribute to a sustainable future.
              </p>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-[2] animate-bounce">
          <div className="w-8 h-8 border-2 border-white/80 rounded-full flex items-center justify-center">
            <div className="w-1 h-4 bg-white/80 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
};