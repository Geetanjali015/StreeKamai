import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';
import {
  Palette,
  Type,
  Download,
  Sparkles,
  RefreshCw,
  Globe,
  Eye
} from 'lucide-react';

const BrandBuilding: React.FC = () => {
  const { t } = useLanguage();
  const [selectedTemplate, setSelectedTemplate] = useState(0);
  const [businessName, setBusinessName] = useState('');
  const [logoCustomization, setLogoCustomization] = useState({
    color: '#F72C5B',
    font: 'modern',
    size: 'medium'
  });

  const logoTemplates = [
    { id: 1, name: 'Elegant Circle', preview: '🎨' },
    { id: 2, name: 'Modern Square', preview: '📱' },
    { id: 3, name: 'Classic Badge', preview: '🏆' },
    { id: 4, name: 'Minimalist Text', preview: '✨' },
    { id: 5, name: 'Vintage Frame', preview: '🖼️' },
    { id: 6, name: 'Creative Brush', preview: '🎭' },
  ];

  const businessNameSuggestions = [
    'Priya\'s Kitchen Magic',
    'Golden Thread Tailoring',
    'Sparkle Beauty Studio',
    'HomeCraft Delights',
    'Elegant Stitches',
    'Sweet Success Bakery'
  ];

  const colorPalettes = [
    { name: 'StreeKamai Pink', color: '#F72C5B' },
    { name: 'Coral Delight', color: '#FF748B' },
    { name: 'Success Green', color: '#A7D477' },
    { name: 'Warm Yellow', color: '#E4F1AC' },
    { name: 'Light Pink', color: '#FF748B' },
    { name: 'Soft Green', color: '#A7D477' },
  ];

  const fontOptions = [
    { name: 'Modern', value: 'modern' },
    { name: 'Classic', value: 'classic' },
    { name: 'Playful', value: 'playful' },
    { name: 'Elegant', value: 'elegant' },
  ];

  const generateBusinessName = () => {
    const randomName = businessNameSuggestions[Math.floor(Math.random() * businessNameSuggestions.length)];
    setBusinessName(randomName);
  };

  const generateWebsite = () => {
    alert('AI website generation feature coming soon!');
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-r from-pink-500 to-rose-400 rounded-2xl p-8 text-white"
      >
        <h1 className="text-3xl font-bold mb-2">Brand Building Studio</h1>
        <p className="text-white/90">
          Create a professional brand identity for your business with AI-powered tools
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Logo Generator */}
        <div className="lg:col-span-2 space-y-6">
          {/* Business Name Generator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
          >
            <h2 className="text-xl font-bold mb-4 flex items-center" style={{ color: '#F72C5B' }}>
              <Sparkles className="w-5 h-5 mr-2" />
              Business Name Generator
            </h2>
            
            <div className="flex space-x-3 mb-4">
              <input
                type="text"
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
                placeholder="Enter your business name or generate one"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
              <button
                onClick={generateBusinessName}
                className="px-6 py-3 bg-gradient-to-r from-pink-500 to-rose-400 text-white rounded-lg hover:shadow-lg transition-all flex items-center space-x-2"
              >
                <RefreshCw className="w-4 h-4" />
                <span>Generate</span>
              </button>
            </div>

            {businessName && (
              <div className="text-center p-4 bg-gradient-to-r from-pink-50 to-rose-50 rounded-lg">
                <div className="text-2xl font-bold" style={{ color: '#F72C5B' }}>
                  {businessName}
                </div>
              </div>
            )}
          </motion.div>

          {/* Logo Templates */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
          >
            <h2 className="text-xl font-bold mb-4 flex items-center" style={{ color: '#F72C5B' }}>
              <Palette className="w-5 h-5 mr-2" />
              Logo Templates
            </h2>
            
            <div className="grid grid-cols-3 gap-4 mb-6">
              {logoTemplates.map((template, index) => (
                <motion.div
                  key={template.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedTemplate(index)}
                  className={`p-6 rounded-lg border-2 cursor-pointer transition-all ${
                    selectedTemplate === index
                      ? 'border-pink-500 bg-pink-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="text-4xl mb-2 text-center">{template.preview}</div>
                  <div className="text-sm text-center font-medium">{template.name}</div>
                </motion.div>
              ))}
            </div>

            {/* Logo Preview */}
            <div className="text-center p-8 bg-gray-50 rounded-lg">
              <div className="text-6xl mb-4">{logoTemplates[selectedTemplate].preview}</div>
              <div
                className="text-2xl font-bold"
                style={{ 
                  color: logoCustomization.color,
                  fontFamily: logoCustomization.font === 'modern' ? 'sans-serif' : 
                            logoCustomization.font === 'classic' ? 'serif' : 'fantasy'
                }}
              >
                {businessName || 'Your Business'}
              </div>
            </div>

            <div className="flex justify-center mt-4">
              <button className="px-6 py-3 bg-gradient-to-r from-pink-500 to-rose-400 text-white rounded-lg hover:shadow-lg transition-all flex items-center space-x-2">
                <Download className="w-4 h-4" />
                <span>Download Logo</span>
              </button>
            </div>
          </motion.div>
        </div>

        {/* Customization Panel */}
        <div className="space-y-6">
          {/* Color Customization */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
          >
            <h3 className="font-bold mb-4" style={{ color: '#F72C5B' }}>
              Colors
            </h3>
            <div className="grid grid-cols-3 gap-3">
              {colorPalettes.map((palette) => (
                <button
                  key={palette.name}
                  onClick={() => setLogoCustomization({ ...logoCustomization, color: palette.color })}
                  className={`w-full h-12 rounded-lg border-2 transition-all ${
                    logoCustomization.color === palette.color
                      ? 'border-gray-800'
                      : 'border-gray-200'
                  }`}
                  style={{ backgroundColor: palette.color }}
                  title={palette.name}
                />
              ))}
            </div>
          </motion.div>

          {/* Font Customization */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
          >
            <h3 className="font-bold mb-4 flex items-center" style={{ color: '#F72C5B' }}>
              <Type className="w-4 h-4 mr-2" />
              Fonts
            </h3>
            <div className="space-y-2">
              {fontOptions.map((font) => (
                <button
                  key={font.value}
                  onClick={() => setLogoCustomization({ ...logoCustomization, font: font.value })}
                  className={`w-full p-3 rounded-lg border text-left transition-all ${
                    logoCustomization.font === font.value
                      ? 'border-pink-500 bg-pink-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  {font.name}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Website Generator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
          >
            <h3 className="font-bold mb-4 flex items-center" style={{ color: '#F72C5B' }}>
              <Globe className="w-4 h-4 mr-2" />
              AI Website Generator
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Generate a professional website for your business automatically
            </p>
            <button
              onClick={generateWebsite}
              className="w-full px-4 py-3 bg-gradient-to-r from-green-500 to-emerald-400 text-white rounded-lg hover:shadow-lg transition-all flex items-center justify-center space-x-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>Generate Website</span>
            </button>
          </motion.div>

          {/* Preview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
          >
            <h3 className="font-bold mb-4 flex items-center" style={{ color: '#F72C5B' }}>
              <Eye className="w-4 h-4 mr-2" />
              Brand Preview
            </h3>
            <div className="space-y-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="text-sm text-gray-600 mb-2">Business Card Preview</div>
                <div className="bg-white p-4 rounded shadow-sm">
                  <div className="text-lg font-bold" style={{ color: logoCustomization.color }}>
                    {businessName || 'Your Business'}
                  </div>
                  <div className="text-sm text-gray-600">Professional Services</div>
                </div>
              </div>
              
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="text-sm text-gray-600 mb-2">Social Media Preview</div>
                <div className="bg-white p-4 rounded shadow-sm">
                  <div className="flex items-center space-x-3">
                    <div className="text-2xl">{logoTemplates[selectedTemplate].preview}</div>
                    <div>
                      <div className="font-semibold" style={{ color: logoCustomization.color }}>
                        {businessName || 'Your Business'}
                      </div>
                      <div className="text-xs text-gray-500">@yourbusiness</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default BrandBuilding;