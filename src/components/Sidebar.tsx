import React from 'react';
import { NavLink } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import {
  LayoutDashboard,
  Palette,
  Target,
  CreditCard,
  Megaphone,
  Users,
  Settings
} from 'lucide-react';

const Sidebar: React.FC = () => {
  const { t } = useLanguage();

  const navItems = [
    { path: '/dashboard', icon: LayoutDashboard, label: t('dashboard') },
    { path: '/brand-building', icon: Palette, label: t('brandBuilding') },
    { path: '/strategy', icon: Target, label: t('strategy') },
    { path: '/loans', icon: CreditCard, label: t('loans') },
    { path: '/marketing', icon: Megaphone, label: t('marketing') },
    { path: '/community', icon: Users, label: t('community') },
    { path: '/settings', icon: Settings, label: t('settings') },
  ];

  return (
    <div className="w-64 bg-white shadow-lg border-r border-gray-200">
      <div className="p-6">
        <div className="text-2xl font-bold" style={{ color: '#F72C5B' }}>
          StreeKamai
        </div>
        <div className="text-sm text-gray-500 mt-1">Empowering Women</div>
      </div>
      
      <nav className="mt-8">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center space-x-3 px-6 py-3 text-sm font-medium transition-colors ${
                isActive
                  ? 'text-white border-r-2' 
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`
            }
            style={({ isActive }) => isActive ? {
              background: 'linear-gradient(to right, #F72C5B20, #FF748B20)',
              color: '#F72C5B',
              borderRightColor: '#F72C5B'
            } : {}}
          >
            <item.icon className="w-5 h-5" />
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;