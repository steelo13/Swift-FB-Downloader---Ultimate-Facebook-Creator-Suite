
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
    <div className="max-w-4xl mx-auto space-y-10 animate-in fade-in duration-500">
      <div className="text-center space-y-4">
        <h2 className="text-5xl font-black text-gray-950 dark:text-white tracking-tighter">Facebook Text Styler</h2>
        <p className="text-xl text-gray-800 dark:text-gray-200 font-bold max-w-2xl mx-auto">Create bold or stylized text for your Facebook posts that grabs attention. 100% platform compatible.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="bg-white dark:bg-gray-900 p-8 rounded-[2.5rem] shadow-2xl border border-gray-100 dark:border-gray-800">
          <label className="block text-[11px] font-black text-gray-600 dark:text-gray-300 uppercase tracking-widest mb-4">Input Message</label>
          <textarea
            className="w-full p-6 bg-gray-50 dark:bg-gray-800 border-2 border-gray-100 dark:border-gray-700 rounded-3xl outline-none focus:border-blue-600 dark:focus:border-blue-500 h-72 text-xl font-bold text-gray-950 dark:text-white transition-all placeholder:text-gray-400"
            placeholder="Type your message here..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <div className="mt-6 flex gap-4">
            <button 
              onClick={() => setText('')}
              className="px-6 py-3 text-xs font-black text-gray-600 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400 uppercase tracking-widest transition-colors"
            >
              Clear Workspace
            </button>
          </div>
        </div>

        <div className="space-y-6">
          {results.map((res, i) => (
            <div key={i} className="bg-white dark:bg-gray-900 p-6 rounded-2xl border-2 border-gray-50 dark:border-gray-800 hover:border-blue-600 dark:hover:border-blue-400 transition-all shadow-lg">
              <div className="flex justify-between items-center mb-4">
                <span className="text-[11px] font-black text-gray-600 dark:text-gray-400 uppercase tracking-widest">{res.label}</span>
                <button 
                  disabled={!text}
                  onClick={() => copyToClipboard(res.value)}
                  className="bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 px-4 py-1.5 rounded-lg text-[11px] font-black uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all disabled:opacity-30 border border-blue-100 dark:border-blue-800"
                >
                  Copy
                </button>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-xl min-h-[60px] break-words text-xl font-bold text-gray-950 dark:text-white leading-relaxed">
                {res.value || <span className="text-gray-300 dark:text-gray-600 italic font-medium">Preview results...</span>}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-amber-50 dark:bg-amber-900/30 border-2 border-amber-100 dark:border-amber-800 p-8 rounded-[2.5rem] transition-colors">
        <h4 className="font-black text-xl text-amber-900 dark:text-amber-200 mb-4 flex items-center gap-3">
          <span className="text-2xl">📈</span> Why use stylized text?
        </h4>
        <p className="text-lg text-amber-800 dark:text-amber-100 font-bold leading-relaxed">
          Standard Facebook posts don't support Markdown. Using special Unicode characters allows you to use 
          <b> bold</b> or <i>italic</i> styles to highlight your call-to-actions, hooks, or key information. 
          This bypasses platform limitations and significantly boosts stop-power in the feed.
        </p>
      </div>

      <EmbedSection toolName="Facebook Text Styler" />
    </div>
  );
};

export default TextStyler;
