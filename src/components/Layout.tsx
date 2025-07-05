import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { 
  LayoutDashboard, 
  Plus, 
  Ticket, 
  User, 
  Settings,
  Bell,
  Search,
  Menu,
  LogOut
} from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const { user, logout } = useAuth();
  
  const navigation = [
    { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
    { name: 'New Ticket', href: '/new-ticket', icon: Plus },
    { name: 'My Tickets', href: '/my-tickets', icon: Ticket },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-teal-500 text-white shadow-sm">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <Ticket className="w-5 h-5 text-teal-500" />
              </div>
              <span className="text-xl font-bold">Helpdesk</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-teal-200" />
              <input
                type="text"
                placeholder="Search..."
                className="bg-teal-600 text-white placeholder-teal-200 pl-10 pr-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-20"
              />
            </div>
            <button className="p-2 hover:bg-teal-600 rounded-lg transition-colors">
              <Bell className="w-5 h-5" />
            </button>
            <Link to="/profile" className="p-2 hover:bg-teal-600 rounded-lg transition-colors">
              <User className="w-5 h-5" />
            </Link>
            <button 
              onClick={logout}
              className="p-2 hover:bg-teal-600 rounded-lg transition-colors"
            >
              <LogOut className="w-5 h-5" />
            </button>
            <button className="p-2 hover:bg-teal-600 rounded-lg transition-colors md:hidden">
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white shadow-sm min-h-screen">
          <nav className="p-4">
            <ul className="space-y-2">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                        isActive(item.href)
                          ? 'bg-teal-50 text-teal-700 border-r-4 border-teal-500'
                          : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="font-medium">{item.name}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
            
            <div className="mt-8 pt-8 border-t border-gray-200">
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/settings"
                    className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                      isActive('/settings')
                        ? 'bg-teal-50 text-teal-700 border-r-4 border-teal-500'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    }`}
                  >
                    <Settings className="w-5 h-5" />
                    <span className="font-medium">Settings</span>
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;