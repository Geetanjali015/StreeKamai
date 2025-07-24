import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useAuth } from '../contexts/AuthContext';
import { motion } from 'framer-motion';
import {
  TrendingUp,
  Target,
  Clock,
  DollarSign,
  Users,
  BarChart3,
  Calendar,
  Star
} from 'lucide-react';

const Dashboard: React.FC = () => {
  const { t } = useLanguage();
  const { user } = useAuth();

  const stats = [
    {
      title: 'Monthly Revenue',
      value: '₹12,450',
      change: '+18%',
      icon: DollarSign,
      color: '#A7D477'
    },
    {
      title: 'Orders This Month',
      value: '47',
      change: '+23%',
      icon: Target,
      color: '#FF748B'
    },
    {
      title: 'Customer Rating',
      value: '4.8',
      change: '+0.2',
      icon: Star,
      color: '#E4F1AC'
    },
    {
      title: 'Hours Worked',
      value: '64',
      change: '+5%',
      icon: Clock,
      color: '#F72C5B'
    }
  ];

  const recentActivities = [
    { action: 'New order received', time: '2 hours ago', type: 'order' },
    { action: 'Marketing post published', time: '4 hours ago', type: 'marketing' },
    { action: 'Customer review received', time: '1 day ago', type: 'review' },
    { action: 'Strategy milestone completed', time: '2 days ago', type: 'milestone' }
  ];

  const quickActions = [
    { title: 'Create Logo', description: 'Design a new brand logo', path: '/brand-building', color: '#F72C5B' },
    { title: 'Plan Strategy', description: 'Build your business plan', path: '/strategy', color: '#A7D477' },
    { title: 'Create Content', description: 'Generate marketing content', path: '/marketing', color: '#FF748B' },
    { title: 'Find Loans', description: 'Explore funding options', path: '/loans', color: '#E4F1AC' }
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="rounded-2xl p-8 text-white"
        style={{ background: 'linear-gradient(to right, #F72C5B, #FF748B)' }}
      >
        <h1 className="text-3xl font-bold mb-2">
          Welcome back, {user?.name}! 👋
        </h1>
        <p className="text-white/90">
          Here's how your business is performing today
        </p>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
          >
            <div className="flex items-center justify-between mb-4">
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: stat.color + '20' }}
              >
                <stat.icon className="w-6 h-6" style={{ color: stat.color }} />
              </div>
              <span className="text-sm font-medium text-green-600">{stat.change}</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</h3>
            <p className="text-sm text-gray-600">{stat.title}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Quick Actions */}
        <div className="lg:col-span-2">
          <h2 className="text-xl font-bold mb-4" style={{ color: '#F72C5B' }}>
            Quick Actions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {quickActions.map((action, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all cursor-pointer group"
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform"
                  style={{ backgroundColor: action.color + '20' }}
                >
                  <div
                    className="w-4 h-4 rounded"
                    style={{ backgroundColor: action.color }}
                  />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">{action.title}</h3>
                <p className="text-sm text-gray-600">{action.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Recent Activities */}
        <div>
          <h2 className="text-xl font-bold mb-4" style={{ color: '#F72C5B' }}>
            Recent Activities
          </h2>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="space-y-4">
              {recentActivities.map((activity, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: '#F72C5B20' }}
                  >
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: '#F72C5B' }}
                    />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                    <p className="text-xs text-gray-500">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Progress Chart */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold" style={{ color: '#F72C5B' }}>
            Revenue Progress
          </h2>
          <BarChart3 className="w-6 h-6 text-gray-400" />
        </div>
        
        <div className="space-y-4">
          {/* Goal Progress */}
          <div>
            <div className="flex justify-between text-sm mb-2">
              <span className="text-gray-600">Goal: ₹15,000</span>
              <span className="text-gray-900 font-medium">83% achieved</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div
                className="h-3 rounded-full transition-all duration-300"
                style={{
                  backgroundColor: '#A7D477',
                  width: '83%'
                }}
              />
            </div>
          </div>

          {/* Weekly Breakdown */}
          <div className="grid grid-cols-7 gap-2 mt-6">
            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, index) => (
              <div key={day} className="text-center">
                <div className="text-xs text-gray-500 mb-2">{day}</div>
                <div
                  className="h-20 rounded-lg"
                  style={{
                    backgroundColor: '#F72C5B' + '20',
                    width: '83%'
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Dashboard;