import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface User {
  id: string;
  name: string;
  email: string;
  role: 'user' | 'admin' | 'operation' | 'technical';
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  register: (name: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  const getDefaultRoute = (role: User['role']) => {
    switch (role) {
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

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    setIsLoading(true);

    await new Promise(resolve => setTimeout(resolve, 1000));

    let loggedInUser: User | null = null;

    if (email === 'admin@helpdesk.com' && password === 'admin123') {
      loggedInUser = {
        id: '1',
        name: 'Admin User',
        email,
        role: 'admin',
      };
    } else if (email === 'operation@helpdesk.com' && password === 'operation123') {
      loggedInUser = {
        id: '2',
        name: 'Operation Team',
        email,
        role: 'operation',
      };
    } else if (email === 'technical@helpdesk.com' && password === 'technical123') {
      loggedInUser = {
        id: '3',
        name: 'Technical Support',
        email,
        role: 'technical',
      };
    } else if (email === 'user@helpdesk.com' && password === 'user123') {
      loggedInUser = {
        id: '4',
        name: 'John Doe',
        email,
        role: 'user',
      };
    }

    if (loggedInUser) {
      setUser(loggedInUser);
      localStorage.setItem('user', JSON.stringify(loggedInUser));
      navigate(getDefaultRoute(loggedInUser.role), { replace: true }); // ✅ navigate immediately
      setIsLoading(false);
      return true;
    }

    setIsLoading(false);
    return false;
  };

  const register = async (name: string, email: string, password: string): Promise<boolean> => {
    setIsLoading(true);

    await new Promise(resolve => setTimeout(resolve, 1000));

    const newUser = {
      id: Date.now().toString(),
      name,
      email,
      role: 'user' as const,
    };

    setUser(newUser);
    localStorage.setItem('user', JSON.stringify(newUser));
    navigate(getDefaultRoute('user'), { replace: true }); // ✅ navigate after registration
    setIsLoading(false);
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    navigate('/login', { replace: true }); // ✅ go to login after logout
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};
