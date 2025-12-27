
import React, { useState, useEffect } from 'react';
import { ToolType } from '../types';

interface LayoutProps {
  children: React.ReactNode;
  activeTool: ToolType;
  setActiveTool: (tool: ToolType) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, activeTool, setActiveTool }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const navItems = [
    { type: ToolType.DOWNLOADER, label: 'Downloader', icon: '📥' },
    { type: ToolType.PREMIUM, label: 'Premium Hub', icon: '💎' },
    { type: ToolType.CALENDAR, label: 'Planner', icon: '🗓️' },
    { type: ToolType.STYLER, label: 'Styler', icon: '✨' },
    { type: ToolType.BIO_GEN, label: 'Bio Gen', icon: '📝' },
    { type: ToolType.EMOJI, label: 'Emoji', icon: '🚀' },
  ];

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <div className={`min-h-screen flex flex-col transition-colors duration-500 ${isDarkMode ? 'dark bg-gray-950 text-white' : 'bg-transparent text-gray-900'}`}>
      {isDarkMode && (
        <div className="fixed inset-0 bg-gray-950 z-[-1] transition-opacity duration-500"></div>
      )}

      {/* Header */}
      <header className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-b border-brand dark:border-gray-800 sticky top-0 z-50 shadow-md transition-colors">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div 
            className="flex items-center gap-3 cursor-pointer transition-transform hover:scale-105" 
            onClick={() => setActiveTool(ToolType.DOWNLOADER)}
          >
            {/* Logo updated with brand color #a5d7fb */}
            <div className="relative w-10 h-10 flex-shrink-0">
              <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
                <defs>
                  <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#a5d7fb" />
                    <stop offset="100%" stopColor="#2563eb" />
                  </linearGradient>
                </defs>
                <rect x="10" y="10" width="80" height="80" rx="20" fill="url(#logoGrad)" />
                <path d="M50 25 L50 55 M40 45 L50 55 L60 45" stroke="white" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                <path d="M65 85 L65 65 L72 65 L73 57 L65 57 L65 52 C65 50 66 48 68 48 L73 48 L73 41 C71 41 68 40 65 40 C58 40 54 44 54 51 L54 57 L48 57 L48 65 L54 65 L54 85" fill="white" />
                <path d="M15 65 Q30 85 85 45" stroke="white" strokeWidth="4" strokeLinecap="round" fill="none" opacity="0.6" />
              </svg>
            </div>
            
            <div className="flex flex-col leading-none">
              <span className="text-lg font-black text-brand-dark dark:text-brand tracking-tighter">Swift</span>
              <span className="text-[10px] font-black text-gray-900 dark:text-gray-100 uppercase tracking-widest">FB Downloader</span>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center gap-2 bg-gray-100 dark:bg-gray-800 p-1 rounded-full border border-gray-200 dark:border-gray-700 overflow-x-auto transition-colors">
            {navItems.map((item) => (
              <button
                key={item.type}
                onClick={() => setActiveTool(item.type)}
                className={`px-5 py-2.5 rounded-full transition-all text-sm font-black whitespace-nowrap tracking-tight ${
                  activeTool === item.type
                    ? 'bg-brand text-gray-950 shadow-lg'
                    : 'text-gray-800 dark:text-gray-200 hover:text-brand-dark dark:hover:text-brand hover:bg-white dark:hover:bg-gray-700'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button 
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 border-2 border-brand dark:border-gray-700 transition-all hover:border-brand-dark dark:hover:border-brand group shadow-sm"
            >
              <span className="text-sm group-hover:scale-125 transition-transform">{isDarkMode ? '☀️' : '🌙'}</span>
              <span className="text-[12px] font-black text-gray-900 dark:text-white uppercase tracking-widest hidden xs:block">
                {isDarkMode ? 'Light' : 'Night'}
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 w-full max-w-6xl mx-auto px-4 py-10">
        <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
          {children}
        </div>
      </main>

      {/* Mobile Nav */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg border-t border-brand dark:border-gray-800 px-2 py-4 flex justify-around items-center z-50 shadow-[0_-8px_30px_rgb(0,0,0,0.1)] transition-colors">
        {navItems.map((item) => (
          <button
            key={item.type}
            onClick={() => setActiveTool(item.type)}
            className={`flex flex-col items-center gap-1.5 p-2 rounded-xl transition-all ${
              activeTool === item.type ? 'text-brand-dark dark:text-brand bg-brand/20 dark:bg-brand/10' : 'text-gray-900 dark:text-white'
            }`}
          >
            <span className="text-2xl">{item.icon}</span>
            <span className="text-[11px] font-black uppercase tracking-tight leading-none">{item.label.split(' ')[0]}</span>
          </button>
        ))}
      </div>

      {/* Footer */}
      <footer className="py-12 mb-16 md:mb-0 border-t border-brand/30 dark:border-gray-900 transition-colors">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-brand-dark dark:text-brand font-black text-lg">Swift FB Downloader</p>
          <p className="text-gray-800 dark:text-white text-sm mt-2 font-bold max-w-md mx-auto">Ultimate creator toolset for professional social media management. Zero tracking, zero APIs.</p>
          
          <div className="flex justify-center gap-6 mt-6">
            <button 
              onClick={() => setActiveTool(ToolType.PRIVACY)} 
              className={`text-xs font-black uppercase tracking-widest transition-colors ${activeTool === ToolType.PRIVACY ? 'text-brand-dark underline' : 'text-gray-900 dark:text-white hover:text-brand-dark'}`}
            >
              Privacy Policy
            </button>
            <button 
              onClick={() => setActiveTool(ToolType.TERMS)} 
              className={`text-xs font-black uppercase tracking-widest transition-colors ${activeTool === ToolType.TERMS ? 'text-brand-dark underline' : 'text-gray-900 dark:text-white hover:text-brand-dark'}`}
            >
              Terms of Service
            </button>
          </div>

          <p className="text-gray-600 dark:text-gray-400 text-[11px] mt-8 uppercase tracking-[0.2em] font-black">Legal: Independent Tool • Not affiliated with Meta Platforms, Inc.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;