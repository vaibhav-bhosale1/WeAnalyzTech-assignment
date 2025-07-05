import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, Eye, Star } from 'lucide-react';

const MyTickets: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const tickets = [
    {
      id: '1234',
      title: 'Login Issue - Cannot access account',
      category: 'Technical',
      priority: 'High',
      status: 'Open',
      date: '12/01/23',
      rating: 4,
    },
    {
      id: '1235',
      title: 'Password Reset Request',
      category: 'Account',
      priority: 'Medium',
      status: 'In Progress',
      date: '11/30/23',
      rating: 5,
    },
    {
      id: '1236',
      title: 'Billing Question - Invoice #12345',
      category: 'Billing',
      priority: 'Low',
      status: 'Resolved',
      date: '11/29/23',
      rating: 3,
    },
    {
      id: '1237',
      title: 'Feature Request - Dark Mode',
      category: 'General',
      priority: 'Low',
      status: 'Open',
      date: '11/28/23',
      rating: 0,
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Open':
        return 'bg-green-100 text-green-800';
      case 'In Progress':
        return 'bg-yellow-100 text-yellow-800';
      case 'Resolved':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High':
        return 'text-red-600';
      case 'Medium':
        return 'text-yellow-600';
      case 'Low':
        return 'text-green-600';
      default:
        return 'text-gray-600';
    }
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
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">My Tickets</h1>
          <p className="text-gray-600">Track and manage your support requests.</p>
        </div>
        <Link
          to="/new-ticket"
          className="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-600 transition-colors"
        >
          New Ticket
        </Link>
      </div>

      {/* Search and Filter */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
          <div className="relative flex-1 max-w-md">
            <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search tickets..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            />
          </div>
          <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            <Filter className="w-4 h-4" />
            <span>Filter</span>
          </button>
        </div>
      </div>

      {/* Tickets Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left py-4 px-6 font-medium text-gray-900">Ticket ID</th>
                <th className="text-left py-4 px-6 font-medium text-gray-900">Subject</th>
                <th className="text-left py-4 px-6 font-medium text-gray-900">Category</th>
                <th className="text-left py-4 px-6 font-medium text-gray-900">Priority</th>
                <th className="text-left py-4 px-6 font-medium text-gray-900">Status</th>
                <th className="text-left py-4 px-6 font-medium text-gray-900">Date</th>
                <th className="text-left py-4 px-6 font-medium text-gray-900">Rating</th>
                <th className="text-left py-4 px-6 font-medium text-gray-900">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {tickets.map((ticket) => (
                <tr key={ticket.id} className="hover:bg-gray-50 transition-colors">
                  <td className="py-4 px-6">
                    <span className="text-teal-600 font-medium">#{ticket.id}</span>
                  </td>
                  <td className="py-4 px-6">
                    <p className="font-medium text-gray-900">{ticket.title}</p>
                  </td>
                  <td className="py-4 px-6">
                    <span className="text-gray-600">{ticket.category}</span>
                  </td>
                  <td className="py-4 px-6">
                    <span className={`font-medium ${getPriorityColor(ticket.priority)}`}>
                      {ticket.priority}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(ticket.status)}`}>
                      {ticket.status}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <span className="text-gray-600">{ticket.date}</span>
                  </td>
                  <td className="py-4 px-6">
                    {ticket.rating > 0 ? renderStars(ticket.rating) : <span className="text-gray-400">-</span>}
                  </td>
                  <td className="py-4 px-6">
                    <Link
                      to={`/ticket/${ticket.id}`}
                      className="inline-flex items-center space-x-1 text-teal-600 hover:text-teal-700 transition-colors"
                    >
                      <Eye className="w-4 h-4" />
                      <span>View</span>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination */}
        <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between">
          <p className="text-sm text-gray-600">Showing 1 to 4 of 4 results</p>
          <div className="flex space-x-2">
            <button className="px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-50 transition-colors">
              Previous
            </button>
            <button className="px-3 py-1 bg-teal-500 text-white rounded text-sm">
              1
            </button>
            <button className="px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-50 transition-colors">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyTickets;