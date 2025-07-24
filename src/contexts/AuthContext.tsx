import React, { createContext, useContext, useState, ReactNode } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  businessInfo?: {
    domain: string;
    incomeGoal: number;
    mode: string;
    timeAvailable: number;
  };
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  updateBusinessInfo: (info: any) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = async (email: string, password: string) => {
    // Simulate API call
    setUser({
      id: '1',
      name: 'Priya Sharma',
      email: email,
    });
  };

  const signup = async (name: string, email: string, password: string) => {
    // Simulate API call
    setUser({
      id: '1',
      name: name,
      email: email,
    });
  };

  const logout = () => {
    setUser(null);
  };

  const updateBusinessInfo = (info: any) => {
    if (user) {
      setUser({
        ...user,
        businessInfo: info,
      });
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, updateBusinessInfo }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};