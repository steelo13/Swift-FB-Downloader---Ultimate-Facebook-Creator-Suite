
import React from 'react';

const TermsOfService: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-12 animate-in fade-in duration-500">
      <div className="text-center space-y-4">
        <h2 className="text-5xl font-black text-gray-950 dark:text-white tracking-tighter">Terms of Service</h2>
        <p className="text-xl text-gray-800 dark:text-gray-200 font-bold">Guidelines for using Swift FB Pro.</p>
      </div>

      <div className="bg-white dark:bg-gray-900 p-8 md:p-12 rounded-[2.5rem] shadow-2xl border-2 border-gray-100 dark:border-gray-800 space-y-8">
        <section className="space-y-4">
          <h3 className="text-2xl font-black text-blue-600 dark:text-blue-400 uppercase tracking-tight">1. Acceptable Use</h3>
          <p className="text-lg text-gray-950 dark:text-gray-100 font-bold leading-relaxed">
            Swift FB Downloader is intended for personal use and the management of content for which you have explicit rights. Do not use this tool to download copyrighted material without permission from the content owner.
          </p>
        </section>

        <section className="space-y-4">
          <h3 className="text-2xl font-black text-blue-600 dark:text-blue-400 uppercase tracking-tight">2. Disclaimer of Warranty</h3>
          <p className="text-lg text-gray-950 dark:text-gray-100 font-bold leading-relaxed">
            This tool is provided "as is" without warranty of any kind. Since platform structures change frequently, we cannot guarantee 100% uptime or compatibility with all Facebook post types at all times.
          </p>
        </section>

        <section className="space-y-4">
          <h3 className="text-2xl font-black text-blue-600 dark:text-blue-400 uppercase tracking-tight">3. Limitation of Liability</h3>
          <p className="text-lg text-gray-950 dark:text-gray-100 font-bold leading-relaxed">
            Swift FB Downloader is not responsible for any account actions taken by Facebook (Meta) against users who utilize third-party tools. Use our utilities responsibly and within the community guidelines of the host platform.
          </p>
        </section>

        <section className="space-y-4">
          <h3 className="text-2xl font-black text-blue-600 dark:text-blue-400 uppercase tracking-tight">4. Intellectual Property</h3>
          <p className="text-lg text-gray-950 dark:text-gray-100 font-bold leading-relaxed">
            All tool logic, custom icons, and UI components are the property of Swift FB Downloader. Users are permitted to embed the widgets as provided in the "Embed Code" section for back-linking purposes.
          </p>
        </section>

        <div className="pt-8 border-t border-gray-100 dark:border-gray-800">
          <p className="text-sm text-gray-600 dark:text-gray-400 font-black uppercase tracking-widest">Last Updated: October 2023</p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
