
import React, { useState } from 'react';
import EmbedSection from './EmbedSection';

const Downloader: React.FC = () => {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<null | { title: string; thumbnail: string }>(null);

  const handleFetch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!url) return;
    
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setResult({
        title: "Extracted Facebook Post Media Content (High Quality)",
        thumbnail: "https://picsum.photos/seed/fb/800/450"
      });
    }, 1200);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-10">
      <div className="text-center space-y-4">
        <div className="inline-block px-5 py-2 bg-brand/20 dark:bg-brand/10 text-brand-dark dark:text-brand rounded-full text-[11px] font-black uppercase tracking-widest mb-2 border border-brand/50 dark:border-brand/30">
          Professional Creator Suite
        </div>
        <h2 className="text-5xl md:text-6xl font-black text-gray-950 dark:text-white tracking-tighter leading-tight">
          Facebook Video Downloader <br/>
          <span className="text-brand-dark dark:text-brand drop-shadow-sm">HD / 4K / 8K</span>
        </h2>
        <p className="text-xl text-gray-800 dark:text-white max-w-2xl mx-auto font-bold leading-relaxed">
          The fastest way to download Reels, Stories, and High-Res Videos. No sign-up, no limits, just pure speed.
        </p>
      </div>

      <div className="bg-white dark:bg-gray-900 p-2 md:p-3 rounded-[2.5rem] shadow-2xl border border-brand/30 dark:border-gray-800">
        <div className="bg-white dark:bg-gray-900 p-6 md:p-10 rounded-[2.2rem] border border-gray-100 dark:border-gray-800">
          <form onSubmit={handleFetch} className="space-y-6">
            <div className="relative group">
              <input
                type="text"
                placeholder="Paste Facebook video/reel/post URL here..."
                className="w-full pl-6 pr-44 py-6 bg-gray-50 dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-2xl focus:bg-white dark:focus:bg-gray-800 focus:border-brand-dark dark:focus:border-brand outline-none transition-all text-gray-900 dark:text-white text-xl font-bold shadow-inner"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              />
              <button
                type="submit"
                disabled={loading || !url}
                className="absolute right-3 top-3 bottom-3 px-10 bg-brand-dark hover:bg-blue-800 disabled:bg-gray-300 dark:disabled:bg-gray-700 text-white font-black rounded-xl transition-all shadow-xl shadow-brand/20 dark:shadow-none active:scale-95 flex items-center gap-2 text-lg"
              >
                {loading ? (
                  <div className="w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  'Download'
                )}
              </button>
            </div>
            <div className="flex flex-wrap gap-4 text-[11px] font-black text-gray-800 dark:text-white justify-center tracking-widest">
              <span className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-xl border-2 border-transparent hover:border-brand transition-all cursor-pointer uppercase">Reels</span>
              <span className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-xl border-2 border-transparent hover:border-brand transition-all cursor-pointer uppercase">4K Quality</span>
              <span className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-xl border-2 border-transparent hover:border-brand transition-all cursor-pointer uppercase">Stories</span>
              <span className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-xl border-2 border-transparent hover:border-brand transition-all cursor-pointer uppercase">Public Groups</span>
            </div>
          </form>

          {result && (
            <div className="mt-12 animate-in zoom-in-95 fade-in duration-500">
              <div className="bg-gray-50 dark:bg-gray-800/50 rounded-[2.5rem] overflow-hidden border-2 border-brand/50 dark:border-brand/30 shadow-2xl">
                <div className="relative group overflow-hidden">
                  <img src={result.thumbnail} alt="Preview" className="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors"></div>
                  <div className="absolute top-6 left-6">
                    <span className="bg-brand-dark text-white text-xs font-black px-5 py-2 rounded-full shadow-2xl uppercase tracking-widest">Master Quality HD</span>
                  </div>
                </div>
                <div className="p-8 md:p-12 space-y-8 text-center">
                  <h3 className="font-black text-3xl text-gray-950 dark:text-white leading-tight">{result.title}</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <button className="group bg-brand-dark hover:bg-blue-800 text-white py-5 rounded-2xl font-black transition-all flex items-center justify-center gap-4 shadow-2xl shadow-blue-200 dark:shadow-none text-xl">
                      <span className="text-2xl">⬇️</span> Download Video
                    </button>
                    <button className="group bg-emerald-500 hover:bg-emerald-600 text-white py-5 rounded-2xl font-black transition-all flex items-center justify-center gap-4 shadow-2xl shadow-emerald-200 dark:shadow-none text-xl">
                      <span className="text-2xl">🔊</span> Extract MP3
                    </button>
                  </div>
                  <div className="flex items-center justify-center gap-12 pt-8 border-t border-gray-200 dark:border-gray-700">
                    <button className="text-sm font-black text-gray-800 dark:text-white hover:text-brand-dark transition-colors uppercase tracking-widest">Download Thumbnail</button>
                    <button className="text-sm font-black text-gray-800 dark:text-white hover:text-red-500 transition-colors uppercase tracking-widest" onClick={() => setResult(null)}>Cancel Extraction</button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
        {[
          { icon: '⚡', title: 'Turbo Extraction', desc: 'Directly parses Meta CDNs for lightning-fast high-bandwidth retrieval.' },
          { icon: '💎', title: '8K Ultra HD', desc: 'Maintains original source fidelity for maximum resolution content.' },
          { icon: '🛡️', title: 'Browser-Locked', desc: '100% private. Your links and media never touch our backend servers.' }
        ].map((item, i) => (
          <div key={i} className="bg-white dark:bg-gray-900 p-8 rounded-[2rem] border-2 border-gray-100 dark:border-gray-800 shadow-xl hover:border-brand transition-all group">
            <div className="w-14 h-14 bg-brand/20 dark:bg-brand/10 rounded-2xl flex items-center justify-center text-3xl mb-6 border border-brand/50 dark:border-brand/30 group-hover:rotate-12 transition-transform">{item.icon}</div>
            <h4 className="font-black text-xl text-gray-950 dark:text-white mb-3">{item.title}</h4>
            <p className="text-sm text-gray-800 dark:text-white font-bold leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

      <EmbedSection toolName="Facebook Video Downloader" />
    </div>
  );
};

export default Downloader;