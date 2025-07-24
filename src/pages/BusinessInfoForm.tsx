import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { useAuth } from '../contexts/AuthContext';
import { motion } from 'framer-motion';
import {
  ChefHat,
  Scissors,
  Paintbrush,
  GraduationCap,
  Sparkles,
  UtensilsCrossed,
  ChevronRight,
  ChevronLeft
} from 'lucide-react';

const BusinessInfoForm: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const { updateBusinessInfo } = useAuth();
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    domain: '',
    incomeGoal: '',
    mode: '',
    timeAvailable: '',
    resources: {
      equipment: '',
      space: '',
      budget: ''
    }
  });

  const businessDomains = [
    { id: 'cooking', icon: ChefHat, title: 'Cooking & Food', color: '#FF748B' },
    { id: 'tailoring', icon: Scissors, title: 'Tailoring & Fashion', color: '#F72C5B' },
    { id: 'diy', icon: Paintbrush, title: 'DIY & Crafts', color: '#A7D477' },
    { id: 'tutoring', icon: GraduationCap, title: 'Tutoring & Education', color: '#E4F1AC' },
    { id: 'beauty', icon: Sparkles, title: 'Beauty & Wellness', color: '#FF748B' },
    { id: 'catering', icon: UtensilsCrossed, title: 'Catering Services', color: '#F72C5B' },
  ];

  const businessModes = ['Online', 'Offline', 'Hybrid'];
  const timeOptions = ['5-10 hours', '10-20 hours', '20-30 hours', '30+ hours'];

  const steps = [
    'Business Domain',
    'Income & Time',
    'Business Mode',
    'Resources'
  ];

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      updateBusinessInfo(formData);
      navigate('/dashboard');
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-center mb-8" style={{ color: '#F72C5B' }}>
              Choose Your Business Domain
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {businessDomains.map((domain) => (
                <motion.button
                  key={domain.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setFormData({ ...formData, domain: domain.id })}
                  className={`p-6 rounded-xl border-2 transition-all ${
                    formData.domain === domain.id
                      ? 'border-pink-500 bg-pink-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div
                    className="w-12 h-12 rounded-lg mx-auto mb-4 flex items-center justify-center"
                    style={{ backgroundColor: domain.color + '20' }}
                  >
                    <domain.icon className="w-6 h-6" style={{ color: domain.color }} />
                  </div>
                  <h3 className="font-semibold text-gray-800">{domain.title}</h3>
                </motion.button>
              ))}
            </div>
          </div>
        );

      case 1:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-center mb-8" style={{ color: '#F72C5B' }}>
              Income Goals & Availability
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t('incomeGoal')}
                </label>
                <input
                  type="number"
                  value={formData.incomeGoal}
                  onChange={(e) => setFormData({ ...formData, incomeGoal: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
                  style={{ '--tw-ring-color': '#F72C5B' } as React.CSSProperties}
                  placeholder="e.g., 15000"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t('timeAvailable')}
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {timeOptions.map((time) => (
                    <button
                      key={time}
                      onClick={() => setFormData({ ...formData, timeAvailable: time })}
                      className={`p-3 rounded-lg border transition-all ${
                        formData.timeAvailable === time
                          ? ''
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      style={formData.timeAvailable === time ? {
                        borderColor: '#F72C5B',
                        backgroundColor: '#F72C5B20',
                        color: '#F72C5B'
                      } : {}}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-center mb-8" style={{ color: '#F72C5B' }}>
              Choose Your Business Mode
            </h2>
            <div className="space-y-4">
              {businessModes.map((mode) => (
                <button
                  key={mode}
                  onClick={() => setFormData({ ...formData, mode })}
                  className={`w-full p-4 rounded-lg border-2 text-left transition-all ${
                    formData.mode === mode
                      ? ''
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                  style={formData.mode === mode ? {
                    borderColor: '#F72C5B',
                    backgroundColor: '#F72C5B20'
                  } : {}}
                >
                  <h3 className="font-semibold text-gray-800">{mode}</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    {mode === 'Online' && 'Reach customers through digital platforms'}
                    {mode === 'Offline' && 'Serve customers in your local area'}
                    {mode === 'Hybrid' && 'Combine both online and offline presence'}
                  </p>
                </button>
              ))}
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-center mb-8" style={{ color: '#F72C5B' }}>
              Resource Information
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Available Equipment
                </label>
                <textarea
                  value={formData.resources.equipment}
                  onChange={(e) => setFormData({
                    ...formData,
                    resources: { ...formData.resources, equipment: e.target.value }
                  })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                  placeholder="e.g., Sewing machine, oven, laptop..."
                  rows={3}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Available Space
                </label>
                <input
                  type="text"
                  value={formData.resources.space}
                  onChange={(e) => setFormData({
                    ...formData,
                    resources: { ...formData.resources, space: e.target.value }
                  })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                  placeholder="e.g., Kitchen, dedicated room, terrace..."
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Initial Budget (₹)
                </label>
                <input
                  type="number"
                  value={formData.resources.budget}
                  onChange={(e) => setFormData({
                    ...formData,
                    resources: { ...formData.resources, budget: e.target.value }
                  })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                  placeholder="e.g., 5000"
                />
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-green-50 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl shadow-xl p-8"
        >
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className={`text-xs font-medium ${
                    index <= currentStep ? 'text-pink-600' : 'text-gray-400'
                  }`}
                >
                  {step}
                </div>
              ))}
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="h-2 rounded-full transition-all duration-300"
                style={{
                  backgroundColor: '#F72C5B',
                  width: `${((currentStep + 1) / steps.length) * 100}%`
                }}
              />
            </div>
          </div>

          {/* Step Content */}
          <div className="mb-8">
            {renderStep()}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between">
            <button
              onClick={handlePrevious}
              disabled={currentStep === 0}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-all ${
                currentStep === 0
                  ? 'text-gray-400 cursor-not-allowed'
                  : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
              }`}
            >
              <ChevronLeft className="w-4 h-4" />
              <span>{t('previous')}</span>
            </button>

            <button
              onClick={handleNext}
              disabled={
                (currentStep === 0 && !formData.domain) ||
                (currentStep === 1 && (!formData.incomeGoal || !formData.timeAvailable)) ||
                (currentStep === 2 && !formData.mode)
              }
              className="flex items-center space-x-2 px-6 py-3 text-white rounded-lg transition-all hover:shadow-lg transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              style={{ backgroundColor: '#F72C5B' }}
            >
              <span>{currentStep === steps.length - 1 ? t('submit') : t('next')}</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BusinessInfoForm;