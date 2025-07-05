import React from 'react';
import { Ticket, Clock, CheckCircle, AlertCircle, TrendingUp, Users } from 'lucide-react';

const AdminDashboard: React.FC = () => {
  const stats = [
    {
      title: 'Total Tickets',
      value: '12',
      color: 'bg-blue-500',
      icon: Ticket,
    },
    {
      title: 'Open',
      value: '8',
      color: 'bg-green-500',
      icon: Clock,
    },
    {
      title: 'In Progress',
      value: '2',
      color: 'bg-red-500',
      icon: AlertCircle,
    },
    {
      title: 'Resolved',
      value: '2',
      color: 'bg-yellow-500',
      icon: CheckCircle,
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600">Admin overview of helpdesk system.</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                  <p className="text-3xl font-bold text-gray-900 mt-2">{stat.value}</p>
                </div>
                <div className={`${stat.color} p-3 rounded-lg`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Analytics Chart Placeholder */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Ticket Analytics</h3>
          <div className="h-64 bg-teal-50 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <TrendingUp className="w-12 h-12 text-teal-400 mx-auto mb-2" />
              <p className="text-gray-600">Analytics Chart</p>
              <p className="text-sm text-gray-500">Chart visualization would go here</p>
            </div>
          </div>
        </div>

        {/* Team Performance */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Team Performance</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-teal-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                  <Users className="w-5 h-5 text-gray-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Support Team</p>
                  <p className="text-sm text-gray-600">Customer Service</p>
                </div>
              </div>
              <div className="text-right">
                <div className="flex space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <div key={star} className="w-4 h-4 bg-yellow-400 rounded-full"></div>
                  ))}
                </div>
                <p className="text-sm text-gray-600 mt-1">5.0 Rating</p>
              </div>
            </div>

            <div className="flex items-center justify-between p-4 bg-teal-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                  <Users className="w-5 h-5 text-gray-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Technical Support</p>
                  <p className="text-sm text-gray-600">Technical Issues</p>
                </div>
              </div>
              <div className="text-right">
                <div className="flex space-x-1">
                  {[1, 2, 3, 4].map((star) => (
                    <div key={star} className="w-4 h-4 bg-yellow-400 rounded-full"></div>
                  ))}
                  <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
                </div>
                <p className="text-sm text-gray-600 mt-1">4.0 Rating</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;