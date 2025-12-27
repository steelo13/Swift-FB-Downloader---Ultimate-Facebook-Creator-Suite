
import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-12 animate-in fade-in duration-500">
      <div className="text-center space-y-4">
        <h2 className="text-5xl font-black text-gray-950 dark:text-white tracking-tighter">Privacy Policy</h2>
        <p className="text-xl text-gray-800 dark:text-gray-200 font-bold">Your data privacy is our core mission.</p>
      </div>

      <div className="bg-white dark:bg-gray-900 p-8 md:p-12 rounded-[2.5rem] shadow-2xl border-2 border-gray-100 dark:border-gray-800 space-y-8">
        <section className="space-y-4">
          <h3 className="text-2xl font-black text-blue-600 dark:text-blue-400 uppercase tracking-tight">1. Zero Server Storage</h3>
          <p className="text-lg text-gray-950 dark:text-gray-100 font-bold leading-relaxed">
            Swift FB Downloader operates as a "Client-Side Only" utility. We do not store, log, or transmit any of the URLs, text, or media you process on our servers. All parsing and extraction happen directly within your browser's memory.
          </p>
        </section>

        <section className="space-y-4">
          <h3 className="text-2xl font-black text-blue-600 dark:text-blue-400 uppercase tracking-tight">2. Local Storage Usage</h3>
          <p className="text-lg text-gray-950 dark:text-gray-100 font-bold leading-relaxed">
            Certain features, such as the Content Planner, use your browser's <code className="bg-gray-100 dark:bg-gray-800 px-2 rounded">localStorage</code> to save your data between sessions. This data never leaves your device and is not accessible by us or any third party.
          </p>
        </section>

        <section className="space-y-4">
          <h3 className="text-2xl font-black text-blue-600 dark:text-blue-400 uppercase tracking-tight">3. No External APIs</h3>
          <p className="text-lg text-gray-950 dark:text-gray-100 font-bold leading-relaxed">
            We do not use the Facebook Graph API or any other social media APIs that require user authentication. Our tools rely on public content parsing, ensuring you never have to "Login" or share your account credentials with us.
          </p>
        </section>

        <section className="space-y-4">
          <h3 className="text-2xl font-black text-blue-600 dark:text-blue-400 uppercase tracking-tight">4. Browser Permissions</h3>
          <p className="text-lg text-gray-950 dark:text-gray-100 font-bold leading-relaxed">
            We do not request access to your microphone, camera, or location. Our tool only requires standard internet access to fetch the public media you specify for download.
          </p>
        </section>

        <div className="pt-8 border-t border-gray-100 dark:border-gray-800">
          <p className="text-sm text-gray-600 dark:text-gray-400 font-black uppercase tracking-widest">Last Updated: October 2023</p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
