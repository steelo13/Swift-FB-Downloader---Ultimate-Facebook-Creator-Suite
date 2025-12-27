
import React, { useState } from 'react';
import { UNICODE_MAP, BOLD_MAP } from '../constants';
import EmbedSection from './EmbedSection';

const TextStyler: React.FC = () => {
  const [text, setText] = useState('');
  
  const transform = (input: string, map: Record<string, string>) => {
    return input.split('').map(char => map[char] || char).join('');
  };

  const copyToClipboard = (val: string) => {
    navigator.clipboard.writeText(val);
    alert('Copied to clipboard!');
  };

  const results = [
    { label: 'Normal', value: text },
    { label: 'Bold Sans', value: transform(text, BOLD_MAP) },
    { label: 'Normal Sans', value: transform(text, UNICODE_MAP) },
    { label: 'Italic (Pseudo)', value: text.split('').map(c => c + '\u0332').join('') }
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold text-gray-900">Facebook Text Styler</h2>
        <p className="text-gray-600">Create bold or stylized text for your Facebook posts that grabs attention.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
          <label className="block text-sm font-bold text-gray-700 mb-2">Your Text</label>
          <textarea
            className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 h-64 text-lg"
            placeholder="Type your message here..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <div className="mt-4 flex gap-2">
            <button 
              onClick={() => setText('')}
              className="px-4 py-2 text-sm text-gray-500 hover:text-gray-800"
            >
              Clear
            </button>
          </div>
        </div>

        <div className="space-y-4">
          {results.map((res, i) => (
            <div key={i} className="bg-white p-4 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">{res.label}</span>
                <button 
                  disabled={!text}
                  onClick={() => copyToClipboard(res.value)}
                  className="text-blue-600 text-xs font-bold hover:underline disabled:opacity-30"
                >
                  COPY
                </button>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg min-h-[50px] break-words text-gray-800">
                {res.value || 'Preview will appear here...'}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-yellow-50 border border-yellow-100 p-6 rounded-2xl">
        <h4 className="font-bold text-yellow-800 mb-2">Why use stylized text? 📈</h4>
        <p className="text-sm text-yellow-700 opacity-90">
          Standard Facebook posts don't support Markdown. Using special Unicode characters allows you to use 
          <b> bold</b> or <i>italic</i> styles to highlight your call-to-actions, hooks, or key information. 
          This is a proven way to increase engagement!
        </p>
      </div>

      <EmbedSection toolName="Facebook Text Styler" />
    </div>
  );
};

export default TextStyler;
