import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Dashboard } from './pages/Dashboard';
import { News } from './pages/News';
import { Enterprise } from './pages/Enterprise';
import { Activity } from './pages/Activity';
import { SupplyDemandPage } from './pages/SupplyDemand';
import { OrganizationOverview } from './pages/OrganizationOverview';
import { OrganizationStructure } from './pages/OrganizationStructure';
import { Chamber } from './pages/Chamber';
import { Notice } from './pages/Notice';
import { Policy } from './pages/Policy';
import { Appeal } from './pages/Appeal';
import { Mall } from './pages/Mall';
import { MallCategories } from './pages/MallCategories';
import { SystemSettings } from './pages/SystemSettings';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/news" element={<News />} />
          <Route path="/organization/overview" element={<OrganizationOverview />} />
          <Route path="/organization/structure" element={<OrganizationStructure />} />
          <Route path="/chamber" element={<Chamber />} />
          <Route path="/enterprise" element={<Enterprise />} />
          <Route path="/notice" element={<Notice />} />
          <Route path="/policy" element={<Policy />} />
          <Route path="/activity" element={<Activity />} />
          <Route path="/supply-demand" element={<SupplyDemandPage />} />
          <Route path="/appeal" element={<Appeal />} />
          <Route path="/mall" element={<Mall />} />
          <Route path="/mall/categories" element={<MallCategories />} />
          <Route path="/system" element={<SystemSettings />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;