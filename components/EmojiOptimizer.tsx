
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
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold text-gray-900">Facebook Emoji Optimizer</h2>
        <p className="text-gray-600">Quickly add high-engagement emojis to your captions.</p>
      </div>

      <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
        <div className="space-y-6">
          <textarea
            className="w-full p-5 bg-gray-50 border border-gray-200 rounded-2xl h-48 outline-none focus:ring-2 focus:ring-blue-500 text-lg"
            placeholder="Paste your post caption here..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />

          <div className="space-y-3">
            <h4 className="text-xs font-bold text-gray-400 uppercase">Popular Emojis</h4>
            <div className="flex flex-wrap gap-2">
              {EMOJI_LIST.map(emoji => (
                <button
                  key={emoji}
                  onClick={() => addEmoji(emoji)}
                  className="w-10 h-10 flex items-center justify-center bg-gray-50 hover:bg-blue-50 hover:scale-110 transition-all rounded-lg text-xl"
                >
                  {emoji}
                </button>
              ))}
            </div>
          </div>

          <div className="flex gap-4">
            <button
              onClick={copyToClipboard}
              disabled={!text}
              className="flex-1 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-200 text-white font-bold py-4 rounded-xl transition-all"
            >
              Copy Completed Caption
            </button>
            <button
              onClick={() => setText('')}
              className="px-6 py-4 bg-gray-100 text-gray-500 hover:bg-gray-200 rounded-xl font-bold"
            >
              Clear
            </button>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-xl">✅</div>
          <div>
            <h5 className="font-bold text-gray-800">Visual Clarity</h5>
            <p className="text-xs text-gray-500">Break up large blocks of text with relevant emojis.</p>
          </div>
        </div>
        <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-xl">🚀</div>
          <div>
            <h5 className="font-bold text-gray-800">Emotional Hook</h5>
            <p className="text-xs text-gray-500">Use emojis to set the tone and mood of your message.</p>
          </div>
        </div>
      </div>

      <EmbedSection toolName="Facebook Emoji Optimizer" />
    </div>
  );
};

export default EmojiOptimizer;
