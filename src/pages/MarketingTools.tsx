import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';
import {
  Megaphone,
  Instagram,
  MessageSquare,
  Calendar,
  Sparkles,
  Copy,
  Clock,
  TrendingUp,
  Hash,
  Image as ImageIcon
} from 'lucide-react';

const MarketingTools: React.FC = () => {
  const { t } = useLanguage();
  const [selectedTool, setSelectedTool] = useState('content');
  const [generatedContent, setGeneratedContent] = useState('');
  const [selectedPlatform, setSelectedPlatform] = useState('instagram');

  const contentSuggestions = {
    instagram: [
      {
        type: 'Product Showcase',
        post: '✨ Fresh from my kitchen today! These homemade samosas are made with love and the finest ingredients. Perfect for your evening snacks! 🥟\n\n#HomemadeFood #Samosas #FreshCooked #LocalBusiness #WomenEntrepreneur #TastyTreats #OrderNow',
        image: 'Food photography showing golden samosas',
        engagement: '15-25 likes expected',
        bestTime: '6:00 PM - 8:00 PM'
      },
      {
        type: 'Behind the Scenes',
        post: '👩‍🍳 Starting my day early to prepare fresh meals for my lovely customers. The secret ingredient? Always love and passion! ❤️\n\n#BehindTheScenes #EarlyMorning #Passion #HomeBusiness #FreshFood #WomenInBusiness #Cooking',
        image: 'Process shots of cooking preparation',
        engagement: '20-30 likes expected',
        bestTime: '8:00 AM - 10:00 AM'
      },
      {
        type: 'Customer Testimonial',
        post: '🌟 "Best homemade food in the area! My family loves everything she makes." - Happy Customer\n\nYour words motivate me to do better every day! Thank you for your trust 🙏\n\n#CustomerLove #Testimonial #Grateful #Quality #Trust #HomemadeGoodness',
        image: 'Customer enjoying the food or review screenshot',
        engagement: '25-40 likes expected',
        bestTime: '12:00 PM - 2:00 PM'
      }
    ],
    whatsapp: [
      {
        type: 'Daily Menu',
        message: '🌅 Good Morning!\n\nToday\'s Special Menu:\n• Aloo Paratha with Curd - ₹40\n• Mixed Veg Curry - ₹60\n• Fresh Rotis (pack of 4) - ₹20\n• Homemade Pickle - ₹30\n\nOrder before 11 AM for lunch delivery!\nCall: 9876543210'
      },
      {
        type: 'Weekly Special',
        message: '🎉 WEEKEND SPECIAL OFFER!\n\n50% OFF on Bulk Orders (min 10 items)\nPerfect for family gatherings!\n\nAvailable items:\n• Biryanis • Sweets • Snacks\n\nOffer valid till Sunday. Book now!\nWhatsApp: 9876543210'
      },
      {
        type: 'Festival Offer',
        message: '🪔 Diwali Special!\n\nOrdering traditional sweets and snacks:\n• Ladoo • Barfi • Namkeen\n• Special gift boxes available\n\nPre-order now to avoid last-minute rush!\n📞 Call or WhatsApp to book'
      }
    ]
  };

  const dailyPostingSchedule = [
    {
      time: '8:00 AM',
      platform: 'Instagram',
      type: 'Good Morning Post',
      content: 'Behind-the-scenes or preparation shots',
      status: 'posted'
    },
    {
      time: '12:00 PM',
      platform: 'WhatsApp',
      type: 'Lunch Menu',
      content: 'Daily menu with pricing',
      status: 'scheduled'
    },
    {
      time: '4:00 PM',
      platform: 'Instagram',
      type: 'Product Showcase',
      content: 'Finished dishes with description',
      status: 'pending'
    },
    {
      time: '7:00 PM',
      platform: 'WhatsApp',
      type: 'Tomorrow\'s Pre-orders',
      content: 'Next day menu preview',
      status: 'pending'
    }
  ];

  const generateContent = () => {
    const suggestions = contentSuggestions[selectedPlatform as keyof typeof contentSuggestions];
    const randomSuggestion = suggestions[Math.floor(Math.random() * suggestions.length)];
    setGeneratedContent(selectedPlatform === 'instagram' ? randomSuggestion.post : randomSuggestion.message);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert('Content copied to clipboard!');
  };

  const tools = [
    { id: 'content', label: 'Content Generator', icon: Sparkles },
    { id: 'schedule', label: 'Posting Schedule', icon: Calendar },
    { id: 'analytics', label: 'Performance', icon: TrendingUp }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-r from-purple-500 to-indigo-500 rounded-2xl p-8 text-white"
      >
        <h1 className="text-3xl font-bold mb-2">Marketing Tools</h1>
        <p className="text-white/90">
          AI-powered content creation and marketing automation for social media success
        </p>
      </motion.div>

      {/* Tool Selector */}
      <div className="flex space-x-1 bg-gray-100 rounded-lg p-1">
        {tools.map((tool) => (
          <button
            key={tool.id}
            onClick={() => setSelectedTool(tool.id)}
            className={`flex-1 flex items-center justify-center space-x-2 px-4 py-2 rounded-lg transition-all ${
              selectedTool === tool.id
                ? 'bg-white shadow-sm text-purple-600'
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            <tool.icon className="w-4 h-4" />
            <span className="font-medium">{tool.label}</span>
          </button>
        ))}
      </div>

      {selectedTool === 'content' && (
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Content Generator */}
          <div className="lg:col-span-2 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
            >
              <h2 className="text-xl font-bold mb-4 flex items-center" style={{ color: '#F72C5B' }}>
                <Sparkles className="w-5 h-5 mr-2" />
                AI Content Generator
              </h2>

              {/* Platform Selector */}
              <div className="flex space-x-4 mb-6">
                <button
                  onClick={() => setSelectedPlatform('instagram')}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg border-2 transition-all ${
                    selectedPlatform === 'instagram'
                      ? 'border-pink-500 bg-pink-50 text-pink-700'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <Instagram className="w-4 h-4" />
                  <span>Instagram</span>
                </button>
                <button
                  onClick={() => setSelectedPlatform('whatsapp')}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg border-2 transition-all ${
                    selectedPlatform === 'whatsapp'
                      ? 'border-green-500 bg-green-50 text-green-700'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp</span>
                </button>
              </div>

              <button
                onClick={generateContent}
                className="w-full py-3 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-lg hover:shadow-lg transition-all mb-4 flex items-center justify-center space-x-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>Generate Content</span>
              </button>

              {generatedContent && (
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-gray-900">Generated Content</h3>
                    <button
                      onClick={() => copyToClipboard(generatedContent)}
                      className="p-2 text-gray-500 hover:text-gray-700 transition-colors"
                    >
                      <Copy className="w-4 h-4" />
                    </button>
                  </div>
                  <p className="text-gray-800 whitespace-pre-wrap mb-4">{generatedContent}</p>
                  <div className="flex space-x-2">
                    <button className="px-4 py-2 bg-blue-500 text-white rounded-lg text-sm hover:bg-blue-600 transition-colors">
                      Post Now
                    </button>
                    <button className="px-4 py-2 bg-gray-500 text-white rounded-lg text-sm hover:bg-gray-600 transition-colors">
                      Schedule Later
                    </button>
                  </div>
                </div>
              )}
            </motion.div>

            {/* Content Suggestions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
            >
              <h3 className="font-bold mb-4 flex items-center" style={{ color: '#F72C5B' }}>
                <Megaphone className="w-5 h-5 mr-2" />
                Content Ideas for Today
              </h3>
              
              <div className="space-y-4">
                {contentSuggestions[selectedPlatform as keyof typeof contentSuggestions].map((suggestion, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-gray-900">{suggestion.type}</h4>
                      <button
                        onClick={() => copyToClipboard(selectedPlatform === 'instagram' ? suggestion.post : suggestion.message)}
                        className="p-1 text-gray-400 hover:text-gray-600"
                      >
                        <Copy className="w-4 h-4" />
                      </button>
                    </div>
                    <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                      {selectedPlatform === 'instagram' ? suggestion.post : suggestion.message}
                    </p>
                    {selectedPlatform === 'instagram' && (
                      <div className="flex flex-wrap gap-2 text-xs text-gray-500">
                        <span>📸 {suggestion.image}</span>
                        <span>💖 {suggestion.engagement}</span>
                        <span>🕐 {suggestion.bestTime}</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Hashtag Generator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-6"
          >
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="font-bold mb-4 flex items-center" style={{ color: '#F72C5B' }}>
                <Hash className="w-5 h-5 mr-2" />
                Trending Hashtags
              </h3>
              
              <div className="space-y-3">
                <div>
                  <h4 className="text-sm font-medium text-gray-700 mb-2">Food Business</h4>
                  <div className="flex flex-wrap gap-2">
                    {['#HomemadeFood', '#FreshCooked', '#LocalBusiness', '#WomenEntrepreneur', '#TastyTreats'].map((tag) => (
                      <span key={tag} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded cursor-pointer hover:bg-blue-200">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium text-gray-700 mb-2">Location Based</h4>
                  <div className="flex flex-wrap gap-2">
                    {['#BangaloreFood', '#LocalDelivery', '#Neighborhood', '#CityName'].map((tag) => (
                      <span key={tag} className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded cursor-pointer hover:bg-green-200">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="font-bold mb-4 flex items-center" style={{ color: '#F72C5B' }}>
                <ImageIcon className="w-5 h-5 mr-2" />
                Photo Tips
              </h3>
              
              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex items-start space-x-2">
                  <span className="text-yellow-500">💡</span>
                  <span>Use natural light for food photos</span>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-yellow-500">💡</span>
                  <span>Show the cooking process</span>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-yellow-500">💡</span>
                  <span>Include yourself in behind-the-scenes shots</span>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-yellow-500">💡</span>
                  <span>Take multiple angles of the same dish</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {selectedTool === 'schedule' && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
        >
          <h2 className="text-xl font-bold mb-6 flex items-center" style={{ color: '#F72C5B' }}>
            <Calendar className="w-5 h-5 mr-2" />
            Daily Posting Schedule
          </h2>
          
          <div className="space-y-4">
            {dailyPostingSchedule.map((post, index) => (
              <div
                key={index}
                className={`flex items-center justify-between p-4 rounded-lg border-2 ${
                  post.status === 'posted'
                    ? 'border-green-200 bg-green-50'
                    : post.status === 'scheduled'
                    ? 'border-blue-200 bg-blue-50'
                    : 'border-gray-200 bg-gray-50'
                }`}
              >
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-gray-500" />
                    <span className="font-semibold">{post.time}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    {post.platform === 'Instagram' ? (
                      <Instagram className="w-4 h-4 text-pink-500" />
                    ) : (
                      <MessageSquare className="w-4 h-4 text-green-500" />
                    )}
                    <span className="text-sm font-medium">{post.platform}</span>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">{post.type}</div>
                    <div className="text-sm text-gray-600">{post.content}</div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <span
                    className={`px-2 py-1 text-xs rounded-full ${
                      post.status === 'posted'
                        ? 'bg-green-100 text-green-800'
                        : post.status === 'scheduled'
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    {post.status.charAt(0).toUpperCase() + post.status.slice(1)}
                  </span>
                  {post.status === 'pending' && (
                    <button className="px-3 py-1 bg-blue-500 text-white text-xs rounded hover:bg-blue-600">
                      Schedule
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <h3 className="font-semibold text-yellow-800 mb-2">💡 Posting Tips</h3>
            <ul className="text-sm text-yellow-700 space-y-1">
              <li>• Post consistently at the same times daily</li>
              <li>• Engage with comments within 2-3 hours</li>
              <li>• Use Instagram Stories for behind-the-scenes content</li>
              <li>• Send WhatsApp updates 30 minutes before meal times</li>
            </ul>
          </div>
        </motion.div>
      )}

      {selectedTool === 'analytics' && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          {/* Performance Overview */}
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { label: 'Total Reach', value: '2,347', change: '+12%', color: '#F72C5B' },
              { label: 'Engagement Rate', value: '8.4%', change: '+2.1%', color: '#A7D477' },
              { label: 'New Followers', value: '23', change: '+5', color: '#FF748B' },
              { label: 'Orders from Social', value: '18', change: '+7', color: '#E4F1AC' }
            ].map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
              >
                <div className="flex items-center justify-between mb-2">
                  <TrendingUp className="w-5 h-5" style={{ color: metric.color }} />
                  <span className="text-sm font-medium text-green-600">{metric.change}</span>
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">{metric.value}</div>
                <div className="text-sm text-gray-600">{metric.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Best Performing Posts */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h2 className="text-xl font-bold mb-4 flex items-center" style={{ color: '#F72C5B' }}>
              <TrendingUp className="w-5 h-5 mr-2" />
              Best Performing Posts This Week
            </h2>
            
            <div className="space-y-4">
              {[
                { type: 'Instagram Post', content: 'Fresh homemade biryani ready!', likes: 47, comments: 8, shares: 3 },
                { type: 'WhatsApp Status', content: 'Morning preparation behind the scenes', views: 156, replies: 12 },
                { type: 'Instagram Story', content: 'Customer testimonial video', views: 234, reactions: 28 }
              ].map((post, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <div className="font-medium text-gray-900">{post.type}</div>
                    <div className="text-sm text-gray-600">{post.content}</div>
                  </div>
                  <div className="text-right text-sm">
                    {post.likes && <div>💖 {post.likes} likes</div>}
                    {post.views && <div>👁️ {post.views} views</div>}
                    {post.comments && <div>💬 {post.comments} comments</div>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default MarketingTools;