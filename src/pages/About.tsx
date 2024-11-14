import React from 'react';
import { Users, Target, Globe, Shield } from 'lucide-react';

export const About: React.FC = () => {
  const team = [
    {
      name: 'Monish.R',
      role: 'Environmental Scientist',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=250&h=250&auto=format&fit=crop',
    },
    {
      name: 'Shaswat Mishra',
      role: 'Data Analyst',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=250&h=250&auto=format&fit=crop',
    },
    {
      name: 'Junaid',
      role: 'Sustainability Expert',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=250&h=250&auto=format&fit=crop',
    },
  ];

  const values = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Environmental Stewardship',
      description: 'Committed to protecting and preserving our planet for future generations.',
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Data-Driven Insights',
      description: 'Providing accurate, real-time environmental data for informed decision-making.',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Community Focus',
      description: 'Empowering communities to take action for environmental sustainability.',
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Transparency',
      description: 'Open and honest communication about environmental challenges and solutions.',
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="bg-green-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">About EcoTrack</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Dedicated to providing real-time environmental data and empowering communities 
              to make sustainable choices for a better tomorrow.
            </p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              To provide accessible, accurate environmental data and empower individuals 
              and communities to make informed decisions for a sustainable future.
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6">
                <div className="text-green-600 mb-4 flex justify-center">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Team</h2>
            <p className="text-xl text-gray-600">
              Meet the experts behind EcoTrack's environmental monitoring system.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};