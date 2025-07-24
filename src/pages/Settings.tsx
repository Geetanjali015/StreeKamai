import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useAuth } from '../contexts/AuthContext';
import { motion } from 'framer-motion';
import {
  User,
  Globe,
  Bell,
  Shield,
  CreditCard,
  Download,
  LogOut,
  Edit,
  Save,
  X
} from 'lucide-react';

const Settings: React.FC = () => {
  const { t, language, setLanguage } = useLanguage();
  const { user, logout } = useAuth();
  const [activeSection, setActiveSection] = useState('profile');
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: '+91 98765 43210',
    address: 'Bangalore, Karnataka',
    businessName: 'Priya\'s Kitchen',
    businessType: 'Food & Catering'
  });

  const languages = [
    { code: 'en', name: 'English', nativeName: 'English' },
    { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी' },
    { code: 'ta', name: 'Tamil', nativeName: 'தமிழ்' },
    { code: 'te', name: 'Telugu', nativeName: 'తెలుగు' },
  ];

  const settingsMenu = [
    { id: 'profile', label: 'Profile Information', icon: User },
    { id: 'language', label: 'Language & Region', icon: Globe },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'privacy', label: 'Privacy & Security', icon: Shield },
    { id: 'billing', label: 'Billing & Plans', icon: CreditCard },
    { id: 'export', label: 'Export Data', icon: Download }
  ];

  const [notificationSettings, setNotificationSettings] = useState({
    orderNotifications: true,
    marketingReminders: true,
    communityUpdates: false,
    weeklyReports: true,
    emailNotifications: true,
    smsNotifications: false,
    whatsappNotifications: true
  });

  const handleSaveProfile = () => {
    setIsEditing(false);
    alert('Profile updated successfully!');
  };

  const handleExportData = () => {
    alert('Your data export will be emailed to you within 24 hours.');
  };

  const toggleNotification = (setting: string) => {
    setNotificationSettings(prev => ({
      ...prev,
      [setting]: !prev[setting as keyof typeof prev]
    }));
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl p-8 text-white"
      >
        <h1 className="text-3xl font-bold mb-2">Settings & Profile</h1>
        <p className="text-white/90">
          Manage your account settings, preferences, and business information
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-4 gap-6">
        {/* Settings Menu */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 h-fit"
        >
          <nav className="space-y-2">
            {settingsMenu.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-all ${
                  activeSection === item.id
                    ? 'bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-600 border border-indigo-200'
                    : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </button>
            ))}
            
            <div className="border-t border-gray-200 pt-4 mt-4">
              <button
                onClick={logout}
                className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left text-red-600 hover:bg-red-50 transition-all"
              >
                <LogOut className="w-5 h-5" />
                <span className="font-medium">Sign Out</span>
              </button>
            </div>
          </nav>
        </motion.div>

        {/* Settings Content */}
        <div className="lg:col-span-3">
          {activeSection === 'profile' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold" style={{ color: '#F72C5B' }}>
                  Profile Information
                </h2>
                <button
                  onClick={() => setIsEditing(!isEditing)}
                  className="flex items-center space-x-2 px-4 py-2 text-indigo-600 hover:bg-indigo-50 rounded-lg transition-all"
                >
                  {isEditing ? <X className="w-4 h-4" /> : <Edit className="w-4 h-4" />}
                  <span>{isEditing ? 'Cancel' : 'Edit'}</span>
                </button>
              </div>

              {/* Profile Picture */}
              <div className="flex items-center space-x-6 mb-8">
                <div className="w-24 h-24 bg-gradient-to-r from-pink-500 to-rose-400 rounded-full flex items-center justify-center">
                  <User className="w-12 h-12 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{profileData.name}</h3>
                  <p className="text-gray-600">{profileData.businessName}</p>
                  {isEditing && (
                    <button className="mt-2 px-3 py-1 bg-indigo-500 text-white rounded text-sm hover:bg-indigo-600">
                      Change Photo
                    </button>
                  )}
                </div>
              </div>

              {/* Profile Form */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    value={profileData.name}
                    onChange={(e) => setProfileData({...profileData, name: e.target.value})}
                    disabled={!isEditing}
                    className={`w-full px-4 py-3 border rounded-lg ${
                      isEditing 
                        ? 'border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500' 
                        : 'border-gray-200 bg-gray-50'
                    }`}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    value={profileData.email}
                    onChange={(e) => setProfileData({...profileData, email: e.target.value})}
                    disabled={!isEditing}
                    className={`w-full px-4 py-3 border rounded-lg ${
                      isEditing 
                        ? 'border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500' 
                        : 'border-gray-200 bg-gray-50'
                    }`}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    value={profileData.phone}
                    onChange={(e) => setProfileData({...profileData, phone: e.target.value})}
                    disabled={!isEditing}
                    className={`w-full px-4 py-3 border rounded-lg ${
                      isEditing 
                        ? 'border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500' 
                        : 'border-gray-200 bg-gray-50'
                    }`}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                  <input
                    type="text"
                    value={profileData.address}
                    onChange={(e) => setProfileData({...profileData, address: e.target.value})}
                    disabled={!isEditing}
                    className={`w-full px-4 py-3 border rounded-lg ${
                      isEditing 
                        ? 'border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500' 
                        : 'border-gray-200 bg-gray-50'
                    }`}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Business Name</label>
                  <input
                    type="text"
                    value={profileData.businessName}
                    onChange={(e) => setProfileData({...profileData, businessName: e.target.value})}
                    disabled={!isEditing}
                    className={`w-full px-4 py-3 border rounded-lg ${
                      isEditing 
                        ? 'border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500' 
                        : 'border-gray-200 bg-gray-50'
                    }`}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Business Type</label>
                  <input
                    type="text"
                    value={profileData.businessType}
                    onChange={(e) => setProfileData({...profileData, businessType: e.target.value})}
                    disabled={!isEditing}
                    className={`w-full px-4 py-3 border rounded-lg ${
                      isEditing 
                        ? 'border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500' 
                        : 'border-gray-200 bg-gray-50'
                    }`}
                  />
                </div>
              </div>

              {isEditing && (
                <div className="flex space-x-3 mt-6">
                  <button
                    onClick={handleSaveProfile}
                    className="flex items-center space-x-2 px-6 py-3 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-all"
                  >
                    <Save className="w-4 h-4" />
                    <span>Save Changes</span>
                  </button>
                  <button
                    onClick={() => setIsEditing(false)}
                    className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-all"
                  >
                    Cancel
                  </button>
                </div>
              )}
            </motion.div>
          )}

          {activeSection === 'language' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
            >
              <h2 className="text-xl font-bold mb-6" style={{ color: '#F72C5B' }}>
                Language & Region Settings
              </h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Choose your preferred language
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => setLanguage(lang.code)}
                        className={`p-4 rounded-lg border-2 text-left transition-all ${
                          language === lang.code
                            ? 'border-indigo-500 bg-indigo-50'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <div className="font-semibold">{lang.name}</div>
                        <div className="text-sm text-gray-600">{lang.nativeName}</div>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-200">
                  <h3 className="font-semibold mb-4">Regional Settings</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Currency</label>
                      <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500">
                        <option>₹ Indian Rupee (INR)</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Time Zone</label>
                      <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500">
                        <option>Asia/Kolkata (IST)</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeSection === 'notifications' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
            >
              <h2 className="text-xl font-bold mb-6" style={{ color: '#F72C5B' }}>
                Notification Preferences
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-4">Business Notifications</h3>
                  <div className="space-y-4">
                    {[
                      { key: 'orderNotifications', label: 'New orders and customer inquiries', description: 'Get notified when customers place orders or send messages' },
                      { key: 'weeklyReports', label: 'Weekly business reports', description: 'Receive weekly summaries of your business performance' },
                      { key: 'marketingReminders', label: 'Marketing reminders', description: 'Daily suggestions for social media posts and content' }
                    ].map((item) => (
                      <div key={item.key} className="flex items-start space-x-3">
                        <button
                          onClick={() => toggleNotification(item.key)}
                          className={`mt-1 w-12 h-6 rounded-full transition-all ${
                            notificationSettings[item.key as keyof typeof notificationSettings]
                              ? 'bg-indigo-500'
                              : 'bg-gray-300'
                          }`}
                        >
                          <div
                            className={`w-5 h-5 bg-white rounded-full shadow transition-transform ${
                              notificationSettings[item.key as keyof typeof notificationSettings]
                                ? 'translate-x-6'
                                : 'translate-x-1'
                            }`}
                          />
                        </button>
                        <div className="flex-1">
                          <div className="font-medium text-gray-900">{item.label}</div>
                          <div className="text-sm text-gray-600">{item.description}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-6">
                  <h3 className="font-semibold mb-4">Communication Channels</h3>
                  <div className="space-y-4">
                    {[
                      { key: 'emailNotifications', label: 'Email notifications', icon: '📧' },
                      { key: 'smsNotifications', label: 'SMS notifications', icon: '📱' },
                      { key: 'whatsappNotifications', label: 'WhatsApp notifications', icon: '💬' }
                    ].map((item) => (
                      <div key={item.key} className="flex items-center space-x-3">
                        <button
                          onClick={() => toggleNotification(item.key)}
                          className={`w-12 h-6 rounded-full transition-all ${
                            notificationSettings[item.key as keyof typeof notificationSettings]
                              ? 'bg-indigo-500'
                              : 'bg-gray-300'
                          }`}
                        >
                          <div
                            className={`w-5 h-5 bg-white rounded-full shadow transition-transform ${
                              notificationSettings[item.key as keyof typeof notificationSettings]
                                ? 'translate-x-6'
                                : 'translate-x-1'
                            }`}
                          />
                        </button>
                        <span className="text-xl">{item.icon}</span>
                        <div className="font-medium text-gray-900">{item.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeSection === 'privacy' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
            >
              <h2 className="text-xl font-bold mb-6" style={{ color: '#F72C5B' }}>
                Privacy & Security
              </h2>

              <div className="space-y-6">
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <Shield className="w-5 h-5 text-green-600" />
                    <span className="font-semibold text-green-800">Your data is secure</span>
                  </div>
                  <p className="text-sm text-green-700">
                    We use industry-standard encryption to protect your personal and business information.
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-3">Account Security</h3>
                    <div className="space-y-3">
                      <button className="w-full text-left p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-all">
                        <div className="font-medium text-gray-900">Change Password</div>
                        <div className="text-sm text-gray-600">Update your account password</div>
                      </button>
                      <button className="w-full text-left p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-all">
                        <div className="font-medium text-gray-900">Two-Factor Authentication</div>
                        <div className="text-sm text-gray-600">Add an extra layer of security to your account</div>
                      </button>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-3">Data & Privacy</h3>
                    <div className="space-y-3">
                      <button className="w-full text-left p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-all">
                        <div className="font-medium text-gray-900">Download Your Data</div>
                        <div className="text-sm text-gray-600">Get a copy of your personal and business data</div>
                      </button>
                      <button className="w-full text-left p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-all">
                        <div className="font-medium text-gray-900">Delete Account</div>
                        <div className="text-sm text-red-600">Permanently delete your StreeKamai account</div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeSection === 'billing' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
            >
              <h2 className="text-xl font-bold mb-6" style={{ color: '#F72C5B' }}>
                Billing & Plans
              </h2>

              <div className="space-y-6">
                <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-blue-900">Free Plan</h3>
                      <p className="text-sm text-blue-700">Currently active</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-blue-900">₹0</div>
                      <div className="text-sm text-blue-700">per month</div>
                    </div>
                  </div>
                </div>

                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="font-semibold mb-4">Upgrade to Premium</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="border border-purple-200 rounded-lg p-4">
                      <h4 className="font-semibold text-purple-900 mb-2">Premium Plan</h4>
                      <div className="text-2xl font-bold text-purple-900 mb-2">₹499<span className="text-sm font-normal">/month</span></div>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Advanced AI content generation</li>
                        <li>• Priority customer support</li>
                        <li>• Advanced analytics</li>
                        <li>• Custom branding tools</li>
                      </ul>
                      <button className="w-full mt-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors">
                        Upgrade Now
                      </button>
                    </div>
                    
                    <div className="border border-gold-200 rounded-lg p-4 bg-gradient-to-br from-yellow-50 to-amber-50">
                      <h4 className="font-semibold text-amber-900 mb-2">Business Plan</h4>
                      <div className="text-2xl font-bold text-amber-900 mb-2">₹999<span className="text-sm font-normal">/month</span></div>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Everything in Premium</li>
                        <li>• 1-on-1 business coaching</li>
                        <li>• Advanced loan assistance</li>
                        <li>• White-label solutions</li>
                      </ul>
                      <button className="w-full mt-4 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors">
                        Upgrade Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeSection === 'export' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
            >
              <h2 className="text-xl font-bold mb-6" style={{ color: '#F72C5B' }}>
                Export Your Data
              </h2>

              <div className="space-y-6">
                <p className="text-gray-600">
                  Download your business data, customer information, and analytics reports. All data will be provided in standard formats (CSV, JSON, PDF).
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { title: 'Business Profile', description: 'Your business information, settings, and preferences' },
                    { title: 'Customer Data', description: 'Customer contacts, orders, and interaction history' },
                    { title: 'Financial Reports', description: 'Revenue, expenses, and financial analytics' },
                    { title: 'Marketing Content', description: 'Generated content, posts, and marketing materials' }
                  ].map((item, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-4">
                      <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-sm text-gray-600 mb-3">{item.description}</p>
                      <button className="px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-colors text-sm flex items-center space-x-2">
                        <Download className="w-4 h-4" />
                        <span>Export</span>
                      </button>
                    </div>
                  ))}
                </div>

                <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <h3 className="font-semibold text-yellow-800 mb-2">📧 Email Delivery</h3>
                  <p className="text-sm text-yellow-700">
                    Your exported data will be sent to <strong>{user?.email}</strong> within 24 hours. 
                    Large exports may take longer to process.
                  </p>
                </div>

                <button
                  onClick={handleExportData}
                  className="w-full py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg hover:shadow-lg transition-all flex items-center justify-center space-x-2 font-semibold"
                >
                  <Download className="w-5 h-5" />
                  <span>Export All Data</span>
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Settings;