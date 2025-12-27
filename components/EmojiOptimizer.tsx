
import React, { useState } from 'react';
import EmbedSection from './EmbedSection';

const EMOJI_LIST = [
  '🔥', '🚀', '✨', '💎', '💡', '📈', '✅', '🎬', '🎥', '📸', '🌍', '📍', '💰', '💸', '🎁', '📅', '📩', '📥', '🔗', '👇', '👉', '⚠️', '🚨', '👀', '💯', '👏', '🙌', '🤝', '❤️', '🌟'
];

const EmojiOptimizer: React.FC = () => {
  const [text, setText] = useState('');

  const addEmoji = (emoji: string) => {
    setText(prev => prev + emoji);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(text);
    alert('Copied to clipboard!');
  };

  return (
    <div className="max-w-4xl mx-auto space-y-12 animate-in fade-in duration-500">
      <div className="text-center space-y-4">
        <h2 className="text-5xl font-black text-gray-950 dark:text-white tracking-tighter">Facebook Emoji Optimizer</h2>
        <p className="text-xl text-gray-800 dark:text-gray-200 font-bold max-w-2xl mx-auto">Quickly add high-engagement emojis to your captions. Drive engagement with visual cues.</p>
      </div>

      <div className="bg-white dark:bg-gray-900 p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-gray-100 dark:border-gray-800 transition-colors">
        <div className="space-y-10">
          <div className="space-y-4">
            <label className="block text-[11px] font-black text-gray-600 dark:text-gray-400 uppercase tracking-widest mb-2">Content Workspace</label>
            <textarea
              className="w-full p-8 bg-gray-50 dark:bg-gray-800 border-2 border-gray-100 dark:border-gray-700 rounded-[2rem] h-64 outline-none focus:border-blue-600 dark:focus:border-blue-500 text-xl font-bold text-gray-950 dark:text-white transition-all placeholder:text-gray-400"
              placeholder="Paste your post caption here..."
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>

          <div className="space-y-6">
            <h4 className="text-[11px] font-black text-gray-600 dark:text-gray-400 uppercase tracking-widest flex items-center gap-3">
              Popular Engagement Emojis
              <div className="flex-1 h-[1px] bg-gray-100 dark:bg-gray-800"></div>
            </h4>
            <div className="flex flex-wrap gap-4">
              {EMOJI_LIST.map(emoji => (
                <button
                  key={emoji}
                  onClick={() => addEmoji(emoji)}
                  className="w-14 h-14 flex items-center justify-center bg-gray-100 dark:bg-gray-800 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500 transition-all rounded-2xl text-2xl shadow-sm hover:shadow-xl hover:scale-110 active:scale-95 border-2 border-transparent"
                >
                  {emoji}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6">
            <button
              onClick={copyToClipboard}
              disabled={!text}
              className="flex-1 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-200 dark:disabled:bg-gray-800 text-white font-black py-5 rounded-2xl transition-all shadow-2xl shadow-blue-200 dark:shadow-none text-xl active:scale-95"
            >
              Copy Completed Caption 📋
            </button>
            <button
              onClick={() => setText('')}
              className="px-8 py-5 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 hover:bg-gray-300 dark:hover:bg-gray-600 rounded-2xl font-black uppercase tracking-widest text-sm transition-all"
            >
              Clear All
            </button>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-gray-900 p-8 rounded-[2rem] border-2 border-gray-50 dark:border-gray-800 shadow-lg flex items-center gap-6 group hover:border-blue-600 transition-all">
          <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/50 rounded-2xl flex items-center justify-center text-3xl group-hover:rotate-12 transition-transform">✅</div>
          <div className="space-y-1">
            <h5 className="font-black text-xl text-gray-950 dark:text-white leading-none">Visual Clarity</h5>
            <p className="text-md text-gray-800 dark:text-gray-300 font-bold">Break up large blocks of text with relevant emojis.</p>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-900 p-8 rounded-[2rem] border-2 border-gray-50 dark:border-gray-800 shadow-lg flex items-center gap-6 group hover:border-blue-600 transition-all">
          <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/50 rounded-2xl flex items-center justify-center text-3xl group-hover:rotate-12 transition-transform">🚀</div>
          <div className="space-y-1">
            <h5 className="font-black text-xl text-gray-950 dark:text-white leading-none">Emotional Hook</h5>
            <p className="text-md text-gray-800 dark:text-gray-300 font-bold">Use emojis to set the tone and mood of your message.</p>
          </div>
        </div>
      </div>

      <EmbedSection toolName="Facebook Emoji Optimizer" />
    </div>
  );
};

export default EmojiOptimizer;
