
import React, { useState } from 'react';
import { ToolType } from './types';
import Layout from './components/Layout';
import Downloader from './components/Downloader';
import Calendar from './components/Calendar';
import TextStyler from './components/TextStyler';
import BioGenerator from './components/BioGenerator';
import EmojiOptimizer from './components/EmojiOptimizer';
import PremiumHub from './components/PremiumHub';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';

const App: React.FC = () => {
  const [activeTool, setActiveTool] = useState<ToolType>(ToolType.DOWNLOADER);

  const renderTool = () => {
    switch (activeTool) {
      case ToolType.DOWNLOADER:
        return <Downloader />;
      case ToolType.CALENDAR:
        return <Calendar />;
      case ToolType.STYLER:
        return <TextStyler />;
      case ToolType.BIO_GEN:
        return <BioGenerator />;
      case ToolType.EMOJI:
        return <EmojiOptimizer />;
      case ToolType.PREMIUM:
        return <PremiumHub />;
      case ToolType.PRIVACY:
        return <PrivacyPolicy />;
      case ToolType.TERMS:
        return <TermsOfService />;
      default:
        return <Downloader />;
    }
  };

  return (
    <Layout activeTool={activeTool} setActiveTool={setActiveTool}>
      <div className="animate-in fade-in duration-700">
        {renderTool()}
      </div>
    </Layout>
  );
};

export default App;
