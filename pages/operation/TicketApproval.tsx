import React, { useState } from 'react';
import { Search, Eye, Check, X, User } from 'lucide-react';

const TicketApproval: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const tickets = [
    {
      id: '1234',
      subject: 'Login Issue',
      category: 'Account Access',
      priority: 'High',
      date: '12/08/21',
      assignTo: 'John Smith',
      status: 'Pending',
    },
    {
      id: '1235',
      subject: 'New ticket from user',
      category: 'Account Access',
      priority: 'Medium',
      date: '14/08/21',
      assignTo: 'Jane Doe',
      status: 'Pending',
    },
    {
      id: '1236',
      subject: 'New ticket from user',
      category: 'Feedback',
      priority: 'Low',
      date: '13/08/21',
      assignTo: 'Mike Johnson',
      status: 'Pending',
    },
    {
      id: '1243',
      subject: 'Ticket submission',
      category: 'Ticketing',
      priority: 'High',
      date: '14/08/21',
      assignTo: 'Sarah Wilson',
      status: 'Pending',
    },
    {
      id: '1114',
      subject: 'Login Issue',
      category: 'Account Access',
      priority: 'High',
      date: '3/08/21',
      assignTo: 'Tom Brown',
      status: 'Pending',
    },
  ];

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

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Ticket Approval</h1>
        <p className="text-gray-600">Review and approve pending tickets.</p>
      </div>

      {/* Search and Controls */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
          <div className="relative flex-1 max-w-md">
            <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Find ticket"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            />
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600">Show:</span>
              <select className="border border-gray-300 rounded px-3 py-1 text-sm">
                <option>10</option>
                <option>25</option>
                <option>50</option>
              </select>
              <span className="text-sm text-gray-600">Entries</span>
            </div>
          </div>
        </div>
      </div>

      {/* Tickets Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left py-4 px-6 font-medium text-gray-900">Ticket No.</th>
                <th className="text-left py-4 px-6 font-medium text-gray-900">Subject</th>
                <th className="text-left py-4 px-6 font-medium text-gray-900">Category</th>
                <th className="text-left py-4 px-6 font-medium text-gray-900">Priority</th>
                <th className="text-left py-4 px-6 font-medium text-gray-900">Date</th>
                <th className="text-left py-4 px-6 font-medium text-gray-900">Action</th>
                <th className="text-left py-4 px-6 font-medium text-gray-900">Assign to</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {tickets.map((ticket) => (
                <tr key={ticket.id} className="hover:bg-gray-50 transition-colors">
                  <td className="py-4 px-6">
                    <span className="text-teal-600 font-medium">{ticket.id}</span>
                  </td>
                  <td className="py-4 px-6">
                    <p className="font-medium text-gray-900">{ticket.subject}</p>
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
                    <span className="text-gray-600">{ticket.date}</span>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex space-x-2">
                      <button className="p-1 text-blue-600 hover:text-blue-700 transition-colors">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="p-1 text-green-600 hover:text-green-700 transition-colors">
                        <Check className="w-4 h-4" />
                      </button>
                      <button className="p-1 text-red-600 hover:text-red-700 transition-colors">
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-600">{ticket.assignTo}</span>
                    </div>
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

export default TicketApproval;