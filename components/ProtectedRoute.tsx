import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import Login from '../pages/auth/Login';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requireRole?: 'admin' | 'operation' | 'technical' | 'user';
}

// Optional: role mapping
const roleMap: Record<string, 'admin' | 'operation' | 'technical' | 'user'> = {
  ADMIN: 'admin',
  OPERATION: 'operation',
  TECHNICAL: 'technical',
  NORMAL_USER: 'user',
};

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, requireRole }) => {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-teal-500"></div>
      </div>
    );
  }

  if (!user) {
    return <Login />;
  }

  // Normalize role
  const normalizedRole = roleMap[user.role] ?? user.role.toLowerCase();

  // If a specific role is required and user doesn't match it
  if (requireRole && normalizedRole !== requireRole) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Access Denied</h1>
          <p className="text-gray-600">You don't have permission to access this page.</p>
          <p className="text-sm text-gray-500 mt-2">
            Required role: {requireRole}, Your role: {normalizedRole}
          </p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};

export default ProtectedRoute;
