import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';
import {
  ChevronRight,
  Zap,
  TrendingUp,
  BarChart3,
  Star,
  Globe,
  Heart,
  Sparkles
} from 'lucide-react';

const LandingPage: React.FC = () => {
  const navigate = useNavigate();
  const { t, language, setLanguage } = useLanguage();

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'hi', name: 'हिन्दी' },
    { code: 'ta', name: 'தமிழ்' },
    { code: 'te', name: 'తెలుగు' },
  ];

  const features = [
    {
      icon: Zap,
      title: t('automationTitle'),
      description: t('automationDescription'),
      color: '#A7D477'
    },
    {
      icon: TrendingUp,
      title: t('marketingTitle'),
      description: t('marketingDescription'),
      color: '#FF748B'
    },
    {
      icon: BarChart3,
      title: t('trackingTitle'),
      description: t('trackingDescription'),
      color: '#E4F1AC'
    }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      business: "Home Bakery",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150",
      quote: "StreeKamai helped me turn my love for baking into a ₹25,000/month business!"
    },
    {
      name: "Meera Patel",
      business: "Tailoring Services",
      image: "https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=150",
      quote: "The AI tools made marketing so much easier. I now have 50+ regular customers."
    },
    {
      name: "Kavya Reddy",
      business: "Beauty Services",
      image: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=150",
      quote: "From zero to ₹40,000 monthly income in just 6 months with StreeKamai's guidance."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-green-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Heart className="w-8 h-8" style={{ color: '#F72C5B' }} />
              <span className="text-2xl font-bold" style={{ color: '#F72C5B' }}>
                StreeKamai
              </span>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="relative">
                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-pink-500"
                >
                  {languages.map((lang) => (
                    <option key={lang.code} value={lang.code}>
                      {lang.name}
                    </option>
                  ))}
                </select>
                <Globe className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
              </div>
              
              <button
                onClick={() => navigate('/auth')}
                className="px-6 py-2 text-white rounded-lg transition-all hover:shadow-lg transform hover:scale-105"
                style={{ backgroundColor: '#F72C5B' }}
              >
                {t('getStarted')}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold mb-6"
              style={{ color: '#F72C5B' }}
            >
              {t('heroTitle')}
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
            >
              {t('heroSubtitle')}
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <button
                onClick={() => navigate('/auth')}
                className="px-8 py-4 text-white rounded-xl font-semibold transition-all hover:shadow-lg transform hover:scale-105 flex items-center space-x-2"
                style={{ backgroundColor: '#F72C5B' }}
              >
                <span>{t('getStarted')}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
              
              <button
                className="px-8 py-4 border-2 rounded-xl font-semibold transition-all hover:shadow-lg transform hover:scale-105"
                style={{ borderColor: '#F72C5B', color: '#F72C5B' }}
              >
                {t('learnMore')}
              </button>
            </motion.div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-20 h-20 rounded-full opacity-20" style={{ backgroundColor: '#A7D477' }}></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 rounded-full opacity-20" style={{ backgroundColor: '#FF748B' }}></div>
        <div className="absolute top-1/2 right-20 w-16 h-16 rounded-full opacity-20" style={{ backgroundColor: '#E4F1AC' }}></div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#F72C5B' }}>
              {t('aboutTitle')}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t('aboutDescription')}
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-pink-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#F72C5B' }}>
              {t('featuresTitle')}
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
              >
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                  style={{ backgroundColor: feature.color + '20' }}
                >
                  <feature.icon className="w-8 h-8" style={{ color: feature.color }} />
                </div>
                <h3 className="text-xl font-bold mb-4" style={{ color: '#F72C5B' }}>
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#F72C5B' }}>
              {t('testimonialsTitle')}
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-8 border border-pink-100"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold" style={{ color: '#F72C5B' }}>
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-600">{testimonial.business}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.quote}"</p>
                <div className="flex items-center mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" style={{ color: '#A7D477' }} />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20" style={{ background: 'linear-gradient(to right, #F72C5B, #FF748B)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Sparkles className="w-16 h-16 text-white mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Life?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of women who have already started their entrepreneurial journey with StreeKamai.
            </p>
            <button
              onClick={() => navigate('/auth')}
              className="px-10 py-4 bg-white rounded-xl font-bold text-lg transition-all hover:shadow-xl transform hover:scale-105"
              style={{ color: '#F72C5B' }}
            >
              Start Your Journey Today
            </button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Heart className="w-6 h-6" style={{ color: '#F72C5B' }} />
              <span className="text-2xl font-bold">StreeKamai</span>
            </div>
            <p className="text-gray-400">
              Empowering women to build successful businesses with AI-powered tools
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;