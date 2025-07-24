import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import { AuthProvider } from './contexts/AuthContext';
import Layout from './components/Layout';
import LandingPage from './pages/LandingPage';
import AuthPage from './pages/AuthPage';
import BusinessInfoForm from './pages/BusinessInfoForm';
import Dashboard from './pages/Dashboard';
import BrandBuilding from './pages/BrandBuilding';
import StrategyBuilder from './pages/StrategyBuilder';
import LoanInfo from './pages/LoanInfo';
import MarketingTools from './pages/MarketingTools';
import Community from './pages/Community';
import Settings from './pages/Settings';

function App() {
  return (
    <LanguageProvider>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/business-info" element={<BusinessInfoForm />} />
            <Route path="/*" element={
              <Layout>
                <Routes>
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/brand-building" element={<BrandBuilding />} />
                  <Route path="/strategy" element={<StrategyBuilder />} />
                  <Route path="/loans" element={<LoanInfo />} />
                  <Route path="/marketing" element={<MarketingTools />} />
                  <Route path="/community" element={<Community />} />
                  <Route path="/settings" element={<Settings />} />
                </Routes>
              </Layout>
            } />
          </Routes>
        </Router>
      </AuthProvider>
    </LanguageProvider>
  );
}

export default App;