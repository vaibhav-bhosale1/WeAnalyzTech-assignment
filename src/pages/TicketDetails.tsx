import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, MessageCircle, Paperclip, Star, X } from 'lucide-react';

const TicketDetails: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState('');

  // Mock ticket data
  const ticket = {
    id: id || '1234',
    title: 'Login Issue - Cannot access account',
    category: 'Technical',
    priority: 'High',
    status: 'Open',
    date: '12/01/23',
    description: 'I am unable to log into my account. When I enter my credentials, I get an error message saying "Invalid username or password" even though I am sure my credentials are correct. I have tried resetting my password but did not receive the reset email.',
    assignee: 'John Smith',
    rating: 0,
  };

  const conversations = [
    {
      id: 1,
      sender: 'You',
      message: 'I am unable to log into my account. When I enter my credentials, I get an error message.',
      time: '2 hours ago',
      isUser: true,
    },
    {
      id: 2,
      sender: 'Support Agent',
      message: 'Thank you for contacting us. I can help you with this login issue. Can you please try clearing your browser cache and cookies?',
      time: '1 hour ago',
      isUser: false,
    },
    {
      id: 3,
      sender: 'You',
      message: 'I tried clearing the cache but the issue persists. What should I do next?',
      time: '30 minutes ago',
      isUser: true,
    },
  ];

  const handleCloseTicket = () => {
    setShowModal(true);
  };

  const handleSubmitFeedback = () => {
    console.log('Feedback submitted:', { rating, feedback });
    setShowModal(false);
    navigate('/my-tickets');
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center space-x-4">
        <button
          onClick={() => navigate(-1)}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div className="flex-1">
          <div className="flex items-center space-x-3">
            <h1 className="text-2xl font-bold text-gray-900">Ticket #{ticket.id}</h1>
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
              ticket.status === 'Open' ? 'bg-green-100 text-green-800' :
              ticket.status === 'In Progress' ? 'bg-yellow-100 text-yellow-800' :
              'bg-gray-100 text-gray-800'
            }`}>
              {ticket.status}
            </span>
          </div>
          <p className="text-gray-600 mt-1">{ticket.title}</p>
        </div>
        {ticket.status !== 'Resolved' && (
          <button
            onClick={handleCloseTicket}
            className="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-600 transition-colors"
          >
            Close Ticket
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Ticket Details */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Ticket Details</h2>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-600">Description</label>
                <p className="text-gray-900 mt-1">{ticket.description}</p>
              </div>
              <div className="flex items-center space-x-2">
                <Paperclip className="w-4 h-4 text-gray-400" />
                <span className="text-sm text-gray-600">No attachments</span>
              </div>
            </div>
          </div>

          {/* Conversation */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="p-6 border-b border-gray-100">
              <h2 className="text-lg font-semibold text-gray-900 flex items-center space-x-2">
                <MessageCircle className="w-5 h-5" />
                <span>Conversation</span>
              </h2>
            </div>
            <div className="p-6 space-y-4 max-h-96 overflow-y-auto">
              {conversations.map((conv) => (
                <div key={conv.id} className={`flex ${conv.isUser ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-xs lg:max-w-md px-4 py-3 rounded-lg ${
                    conv.isUser 
                      ? 'bg-teal-500 text-white' 
                      : 'bg-gray-100 text-gray-900'
                  }`}>
                    <p className="text-sm font-medium mb-1">{conv.sender}</p>
                    <p className="text-sm">{conv.message}</p>
                    <p className={`text-xs mt-2 ${conv.isUser ? 'text-teal-100' : 'text-gray-500'}`}>
                      {conv.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Reply Box */}
            <div className="p-6 border-t border-gray-100">
              <div className="flex space-x-4">
                <input
                  type="text"
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
                <button className="bg-teal-500 text-white px-6 py-2 rounded-lg hover:bg-teal-600 transition-colors">
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Ticket Information</h3>
            <div className="space-y-3">
              <div>
                <label className="text-sm font-medium text-gray-600">Category</label>
                <p className="text-gray-900">{ticket.category}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600">Priority</label>
                <p className={`font-medium ${
                  ticket.priority === 'High' ? 'text-red-600' :
                  ticket.priority === 'Medium' ? 'text-yellow-600' :
                  'text-green-600'
                }`}>{ticket.priority}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600">Created</label>
                <p className="text-gray-900">{ticket.date}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600">Assigned to</label>
                <p className="text-gray-900">{ticket.assignee}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Feedback Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-md mx-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Close Ticket</h3>
              <button
                onClick={() => setShowModal(false)}
                className="p-1 hover:bg-gray-100 rounded"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Rate your experience
                </label>
                <div className="flex space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      onClick={() => setRating(star)}
                      className="p-1"
                    >
                      <Star
                        className={`w-6 h-6 ${
                          star <= rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Additional feedback (optional)
                </label>
                <textarea
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  placeholder="Tell us about your experience..."
                />
              </div>
            </div>
            
            <div className="flex justify-end space-x-3 mt-6">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmitFeedback}
                className="px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-colors"
              >
                Submit & Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TicketDetails;