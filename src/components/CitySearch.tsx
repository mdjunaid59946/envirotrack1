import React, { useState } from 'react';
import { Search } from 'lucide-react';

type CitySearchProps = {
  onCityChange: (city: string) => void;
  currentCity: string;
};

export const CitySearch: React.FC<CitySearchProps> = ({ onCityChange, currentCity }) => {
  const [inputCity, setInputCity] = useState(currentCity);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputCity.trim()) {
      onCityChange(inputCity.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div className="relative">
        <input
          type="text"
          value={inputCity}
          onChange={(e) => setInputCity(e.target.value)}
          placeholder="Enter city name..."
          className="w-full px-4 py-2 pr-12 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
        />
        <button
          type="submit"
          className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-gray-500 hover:text-green-600 transition-colors"
        >
          <Search className="w-5 h-5" />
        </button>
      </div>
    </form>
  );
};