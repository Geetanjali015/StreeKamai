import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';
import {
  Users,
  MessageCircle,
  Calendar,
  Star,
  Heart,
  Award,
  Video,
  Phone,
  MapPin,
  Clock
} from 'lucide-react';

const Community: React.FC = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('stories');
  const [selectedMeeting, setSelectedMeeting] = useState<string | null>(null);

  const successStories = [
    {
      id: 1,
      name: 'Priya Sharma',
      business: 'Homemade Pickles & Preserves',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300',
      story: 'Started with ₹2,000 investment, now earning ₹25,000/month. My special mango pickle recipe became so popular that I had to hire 2 helpers!',
      revenue: '₹25,000/month',
      timeToSuccess: '8 months',
      location: 'Bangalore, Karnataka',
      followers: 1234,
      rating: 4.9
    },
    {
      id: 2,
      name: 'Meera Patel',
      business: 'Custom Tailoring Services',
      image: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=300',
      story: 'From stitching clothes for neighbors to running a boutique with 50+ regular customers. StreeKamai helped me build my brand and find customers online.',
      revenue: '₹35,000/month',
      timeToSuccess: '6 months',
      location: 'Mumbai, Maharashtra',
      followers: 2100,
      rating: 4.8
    },
    {
      id: 3,
      name: 'Kavya Reddy',
      business: 'Beauty & Skincare Services',
      image: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=300',
      story: 'Turned my passion for skincare into a thriving home salon. Now I provide services to 20+ customers weekly and have launched my own product line.',
      revenue: '₹40,000/month',
      timeToSuccess: '10 months',
      location: 'Hyderabad, Telangana',
      followers: 1800,
      rating: 4.9
    },
    {
      id: 4,
      name: 'Anjali Singh',
      business: 'Organic Food Products',
      image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=300',
      story: 'Started selling organic spices and herbs grown in my terrace garden. Now supplying to 5 local stores and have an online customer base of 200+.',
      revenue: '₹18,000/month',
      timeToSuccess: '5 months',
      location: 'Pune, Maharashtra',
      followers: 890,
      rating: 4.7
    }
  ];

  const upcomingMeetings = [
    {
      id: 1,
      title: 'Food Business Success Stories',
      host: 'Priya Sharma',
      hostImage: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150',
      date: '2025-01-25',
      time: '7:00 PM',
      duration: '1 hour',
      participants: 24,
      maxParticipants: 50,
      description: 'Learn how to scale your food business and build a loyal customer base. Priya will share her journey from kitchen to ₹25,000/month revenue.',
      topics: ['Recipe standardization', 'Customer retention', 'Pricing strategies', 'Quality control']
    },
    {
      id: 2,
      title: 'Digital Marketing for Women Entrepreneurs',
      host: 'Meera Patel',
      hostImage: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=150',
      date: '2025-01-27',
      time: '6:30 PM',
      duration: '45 minutes',
      participants: 18,
      maxParticipants: 30,
      description: 'Master social media marketing and build your online presence. Meera will share practical tips for Instagram and WhatsApp marketing.',
      topics: ['Content creation', 'Customer engagement', 'Online promotion', 'Brand building']
    },
    {
      id: 3,
      title: 'Financial Planning for Small Business',
      host: 'Kavya Reddy',
      hostImage: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=150',
      date: '2025-01-30',
      time: '8:00 PM',
      duration: '1.5 hours',
      participants: 12,
      maxParticipants: 25,
      description: 'Learn to manage business finances, save taxes, and plan for growth. Essential financial literacy for women entrepreneurs.',
      topics: ['Business accounting', 'Tax planning', 'Investment strategies', 'Emergency funds']
    }
  ];

  const forumPosts = [
    {
      id: 1,
      author: 'Sunita Devi',
      avatar: 'https://images.pexels.com/photos/1181715/pexels-photo-1181715.jpeg?auto=compress&cs=tinysrgb&w=150',
      title: 'How to price homemade food items?',
      content: 'I\'m struggling with pricing my homemade snacks. How do you calculate the right price that covers costs and gives profit?',
      time: '2 hours ago',
      replies: 8,
      likes: 12,
      category: 'Pricing'
    },
    {
      id: 2,
      author: 'Radha Krishna',
      avatar: 'https://images.pexels.com/photos/1181672/pexels-photo-1181672.jpeg?auto=compress&cs=tinysrgb&w=150',
      title: 'Best packaging ideas for homemade products',
      content: 'Looking for eco-friendly and cost-effective packaging solutions for my pickle business. Any suggestions?',
      time: '5 hours ago',
      replies: 15,
      likes: 20,
      category: 'Packaging'
    },
    {
      id: 3,
      author: 'Lakshmi Nair',
      avatar: 'https://images.pexels.com/photos/1181678/pexels-photo-1181678.jpeg?auto=compress&cs=tinysrgb&w=150',
      title: 'Dealing with difficult customers',
      content: 'Had a bad experience with a customer who refused to pay. How do you handle such situations professionally?',
      time: '1 day ago',
      replies: 22,
      likes: 18,
      category: 'Customer Service'
    }
  ];

  const bookMeeting = (meetingId: string) => {
    setSelectedMeeting(meetingId);
    alert('Meeting booked successfully! You will receive a confirmation email.');
  };

  const tabs = [
    { id: 'stories', label: 'Success Stories', icon: Award },
    { id: 'meetings', label: 'Meetings', icon: Calendar },
    { id: 'forum', label: 'Community Chat', icon: MessageCircle }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-8 text-white"
      >
        <h1 className="text-3xl font-bold mb-2">Community & Inspiration</h1>
        <p className="text-white/90">
          Connect with fellow women entrepreneurs, share experiences, and grow together
        </p>
      </motion.div>

      {/* Tab Navigation */}
      <div className="flex space-x-1 bg-gray-100 rounded-lg p-1">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 flex items-center justify-center space-x-2 px-4 py-2 rounded-lg transition-all ${
              activeTab === tab.id
                ? 'bg-white shadow-sm text-purple-600'
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            <tab.icon className="w-4 h-4" />
            <span className="font-medium">{tab.label}</span>
          </button>
        ))}
      </div>

      {activeTab === 'stories' && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 gap-6"
        >
          {successStories.map((story, index) => (
            <motion.div
              key={story.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all"
            >
              <div className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <img
                    src={story.image}
                    alt={story.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900">{story.name}</h3>
                    <p className="text-purple-600 font-medium">{story.business}</p>
                    <div className="flex items-center space-x-2 mt-1">
                      <MapPin className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-600">{story.location}</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 mb-4 leading-relaxed">{story.story}</p>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center p-3 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">{story.revenue}</div>
                    <div className="text-sm text-gray-600">Monthly Revenue</div>
                  </div>
                  <div className="text-center p-3 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">{story.timeToSuccess}</div>
                    <div className="text-sm text-gray-600">Time to Success</div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-600">{story.followers}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600">{story.rating}</span>
                    </div>
                  </div>
                  <button className="flex items-center space-x-2 px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors text-sm">
                    <MessageCircle className="w-4 h-4" />
                    <span>Connect</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}

      {activeTab === 'meetings' && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <div className="bg-gradient-to-r from-indigo-100 to-purple-100 border border-indigo-200 rounded-xl p-6">
            <h2 className="text-xl font-bold text-indigo-800 mb-2">🎯 Upcoming Expert Sessions</h2>
            <p className="text-indigo-700">
              Learn directly from successful women entrepreneurs who have built thriving businesses. Book your spot in these exclusive sessions!
            </p>
          </div>

          <div className="grid lg:grid-cols-1 gap-6">
            {upcomingMeetings.map((meeting, index) => (
              <motion.div
                key={meeting.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
                  <div className="flex-1">
                    <div className="flex items-center space-x-4 mb-4">
                      <img
                        src={meeting.hostImage}
                        alt={meeting.host}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{meeting.title}</h3>
                        <p className="text-purple-600 font-medium">Hosted by {meeting.host}</p>
                      </div>
                    </div>

                    <p className="text-gray-700 mb-4">{meeting.description}</p>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <Calendar className="w-4 h-4" />
                        <span>{meeting.date}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <Clock className="w-4 h-4" />
                        <span>{meeting.time}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <Video className="w-4 h-4" />
                        <span>{meeting.duration}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <Users className="w-4 h-4" />
                        <span>{meeting.participants}/{meeting.maxParticipants}</span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Topics Covered:</h4>
                      <div className="flex flex-wrap gap-2">
                        {meeting.topics.map((topic, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-indigo-100 text-indigo-800 text-sm rounded-full"
                          >
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col space-y-3 lg:ml-6">
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-1">Spots Available</div>
                      <div className="text-2xl font-bold text-green-600">
                        {meeting.maxParticipants - meeting.participants}
                      </div>
                    </div>
                    <button
                      onClick={() => bookMeeting(meeting.id)}
                      className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:shadow-lg transition-all flex items-center justify-center space-x-2 font-semibold"
                    >
                      <Calendar className="w-4 h-4" />
                      <span>Book Meeting</span>
                    </button>
                    <div className="text-xs text-gray-500 text-center">
                      Free for StreeKamai members
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}

      {activeTab === 'forum' && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          {/* Forum Header */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold" style={{ color: '#F72C5B' }}>
                Community Discussions
              </h2>
              <button className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:shadow-lg transition-all">
                Start New Discussion
              </button>
            </div>
            <p className="text-gray-600">
              Ask questions, share experiences, and get advice from fellow women entrepreneurs
            </p>
          </div>

          {/* Forum Posts */}
          <div className="space-y-4">
            {forumPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all cursor-pointer"
              >
                <div className="flex items-start space-x-4">
                  <img
                    src={post.avatar}
                    alt={post.author}
                    className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-3">
                        <h3 className="font-semibold text-gray-900">{post.author}</h3>
                        <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                          {post.category}
                        </span>
                      </div>
                      <span className="text-sm text-gray-500">{post.time}</span>
                    </div>
                    
                    <h4 className="text-lg font-medium text-gray-900 mb-2">{post.title}</h4>
                    <p className="text-gray-700 mb-3">{post.content}</p>
                    
                    <div className="flex items-center space-x-6">
                      <button className="flex items-center space-x-2 text-gray-500 hover:text-purple-600 transition-colors">
                        <MessageCircle className="w-4 h-4" />
                        <span className="text-sm">{post.replies} replies</span>
                      </button>
                      <button className="flex items-center space-x-2 text-gray-500 hover:text-red-500 transition-colors">
                        <Heart className="w-4 h-4" />
                        <span className="text-sm">{post.likes} likes</span>
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Join Community CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl p-8 text-white text-center"
          >
            <Users className="w-16 h-16 mx-auto mb-4 text-white/80" />
            <h3 className="text-2xl font-bold mb-4">Join Our WhatsApp Community</h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Get daily tips, instant support, and connect with 500+ women entrepreneurs in our active WhatsApp community.
            </p>
            <button className="px-8 py-3 bg-white text-purple-600 rounded-lg font-semibold hover:shadow-lg transition-all flex items-center space-x-2 mx-auto">
              <Phone className="w-5 h-5" />
              <span>Join WhatsApp Group</span>
            </button>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Community;