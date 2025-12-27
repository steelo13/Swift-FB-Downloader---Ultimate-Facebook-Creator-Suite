
import React from 'react';

interface EmbedSectionProps {
  toolName: string;
}

const EmbedSection: React.FC<EmbedSectionProps> = ({ toolName }) => {
  const embedCode = `<!-- Swift FB Downloader - ${toolName} Widget -->
<div style="border: 2px solid #2563eb; border-radius: 24px; padding: 32px; font-family: 'Inter', sans-serif; text-align: center; background: #ffffff; box-shadow: 0 25px 50px -12px rgba(37, 99, 235, 0.25);">
  <h4 style="margin: 0 0 12px 0; color: #1e3a8a; font-size: 22px; font-weight: 900;">${toolName}</h4>
  <p style="margin: 0 0 24px 0; color: #111827; font-size: 16px; font-weight: 700;">Professional utility for Facebook creators.</p>
  <a href="https://swiftfbdownloader.com" style="background: #2563eb; color: #ffffff; padding: 14px 32px; border-radius: 12px; text-decoration: none; font-weight: 900; display: inline-block; box-shadow: 0 10px 15px -3px rgba(37, 99, 235, 0.3);">Try for Free on swiftfbdownloader.com</a>
</div>`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(embedCode);
    alert('Embed HTML copied! You can now paste this on your website.');
  };

  return (
    <div className="mt-20 pt-10 border-t-2 border-blue-100 dark:border-gray-800">
      <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md p-8 md:p-12 rounded-[2.5rem] border-2 border-blue-50 dark:border-gray-800 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="space-y-4 text-center md:text-left">
          <h4 className="text-lg font-black text-blue-900 dark:text-blue-100 uppercase tracking-[0.2em] flex items-center gap-3 justify-center md:justify-start">
            <span className="text-3xl">🌐</span> Embed This Utility
          </h4>
          <p className="text-md text-gray-900 dark:text-gray-100 font-bold max-w-md leading-relaxed">
            Enhance your own website or blog by embedding this tool. Provide value to your readers while keeping your brand associated with professional growth tools.
          </p>
        </div>
        <button 
          onClick={copyToClipboard}
          className="flex items-center gap-4 bg-blue-600 text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-blue-700 transition-all shadow-2xl shadow-blue-200 dark:shadow-none active:scale-95 whitespace-nowrap"
        >
          <span>&lt;/&gt;</span> Get Embed Code
        </button>
      </div>
      <div className="mt-8 flex justify-center">
        <a href="https://swiftfbdownloader.com" className="text-xs font-black text-gray-950 dark:text-gray-100 uppercase tracking-[0.4em] hover:text-blue-600 transition-colors bg-white dark:bg-gray-900 px-6 py-2 rounded-full border border-gray-200 dark:border-gray-800">
          Powered by swiftfbdownloader.com
        </a>
      </div>
    </div>
  );
};

export default EmbedSection;
