import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from '../contexts/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Layout from './components/Layout';
import AdminLayout from './components/AdminLayout';
import OperationLayout from './components/OperationLayout';
import TechnicalLayout from './components/TechnicalLayout';

// Auth pages
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import ForgotPassword from './pages/auth/ForgotPassword';

// User pages
import Dashboard from './pages/Dashboard';
import NewTicket from './pages/NewTicket';
import MyTickets from './pages/MyTickets';
import TicketDetails from './pages/TicketDetails';
import Profile from './pages/Profile';
import Settings from './pages/Settings';

// Admin pages
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminDatabase from './pages/admin/AdminDatabase';
import AdminSettings from './pages/admin/AdminSettings';
import AdminUserLog from './pages/admin/AdminUserLog';
import AdminProfile from './pages/admin/AdminProfile';
import AdminProfileSettings from './pages/admin/AdminProfileSettings';

// Operation Team pages
import OperationDashboard from './pages/operation/OperationDashboard';
import TicketApproval from './pages/operation/TicketApproval';
import OperationMyTicket from './pages/operation/OperationMyTicket';
import OperationPerformance from './pages/operation/OperationPerformance';
import OperationProfile from './pages/operation/OperationProfile';
import OperationProfileSettings from './pages/operation/OperationProfileSettings';

// Technical Support pages
import TechnicalDashboard from './pages/technical/TechnicalDashboard';
import TechnicalMyTicket from './pages/technical/TechnicalMyTicket';
import TechnicalPerformance from './pages/technical/TechnicalPerformance';
import TechnicalProfile from './pages/technical/TechnicalProfile';
import TechnicalProfileSettings from './pages/technical/TechnicalProfileSettings';

const AppRoutes: React.FC = () => {
  const { user } = useAuth();

  const getDefaultRoute = () => {
    if (!user) return '/login';
    switch (user.role) {
      case 'admin':
        return '/admin/dashboard';
      case 'operation':
        return '/operation/dashboard';
      case 'technical':
        return '/technical/dashboard';
      default:
        return '/dashboard';
    }
  };



  return (
    <Routes>
      {/* Root redirect */}
      <Route path="/" element={<Navigate to={getDefaultRoute()} />} />

      {/* Auth routes */}
      <Route path="/login" element={user ? <Navigate to={getDefaultRoute()} /> : <Login />} />
      <Route path="/register" element={user ? <Navigate to={getDefaultRoute()} /> : <Register />} />
      <Route path="/forgot-password" element={user ? <Navigate to={getDefaultRoute()} /> : <ForgotPassword />} />

      {/* Admin routes */}
      <Route path="/admin/dashboard" element={
        <ProtectedRoute requireRole="admin">
          <AdminLayout><AdminDashboard /></AdminLayout>
        </ProtectedRoute>
      } />
      <Route path="/admin/database" element={
        <ProtectedRoute requireRole="admin">
          <AdminLayout><AdminDatabase /></AdminLayout>
        </ProtectedRoute>
      } />
      <Route path="/admin/settings" element={
        <ProtectedRoute requireRole="admin">
          <AdminLayout><AdminSettings /></AdminLayout>
        </ProtectedRoute>
      } />
      <Route path="/admin/user-log" element={
        <ProtectedRoute requireRole="admin">
          <AdminLayout><AdminUserLog /></AdminLayout>
        </ProtectedRoute>
      } />
      <Route path="/admin/profile" element={
        <ProtectedRoute requireRole="admin">
          <AdminLayout><AdminProfile /></AdminLayout>
        </ProtectedRoute>
      } />
      <Route path="/admin/profile-settings" element={
        <ProtectedRoute requireRole="admin">
          <AdminLayout><AdminProfileSettings /></AdminLayout>
        </ProtectedRoute>
      } />

      {/* Operation Team routes */}
      <Route path="/operation/dashboard" element={
        <ProtectedRoute requireRole="operation">
          <OperationLayout><OperationDashboard /></OperationLayout>
        </ProtectedRoute>
      } />
      <Route path="/operation/ticket-approval" element={
        <ProtectedRoute requireRole="operation">
          <OperationLayout><TicketApproval /></OperationLayout>
        </ProtectedRoute>
      } />
      <Route path="/operation/my-ticket" element={
        <ProtectedRoute requireRole="operation">
          <OperationLayout><OperationMyTicket /></OperationLayout>
        </ProtectedRoute>
      } />
      <Route path="/operation/performance" element={
        <ProtectedRoute requireRole="operation">
          <OperationLayout><OperationPerformance /></OperationLayout>
        </ProtectedRoute>
      } />
      <Route path="/operation/profile" element={
        <ProtectedRoute requireRole="operation">
          <OperationLayout><OperationProfile /></OperationLayout>
        </ProtectedRoute>
      } />
      <Route path="/operation/profile-settings" element={
        <ProtectedRoute requireRole="operation">
          <OperationLayout><OperationProfileSettings /></OperationLayout>
        </ProtectedRoute>
      } />

      {/* Technical Support routes */}
      <Route path="/technical/dashboard" element={
        <ProtectedRoute requireRole="technical">
          <TechnicalLayout><TechnicalDashboard /></TechnicalLayout>
        </ProtectedRoute>
      } />
      <Route path="/technical/my-ticket" element={
        <ProtectedRoute requireRole="technical">
          <TechnicalLayout><TechnicalMyTicket /></TechnicalLayout>
        </ProtectedRoute>
      } />
      <Route path="/technical/performance" element={
        <ProtectedRoute requireRole="technical">
          <TechnicalLayout><TechnicalPerformance /></TechnicalLayout>
        </ProtectedRoute>
      } />
      <Route path="/technical/profile" element={
        <ProtectedRoute requireRole="technical">
          <TechnicalLayout><TechnicalProfile /></TechnicalLayout>
        </ProtectedRoute>
      } />
      <Route path="/technical/profile-settings" element={
        <ProtectedRoute requireRole="technical">
          <TechnicalLayout><TechnicalProfileSettings /></TechnicalLayout>
        </ProtectedRoute>
      } />

      {/* User routes (normal user only) */}
      <Route path="/dashboard" element={
        <ProtectedRoute requireRole="user">
          <Layout><Dashboard /></Layout>
        </ProtectedRoute>
      } />
      <Route path="/new-ticket" element={
        <ProtectedRoute requireRole="user">
          <Layout><NewTicket /></Layout>
        </ProtectedRoute>
      } />
      <Route path="/my-tickets" element={
        <ProtectedRoute requireRole="user">
          <Layout><MyTickets /></Layout>
        </ProtectedRoute>
      } />
      <Route path="/ticket/:id" element={
        <ProtectedRoute requireRole="user">
          <Layout><TicketDetails /></Layout>
        </ProtectedRoute>
      } />
      <Route path="/profile" element={
        <ProtectedRoute requireRole="user">
          <Layout><Profile /></Layout>
        </ProtectedRoute>
      } />
      <Route path="/settings" element={
        <ProtectedRoute requireRole="user">
          <Layout><Settings /></Layout>
        </ProtectedRoute>
      } />

      {/* Fallback */}
      <Route path="*" element={<Navigate to={getDefaultRoute()} />} />
    </Routes>
  );
};

// ✅ Correct
function App() {
  return (
    <Router> {/* Router MUST come first */}
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </Router>
  );
}


export default App;
