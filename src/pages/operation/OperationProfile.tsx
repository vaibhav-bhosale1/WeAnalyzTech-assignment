import React from 'react';
import { Link } from 'react-router-dom';
import { User, Star } from 'lucide-react';

const OperationProfile: React.FC = () => {
  const user = {
    name: 'Operation Team',
    email: 'operation@helpdesk.com',
    contactNumber: '+1 (555) 123-4567',
    department: 'Operations',
  };

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
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">User Profile</h1>
        <p className="text-gray-600">Operation team profile and feedback management.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Profile Card */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
              <User className="w-8 h-8 text-gray-400" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-900">{user.name}</h2>
              <p className="text-gray-600">{user.email}</p>
            </div>
          </div>
          
          <div className="space-y-3">
            <div>
              <span className="text-sm font-medium text-gray-600">Username:</span>
              <p className="text-gray-900">{user.name}</p>
            </div>
            <div>
              <span className="text-sm font-medium text-gray-600">Contact Number:</span>
              <p className="text-gray-900">{user.contactNumber}</p>
            </div>
            <div>
              <span className="text-sm font-medium text-gray-600">Email:</span>
              <p className="text-gray-900">{user.email}</p>
            </div>
            <div>
              <span className="text-sm font-medium text-gray-600">Department:</span>
              <p className="text-gray-900">{user.department}</p>
            </div>
          </div>
        </div>

        {/* Feedback Section */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Give Your Feedback</h3>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Rating
              </label>
              <div className="flex space-x-1">
                {renderStars(5)}
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Comments
              </label>
              <textarea
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                placeholder="Share your feedback..."
              />
            </div>
            
            <button className="w-full bg-teal-500 text-white py-2 rounded-lg hover:bg-teal-600 transition-colors">
              Submit Feedback
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OperationProfile;