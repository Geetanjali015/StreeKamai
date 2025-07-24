import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';
import {
  CreditCard,
  FileText,
  Shield,
  MessageCircle,
  CheckCircle,
  AlertCircle,
  DollarSign,
  Clock,
  User,
  Building,
  Phone,
  Mail
} from 'lucide-react';

const LoanInfo: React.FC = () => {
  const { t } = useLanguage();
  const [selectedLoan, setSelectedLoan] = useState<string | null>(null);
  const [showChatbot, setShowChatbot] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    {
      type: 'bot',
      message: 'Hello! I\'m here to help you find the best loan option for your business. What type of business are you planning to start?'
    }
  ]);
  const [userMessage, setUserMessage] = useState('');

  const loanSchemes = [
    {
      id: 'standup-india',
      title: 'Stand-Up India',
      amount: '₹10 Lakh - ₹1 Crore',
      interest: '8.5% - 12%',
      tenure: '7 years',
      description: 'For SC/ST/Women entrepreneurs to set up greenfield enterprises',
      eligibility: ['Women entrepreneur', 'Age 18+', 'First-time business owner'],
      documents: ['Aadhar Card', 'PAN Card', 'Business Plan', 'Bank Statements', 'Property Documents'],
      benefits: ['Lower interest rates', 'Collateral-free up to ₹10 lakh', 'Government backing'],
      color: '#F72C5B',
      recommended: true
    },
    {
      id: 'mudra-loan',
      title: 'MUDRA Loan - Tarun',
      amount: '₹5 Lakh - ₹10 Lakh',
      interest: '9% - 14%',
      tenure: '5 years',
      description: 'For small business activities and micro enterprises',
      eligibility: ['Any Indian citizen', 'Non-defaulter to any bank', 'Viable business plan'],
      documents: ['Identity Proof', 'Address Proof', 'Business Registration', 'Income Proof'],
      benefits: ['No collateral required', 'Easy processing', 'Quick disbursement'],
      color: '#A7D477',
      recommended: false
    },
    {
      id: 'sbi-women',
      title: 'SBI Stree Shakti Package',
      amount: '₹2 Lakh - ₹20 Lakh',
      interest: '8.75% - 13.5%',
      tenure: '7 years',
      description: 'Specially designed for women entrepreneurs',
      eligibility: ['Women entrepreneur', 'Minimum 51% stake', 'Good credit history'],
      documents: ['KYC Documents', 'Business Plan', 'Financial Statements', 'Collateral Documents'],
      benefits: ['Concessional rates', 'Flexible repayment', 'Processing fee waiver'],
      color: '#FF748B',
      recommended: false
    },
    {
      id: 'pmegp',
      title: 'PMEGP Scheme',
      amount: '₹25 Lakh - ₹1 Crore',
      interest: '7.5% - 11%',
      tenure: '7 years',
      description: 'Prime Minister Employment Generation Programme',
      eligibility: ['Age 18-40', 'Educational qualification 8th pass', 'New project'],
      documents: ['Educational Certificate', 'Caste Certificate', 'Project Report', 'Experience Certificate'],
      benefits: ['Subsidy 25-35%', 'Government support', 'Training provided'],
      color: '#E4F1AC',
      recommended: false
    }
  ];

  const collateralTips = [
    {
      title: 'Property Documents',
      description: 'Keep property papers, sale deed, and title documents ready',
      icon: FileText
    },
    {
      title: 'Fixed Deposits',
      description: 'Bank FDs can serve as collateral for smaller loans',
      icon: DollarSign
    },
    {
      title: 'Gold Jewelry',
      description: 'Gold ornaments can be used as security for quick loans',
      icon: Shield
    },
    {
      title: 'Insurance Policies',
      description: 'Life insurance policies with surrender value can be pledged',
      icon: CheckCircle
    }
  ];

  const handleSendMessage = () => {
    if (userMessage.trim()) {
      const newMessages = [
        ...chatMessages,
        { type: 'user', message: userMessage },
        { 
          type: 'bot', 
          message: 'Based on your business type, I recommend the Stand-Up India scheme. It offers the best terms for women entrepreneurs. Would you like more details about the application process?' 
        }
      ];
      setChatMessages(newMessages);
      setUserMessage('');
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl p-8 text-white"
      >
        <h1 className="text-3xl font-bold mb-2">Loans & Regulations</h1>
        <p className="text-white/90">
          Discover funding opportunities and regulatory information for your business
        </p>
      </motion.div>

      {/* AI Recommendation Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="bg-gradient-to-r from-green-100 to-emerald-100 border border-green-200 rounded-xl p-6"
      >
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
            <CheckCircle className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-green-800 mb-1">AI Recommendation</h3>
            <p className="text-green-700">
              Based on your business profile, <strong>Stand-Up India</strong> scheme is the best match for you. 
              You can get up to ₹1 Crore with attractive interest rates.
            </p>
          </div>
          <button
            onClick={() => setShowChatbot(true)}
            className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors flex items-center space-x-2"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat with AI</span>
          </button>
        </div>
      </motion.div>

      {/* Loan Schemes */}
      <div className="grid lg:grid-cols-2 gap-6">
        {loanSchemes.map((loan, index) => (
          <motion.div
            key={loan.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`bg-white rounded-xl p-6 shadow-sm border-2 cursor-pointer transition-all ${
              selectedLoan === loan.id
                ? 'border-blue-500 shadow-lg'
                : 'border-gray-100 hover:border-gray-200'
            }`}
            onClick={() => setSelectedLoan(selectedLoan === loan.id ? null : loan.id)}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: loan.color + '20' }}
                >
                  <CreditCard className="w-6 h-6" style={{ color: loan.color }} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{loan.title}</h3>
                  {loan.recommended && (
                    <span className="inline-block px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full mt-1">
                      Recommended
                    </span>
                  )}
                </div>
              </div>
            </div>

            <p className="text-gray-600 mb-4">{loan.description}</p>

            <div className="grid grid-cols-3 gap-4 mb-4">
              <div>
                <div className="text-sm text-gray-500">Loan Amount</div>
                <div className="font-semibold text-gray-900">{loan.amount}</div>
              </div>
              <div>
                <div className="text-sm text-gray-500">Interest Rate</div>
                <div className="font-semibold text-gray-900">{loan.interest}</div>
              </div>
              <div>
                <div className="text-sm text-gray-500">Tenure</div>
                <div className="font-semibold text-gray-900">{loan.tenure}</div>
              </div>
            </div>

            {selectedLoan === loan.id && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="border-t border-gray-100 pt-4 space-y-4"
              >
                {/* Eligibility */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Eligibility Criteria</h4>
                  <ul className="space-y-1">
                    {loan.eligibility.map((criteria, i) => (
                      <li key={i} className="flex items-center space-x-2 text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>{criteria}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Required Documents */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Required Documents</h4>
                  <div className="flex flex-wrap gap-2">
                    {loan.documents.map((doc, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                      >
                        {doc}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Benefits */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Key Benefits</h4>
                  <ul className="space-y-1">
                    {loan.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center space-x-2 text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-blue-500" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="w-full py-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-lg hover:shadow-lg transition-all">
                  Apply Now
                </button>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Collateral Tips */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
      >
        <h2 className="text-xl font-bold mb-6 flex items-center" style={{ color: '#F72C5B' }}>
          <Shield className="w-5 h-5 mr-2" />
          Collateral & Security Tips
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {collateralTips.map((tip, index) => (
            <div key={index} className="text-center">
              <div
                className="w-16 h-16 rounded-xl mx-auto mb-4 flex items-center justify-center"
                style={{ backgroundColor: '#F72C5B20' }}
              >
                <tip.icon className="w-8 h-8" style={{ color: '#F72C5B' }} />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{tip.title}</h3>
              <p className="text-sm text-gray-600">{tip.description}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Application Process */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
      >
        <h2 className="text-xl font-bold mb-6 flex items-center" style={{ color: '#F72C5B' }}>
          <FileText className="w-5 h-5 mr-2" />
          Loan Application Process
        </h2>
        
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { step: 1, title: 'Research & Choose', description: 'Compare schemes and select the best option' },
            { step: 2, title: 'Prepare Documents', description: 'Gather all required documents and certificates' },
            { step: 3, title: 'Submit Application', description: 'Apply online or visit the nearest branch' },
            { step: 4, title: 'Verification & Approval', description: 'Wait for verification and loan approval' }
          ].map((process, index) => (
            <div key={index} className="text-center">
              <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                {process.step}
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{process.title}</h3>
              <p className="text-sm text-gray-600">{process.description}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* AI Chatbot Modal */}
      {showChatbot && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl max-w-md w-full max-h-[600px] flex flex-col"
          >
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-gray-900">Loan Advisory AI</h3>
              </div>
              <button
                onClick={() => setShowChatbot(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                ×
              </button>
            </div>

            <div className="flex-1 p-4 space-y-4 overflow-y-auto">
              {chatMessages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-xs px-4 py-2 rounded-2xl ${
                      msg.type === 'user'
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    {msg.message}
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 border-t border-gray-200">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={userMessage}
                  onChange={(e) => setUserMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Ask about loans..."
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  onClick={handleSendMessage}
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                >
                  Send
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default LoanInfo;