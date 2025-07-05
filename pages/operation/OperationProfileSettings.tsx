import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Save } from 'lucide-react';

const OperationProfileSettings: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: 'Operation Team',
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
    email: 'operation@helpdesk.com',
    realName: 'Operation Manager',
    accessLevel: 'Manager',
    reportAccessLevel: 'Full Access',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Operation profile updated:', formData);
    // Handle form submission
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
        <div>
          <h1 className="text-2xl font-bold text-gray-900">User Profile</h1>
          <p className="text-gray-600">Edit Account</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Profile Settings */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">Profile Settings</h2>
          
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-100 p-3 rounded">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-transparent border-none focus:outline-none"
                />
              </div>
              
              <div className="bg-gray-100 p-3 rounded">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Current Password
                </label>
                <input
                  type="password"
                  name="currentPassword"
                  value={formData.currentPassword}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-transparent border-none focus:outline-none"
                />
              </div>
              
              <div className="bg-gray-100 p-3 rounded">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  New Password
                </label>
                <input
                  type="password"
                  name="newPassword"
                  value={formData.newPassword}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-transparent border-none focus:outline-none"
                />
              </div>
              
              <div className="bg-gray-100 p-3 rounded">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-transparent border-none focus:outline-none"
                />
              </div>
              
              <div className="bg-gray-100 p-3 rounded">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-transparent border-none focus:outline-none"
                />
              </div>
              
              <div className="bg-gray-100 p-3 rounded">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Real Name
                </label>
                <input
                  type="text"
                  name="realName"
                  value={formData.realName}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-transparent border-none focus:outline-none"
                />
              </div>
              
              <div className="bg-gray-100 p-3 rounded">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Access Level
                </label>
                <select
                  name="accessLevel"
                  value={formData.accessLevel}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-transparent border-none focus:outline-none"
                >
                  <option>Manager</option>
                  <option>Supervisor</option>
                  <option>Agent</option>
                </select>
              </div>
              
              <div className="bg-gray-100 p-3 rounded">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Report Access Level
                </label>
                <select
                  name="reportAccessLevel"
                  value={formData.reportAccessLevel}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-transparent border-none focus:outline-none"
                >
                  <option>Full Access</option>
                  <option>Limited Access</option>
                  <option>Read Only</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-teal-500 text-white px-6 py-3 rounded-lg hover:bg-teal-600 transition-colors flex items-center space-x-2"
          >
            <Save className="w-4 h-4" />
            <span>Update User</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default OperationProfileSettings;