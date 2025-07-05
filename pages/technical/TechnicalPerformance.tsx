import React from 'react';
import { Star, Eye } from 'lucide-react';

const TechnicalPerformance: React.FC = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Technical Support 1',
      operatorNo: 'TS202020',
      department: 'INC',
      rating: 5,
    },
    {
      id: 2,
      name: 'Technical Support 2',
      operatorNo: 'TS202021',
      department: 'DEF',
      rating: 4,
    },
    {
      id: 3,
      name: 'Technical Support 3',
      operatorNo: 'TS202022',
      department: 'GHI',
      rating: 5,
    },
  ];

  const ticketStats = [
    { label: 'Total Ticket Handle', value: 8 },
    { label: 'Ticket Solved', value: 6 },
    { label: 'Ticket Pending', value: 1 },
    { label: 'Ticket In progress', value: 1 },
    { label: 'Rating', value: 5 },
  ];

  const renderStars = (rating: number) => {
    return (
      <div className="flex space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-4 h-4 ${
              star <= rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Performance</h1>
        <p className="text-gray-600">Track technical support team performance and statistics.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Team Performance */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Technical Support Name</h3>
          
          <div className="space-y-4">
            {teamMembers.map((member) => (
              <div key={member.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                    <span className="text-sm font-medium text-gray-600">
                      {member.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{member.name}</p>
                    <p className="text-sm text-gray-600">
                      Operator No: {member.operatorNo}
                    </p>
                    <p className="text-sm text-gray-600">
                      Department: {member.department}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <button className="bg-teal-500 text-white px-3 py-1 rounded text-sm hover:bg-teal-600 transition-colors">
                    View details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Statistics */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Total Ticket Handle</h3>
          
          <div className="space-y-4">
            {ticketStats.map((stat, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span className="text-gray-700">{stat.label}</span>
                <div className="flex items-center space-x-2">
                  {stat.label === 'Rating' ? (
                    renderStars(stat.value)
                  ) : (
                    <span className="font-semibold text-gray-900">{stat.value}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnicalPerformance;