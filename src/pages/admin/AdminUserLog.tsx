import React, { useState } from 'react';
import { Search, Filter, Calendar } from 'lucide-react';

const AdminUserLog: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const logs = [
    {
      id: 1,
      user: 'John Doe',
      action: 'Login',
      timestamp: '2023-12-01 10:30:00',
      ipAddress: '192.168.1.100',
      status: 'Success',
    },
    {
      id: 2,
      user: 'Jane Smith',
      action: 'Create Ticket',
      timestamp: '2023-12-01 10:25:00',
      ipAddress: '192.168.1.101',
      status: 'Success',
    },
    {
      id: 3,
      user: 'Mike Johnson',
      action: 'Login',
      timestamp: '2023-12-01 10:20:00',
      ipAddress: '192.168.1.102',
      status: 'Failed',
    },
    {
      id: 4,
      user: 'Sarah Wilson',
      action: 'Update Profile',
      timestamp: '2023-12-01 10:15:00',
      ipAddress: '192.168.1.103',
      status: 'Success',
    },
    {
      id: 5,
      user: 'Admin User',
      action: 'System Settings',
      timestamp: '2023-12-01 10:10:00',
      ipAddress: '192.168.1.1',
      status: 'Success',
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Success':
        return 'bg-green-100 text-green-800';
      case 'Failed':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">User Log History</h1>
        <p className="text-gray-600">Track user activities and system events.</p>
      </div>

      {/* Search and Filter */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
          <div className="relative flex-1 max-w-md">
            <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search logs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            />
          </div>
          <div className="flex space-x-2">
            <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <Calendar className="w-4 h-4" />
              <span>Date Range</span>
            </button>
            <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <Filter className="w-4 h-4" />
              <span>Filter</span>
            </button>
          </div>
        </div>
      </div>

      {/* Logs Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left py-4 px-6 font-medium text-gray-900">No</th>
                <th className="text-left py-4 px-6 font-medium text-gray-900">User/Staff/Time</th>
                <th className="text-left py-4 px-6 font-medium text-gray-900">Staff ID</th>
                <th className="text-left py-4 px-6 font-medium text-gray-900">Department</th>
                <th className="text-left py-4 px-6 font-medium text-gray-900">Activity</th>
                <th className="text-left py-4 px-6 font-medium text-gray-900">Logging Date/Time</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {logs.map((log, index) => (
                <tr key={log.id} className="hover:bg-gray-50 transition-colors">
                  <td className="py-4 px-6">
                    <span className="text-gray-900">{index + 1}</span>
                  </td>
                  <td className="py-4 px-6">
                    <div>
                      <p className="font-medium text-gray-900">{log.user}</p>
                      <p className="text-sm text-gray-600">{log.ipAddress}</p>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span className="text-teal-600 font-medium">USR-{String(log.id).padStart(3, '0')}</span>
                  </td>
                  <td className="py-4 px-6">
                    <span className="text-gray-600">Customer Service</span>
                  </td>
                  <td className="py-4 px-6">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(log.status)}`}>
                      {log.action}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <span className="text-gray-600">{log.timestamp}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between">
          <p className="text-sm text-gray-600">Showing 1 to 5 of 5 entries</p>
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

export default AdminUserLog;