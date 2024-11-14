import React, { useState } from 'react';
import { Hero } from '../components/Hero';
import { AQICard } from '../components/AQICard';
import { Chart } from '../components/Chart';
import { SustainabilityTips } from '../components/SustainabilityTips';
import { CitySearch } from '../components/CitySearch';
import { useAQIData, useAQIHistory } from '../hooks/useAQIData';

export const Home: React.FC = () => {
  const [selectedCity, setSelectedCity] = useState('london');
  const { aqi, city, isLoading } = useAQIData(selectedCity);
  const { data: historyData } = useAQIHistory();

  return (
    <div>
      <Hero />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-12">
          {/* AQI Section */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Current Air Quality</h2>
            <CitySearch onCityChange={setSelectedCity} currentCity={selectedCity} />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <AQICard aqi={aqi} city={city} loading={isLoading} />
              <div className="md:col-span-2">
                <Chart data={historyData} />
              </div>
            </div>
          </section>

          {/* Tips Section */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Sustainability Tips</h2>
            <SustainabilityTips />
          </section>
        </div>
      </main>
    </div>
  );
};