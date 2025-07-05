import React, { useState } from 'react';
import { Search, Filter, Eye, Edit, Trash2 } from 'lucide-react';

const AdminDatabase: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Operation Team');
  const [searchTerm, setSearchTerm] = useState('');

  const tabs = ['Operation Team', 'Technical Support'];

  const tickets = [
    {
      id: 'ARC-01',
      name: 'John Doe',
      department: 'Software',
      specialty: 'Networking',
      rating: 5,
    },
    {
      id: 'ARC-02',
      name: 'Jane Smith',
      department: 'Software',
      specialty: 'Networking',
      rating: 4,
    },
    {
      id: 'ARC-03',
      name: 'Mike Johnson',
      department: 'All',
      specialty: 'Software',
      rating: 5,
    },
  ];

  const renderStars = (rating: number) => {
    return (
      <div className="flex space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <div
            key={star}
            className={`w-4 h-4 rounded-full ${
              star <= rating ? 'bg-yellow-400' : 'bg-gray-300'
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
        <h1 className="text-2xl font-bold text-gray-900">Database</h1>
        <p className="text-gray-600">Manage team members and their information.</p>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 px-6">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === tab
                    ? 'border-teal-500 text-teal-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>

        {/* Search and Filter */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
            <div className="relative flex-1 max-w-md">
              <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search team members..."
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

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left py-4 px-6 font-medium text-gray-900">Staff ID</th>
                <th className="text-left py-4 px-6 font-medium text-gray-900">Name</th>
                <th className="text-left py-4 px-6 font-medium text-gray-900">Department</th>
                <th className="text-left py-4 px-6 font-medium text-gray-900">Specialty</th>
                <th className="text-left py-4 px-6 font-medium text-gray-900">Rating</th>
                <th className="text-left py-4 px-6 font-medium text-gray-900">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {tickets.map((ticket) => (
                <tr key={ticket.id} className="hover:bg-gray-50 transition-colors">
                  <td className="py-4 px-6">
                    <span className="text-teal-600 font-medium">{ticket.id}</span>
                  </td>
                  <td className="py-4 px-6">
                    <p className="font-medium text-gray-900">{ticket.name}</p>
                  </td>
                  <td className="py-4 px-6">
                    <span className="text-gray-600">{ticket.department}</span>
                  </td>
                  <td className="py-4 px-6">
                    <span className="text-gray-600">{ticket.specialty}</span>
                  </td>
                  <td className="py-4 px-6">
                    {renderStars(ticket.rating)}
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex space-x-2">
                      <button className="p-1 text-blue-600 hover:text-blue-700 transition-colors">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="p-1 text-green-600 hover:text-green-700 transition-colors">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="p-1 text-red-600 hover:text-red-700 transition-colors">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between">
          <p className="text-sm text-gray-600">Showing 1 to 3 of 3 entries</p>
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

export default AdminDatabase;