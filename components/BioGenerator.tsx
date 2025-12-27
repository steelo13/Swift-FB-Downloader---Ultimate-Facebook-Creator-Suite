
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
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold text-gray-900">Facebook Bio Generator</h2>
        <p className="text-gray-600">Professional templates for your Page About section or Profile Bio.</p>
      </div>

      <div className="flex flex-wrap gap-2 justify-center">
        {BIO_TEMPLATES.map(cat => (
          <button
            key={cat.category}
            onClick={() => setActiveCategory(cat.category)}
            className={`px-6 py-2 rounded-full font-semibold transition-all ${
              activeCategory === cat.category 
              ? 'bg-blue-600 text-white shadow-lg shadow-blue-200' 
              : 'bg-white text-gray-600 border border-gray-200 hover:border-blue-300'
            }`}
          >
            {cat.category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {currentCategory?.templates.map((template, idx) => (
          <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 flex flex-col">
            <pre className="flex-1 whitespace-pre-wrap text-gray-700 font-sans text-sm mb-6 leading-relaxed bg-gray-50 p-4 rounded-xl">
              {template}
            </pre>
            <button
              onClick={() => copyToClipboard(template)}
              className="w-full bg-gray-900 hover:bg-black text-white py-3 rounded-xl font-bold transition-all flex items-center justify-center gap-2"
            >
              📋 Copy Template
            </button>
          </div>
        ))}
      </div>

      <div className="bg-blue-50 border border-blue-100 p-8 rounded-3xl text-center">
        <h3 className="text-xl font-bold text-blue-900 mb-2">Need a custom Bio?</h3>
        <p className="text-blue-700 mb-6">Simply fill in the [brackets] with your own details after copying!</p>
        <div className="flex flex-wrap gap-4 justify-center text-sm font-bold text-blue-400">
          <span>✨ Emojis included</span>
          <span>✨ Proven layout</span>
          <span>✨ Space-optimized</span>
        </div>
      </div>

      <EmbedSection toolName="Facebook Bio Generator" />
    </div>
  );
};

export default BioGenerator;
