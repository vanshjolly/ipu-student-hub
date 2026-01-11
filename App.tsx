
import React, { useState } from 'react';
import Layout from './components/Layout';
import Home from './components/Home';
import AttendanceCalc from './components/AttendanceCalc';
import CGPACalc from './components/CGPACalc';
import ResourceSection from './components/ResourceSection';
import Planner from './components/Planner';
import { Page } from './types';
import { DUMMY_RESOURCES } from './constants';

const App: React.FC = () => {
  const [activePage, setActivePage] = useState<Page>(Page.Home);

  const renderContent = () => {
    switch (activePage) {
      case Page.Home:
        return <Home setActivePage={setActivePage} />;
      case Page.Attendance:
        return <AttendanceCalc />;
      case Page.CGPA:
        return <CGPACalc />;
      case Page.PYQs:
        return <ResourceSection type="pyq" items={DUMMY_RESOURCES} />;
      case Page.Notes:
        return <ResourceSection type="note" items={DUMMY_RESOURCES} />;
      case Page.Planner:
        return <Planner />;
      default:
        return <Home setActivePage={setActivePage} />;
    }
  };

  return (
    <Layout activePage={activePage} setActivePage={setActivePage}>
      <div className="animate-fadeIn">
        {renderContent()}
      </div>
    </Layout>
  );
};

export default App;
