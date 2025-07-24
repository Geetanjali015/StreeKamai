import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';
import {
  Target,
  CheckCircle,
  Clock,
  TrendingUp,
  Users,
  DollarSign,
  MessageCircle,
  Lightbulb,
  ArrowRight,
  BarChart3
} from 'lucide-react';

const StrategyBuilder: React.FC = () => {
  const { t } = useLanguage();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showPlan, setShowPlan] = useState(false);

  const questions = [
    {
      question: "What is your primary business goal for the next 6 months?",
      options: [
        "Increase monthly income to ₹20,000",
        "Expand customer base by 50%",
        "Launch online presence",
        "Improve product quality"
      ]
    },
    {
      question: "Who is your target customer?",
      options: [
        "Local families in my neighborhood",
        "Working professionals",
        "Online customers across India",
        "Small businesses and offices"
      ]
    },
    {
      question: "What's your biggest business challenge?",
      options: [
        "Finding new customers",
        "Managing time effectively",
        "Pricing my products/services",
        "Marketing and promotion"
      ]
    },
    {
      question: "How do you currently get customers?",
      options: [
        "Word of mouth referrals",
        "Social media posts",
        "Local advertising",
        "Through friends and family"
      ]
    },
    {
      question: "What's your competitive advantage?",
      options: [
        "High quality and attention to detail",
        "Affordable pricing",
        "Quick delivery/service",
        "Unique designs/recipes"
      ]
    }
  ];

  const handleAnswer = (answer: string) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowPlan(true);
    }
  };

  const businessPlan = {
    title: "Your Personalized Business Strategy",
    phases: [
      {
        title: "Phase 1: Foundation (Weeks 1-4)",
        tasks: [
          "Set up professional social media profiles",
          "Create a portfolio of your best work",
          "Define your pricing strategy",
          "Establish quality standards"
        ],
        status: "current",
        progress: 60
      },
      {
        title: "Phase 2: Growth (Weeks 5-12)",
        tasks: [
          "Launch referral program",
          "Start content marketing",
          "Expand service offerings",
          "Build customer database"
        ],
        status: "upcoming",
        progress: 0
      },
      {
        title: "Phase 3: Scale (Weeks 13-24)",
        tasks: [
          "Hire additional help if needed",
          "Explore online marketplaces",
          "Develop premium service tiers",
          "Build brand partnerships"
        ],
        status: "future",
        progress: 0
      }
    ],
    metrics: [
      { label: "Target Monthly Revenue", value: "₹20,000", icon: DollarSign, color: '#A7D477' },
      { label: "Customer Growth", value: "+50%", icon: Users, color: '#FF748B' },
      { label: "Time Investment", value: "15 hrs/week", icon: Clock, color: '#E4F1AC' },
      { label: "Success Rate", value: "85%", icon: TrendingUp, color: '#F72C5B' }
    ]
  };

  const resetStrategy = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowPlan(false);
  };

  if (showPlan) {
    return (
      <div className="space-y-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-green-500 to-emerald-400 rounded-2xl p-8 text-white"
        >
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold mb-2">{businessPlan.title}</h1>
              <p className="text-white/90">
                Based on your responses, here's your customized business strategy
              </p>
            </div>
            <button
              onClick={resetStrategy}
              className="px-4 py-2 bg-white/20 rounded-lg hover:bg-white/30 transition-all"
            >
              Restart
            </button>
          </div>
        </motion.div>

        {/* Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {businessPlan.metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
            >
              <div className="flex items-center space-x-3">
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: metric.color + '20' }}
                >
                  <metric.icon className="w-6 h-6" style={{ color: metric.color }} />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">{metric.value}</div>
                  <div className="text-sm text-gray-600">{metric.label}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Strategy Phases */}
        <div className="space-y-6">
          {businessPlan.phases.map((phase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      phase.status === 'current'
                        ? 'bg-blue-500 text-white'
                        : phase.status === 'upcoming'
                        ? 'bg-yellow-500 text-white'
                        : 'bg-gray-300 text-gray-600'
                    }`}
                  >
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold" style={{ color: '#F72C5B' }}>
                    {phase.title}
                  </h3>
                </div>
                <div className="flex items-center space-x-2">
                  {phase.status === 'current' && (
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                      In Progress
                    </span>
                  )}
                  <span className="text-sm text-gray-600">{phase.progress}% Complete</span>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                <div
                  className="h-2 rounded-full transition-all duration-500"
                  style={{
                    backgroundColor: phase.status === 'current' ? '#3B82F6' : '#E5E7EB',
                    width: `${phase.progress}%`
                  }}
                />
              </div>
              
              <div className="space-y-3">
                {phase.tasks.map((task, taskIndex) => (
                  <div key={taskIndex} className="flex items-center space-x-3">
                    <CheckCircle
                      className={`w-5 h-5 ${
                        phase.status === 'current' && taskIndex < 3
                          ? 'text-green-500'
                          : 'text-gray-300'
                      }`}
                    />
                    <span
                      className={`${
                        phase.status === 'current' && taskIndex < 3
                          ? 'text-gray-900 line-through'
                          : 'text-gray-700'
                      }`}
                    >
                      {task}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* AI Assistant */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="bg-gradient-to-r from-purple-500 to-indigo-500 rounded-xl p-6 text-white"
        >
          <div className="flex items-center space-x-3 mb-4">
            <MessageCircle className="w-6 h-6" />
            <h3 className="text-xl font-bold">AI Strategy Assistant</h3>
          </div>
          <p className="text-white/90 mb-4">
            Need help with your strategy? Ask our AI assistant for personalized advice and tips to accelerate your business growth.
          </p>
          <button className="px-6 py-3 bg-white text-purple-600 rounded-lg font-semibold hover:shadow-lg transition-all flex items-center space-x-2">
            <MessageCircle className="w-4 h-4" />
            <span>Chat with AI Assistant</span>
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-r from-green-500 to-emerald-400 rounded-2xl p-8 text-white"
      >
        <h1 className="text-3xl font-bold mb-2">AI Strategy Builder</h1>
        <p className="text-white/90">
          Answer a few questions to get your personalized business strategy powered by AI
        </p>
      </motion.div>

      {/* Progress */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold" style={{ color: '#F72C5B' }}>
            Question {currentQuestion + 1} of {questions.length}
          </h2>
          <div className="text-sm text-gray-600">
            {Math.round(((currentQuestion + 1) / questions.length) * 100)}% Complete
          </div>
        </div>
        
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="h-2 rounded-full transition-all duration-300"
            style={{
              backgroundColor: '#A7D477',
              width: `${((currentQuestion + 1) / questions.length) * 100}%`
            }}
          />
        </div>
      </motion.div>

      {/* Question Card */}
      <motion.div
        key={currentQuestion}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-xl p-8 shadow-sm border border-gray-100"
      >
        <div className="flex items-start space-x-4 mb-6">
          <div
            className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
            style={{ backgroundColor: '#F72C5B20' }}
          >
            <Lightbulb className="w-6 h-6" style={{ color: '#F72C5B' }} />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {questions[currentQuestion].question}
            </h2>
            <p className="text-gray-600">
              Choose the option that best describes your situation
            </p>
          </div>
        </div>

        <div className="space-y-3">
          {questions[currentQuestion].options.map((option, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleAnswer(option)}
              className="w-full p-4 text-left rounded-lg border-2 border-gray-200 hover:border-green-500 hover:bg-green-50 transition-all group"
            >
              <div className="flex items-center justify-between">
                <span className="text-gray-800 group-hover:text-green-800">
                  {option}
                </span>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-green-500" />
              </div>
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Previous Answers */}
      {answers.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-gray-50 rounded-xl p-6"
        >
          <h3 className="font-semibold text-gray-900 mb-4">Your Previous Answers:</h3>
          <div className="space-y-2">
            {answers.map((answer, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="w-6 h-6 rounded-full bg-green-500 text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                  {index + 1}
                </div>
                <div>
                  <div className="text-sm text-gray-600 mb-1">
                    {questions[index].question}
                  </div>
                  <div className="text-sm font-medium text-gray-900">
                    {answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default StrategyBuilder;