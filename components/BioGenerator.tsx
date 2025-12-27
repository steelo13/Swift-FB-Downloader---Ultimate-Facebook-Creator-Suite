
import React, { useState } from 'react';
import { BIO_TEMPLATES } from '../constants';
import EmbedSection from './EmbedSection';

const BioGenerator: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(BIO_TEMPLATES[0].category);

  const currentCategory = BIO_TEMPLATES.find(c => c.category === activeCategory);

  const copyToClipboard = (val: string) => {
    navigator.clipboard.writeText(val);
    alert('Bio copied!');
  };

  return (
    <div className="max-w-4xl mx-auto space-y-12 animate-in fade-in duration-500">
      <div className="text-center space-y-4">
        <h2 className="text-5xl font-black text-gray-950 dark:text-white tracking-tighter">Facebook Bio Generator</h2>
        <p className="text-xl text-gray-800 dark:text-gray-200 font-bold max-w-2xl mx-auto">Professional templates for your Page About section or Profile Bio. Optimized for conversion.</p>
      </div>

      <div className="flex flex-wrap gap-3 justify-center">
        {BIO_TEMPLATES.map(cat => (
          <button
            key={cat.category}
            onClick={() => setActiveCategory(cat.category)}
            className={`px-8 py-3 rounded-full font-black transition-all text-sm uppercase tracking-widest border-2 ${
              activeCategory === cat.category 
              ? 'bg-blue-600 text-white border-blue-600 shadow-xl shadow-blue-200 dark:shadow-none' 
              : 'bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-200 border-gray-100 dark:border-gray-800 hover:border-blue-600 dark:hover:border-blue-500'
            }`}
          >
            {cat.category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {currentCategory?.templates.map((template, idx) => (
          <div key={idx} className="bg-white dark:bg-gray-900 p-8 rounded-[2.5rem] shadow-2xl border border-gray-100 dark:border-gray-800 flex flex-col hover:border-blue-600 transition-all">
            <pre className="flex-1 whitespace-pre-wrap text-gray-950 dark:text-white font-black text-md mb-8 leading-relaxed bg-gray-50 dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700">
              {template}
            </pre>
            <button
              onClick={() => copyToClipboard(template)}
              className="w-full bg-gray-950 dark:bg-blue-600 hover:bg-black dark:hover:bg-blue-700 text-white py-5 rounded-2xl font-black transition-all flex items-center justify-center gap-3 text-lg shadow-xl"
            >
              <span>📋</span> Copy Template
            </button>
          </div>
        ))}
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/30 border-2 border-blue-100 dark:border-blue-800 p-10 rounded-[2.5rem] text-center space-y-6">
        <h3 className="text-3xl font-black text-blue-900 dark:text-blue-100">Need a custom Bio?</h3>
        <p className="text-xl text-blue-800 dark:text-blue-200 font-bold">Simply fill in the [brackets] with your own details after copying!</p>
        <div className="flex flex-wrap gap-8 justify-center text-xs font-black text-blue-600 dark:text-blue-400 uppercase tracking-widest">
          <span className="flex items-center gap-2">✨ Emojis included</span>
          <span className="flex items-center gap-2">✨ Proven layout</span>
          <span className="flex items-center gap-2">✨ Space-optimized</span>
        </div>
      </div>

      <EmbedSection toolName="Facebook Bio Generator" />
    </div>
  );
};

export default BioGenerator;
