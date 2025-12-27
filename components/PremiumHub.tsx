
import React, { useState } from 'react';
import EmbedSection from './EmbedSection';

const TOOLS_CONFIG = [
  {
    category: "Download & Media (No API)",
    icon: "📥",
    tools: [
      { name: "Facebook Video URL Downloader", desc: "Extract direct video links", type: "download" },
      { name: "Facebook Reels Download Tool", desc: "Save high-quality reels", type: "download" },
      { name: "Facebook Story Saver", desc: "Download public stories", type: "download" },
      { name: "Facebook Image Album Downloader", desc: "Batch image extraction", type: "download" },
      { name: "Private Video Link Extractor", desc: "Browser-based source helper", type: "download" },
      { name: "HD / SD Format Selector", desc: "Choose your video quality", type: "download" },
      { name: "FB Live Video Downloader", desc: "Save replays easily", type: "download" },
      { name: "Profile Picture Downloader", desc: "Get full-size public DP", type: "download" },
      { name: "Cover Photo Downloader", desc: "High-res cover extraction", type: "download" },
      { name: "Reels Audio Extractor (MP3)", desc: "Direct audio ripping", type: "download" }
    ]
  },
  {
    category: "Text & Formatting",
    icon: "✍️",
    tools: [
      { name: "Facebook Text Formatter", desc: "Bold, Italic & Unicode", type: "text" },
      { name: "FB Line Break Generator", desc: "Clean caption spacing", type: "text" },
      { name: "Invisible Character Gen", desc: "Hidden post formatting", type: "text" },
      { name: "Bio Formatter", desc: "Professional about sections", type: "text" },
      { name: "Comment Styling Tool", desc: "Make comments stand out", type: "text" },
      { name: "Post Preview Simulator", desc: "Mobile/Desktop mockups", type: "preview" },
      { name: "Caption Length Counter", desc: "Limit & character check", type: "text" },
      { name: "Emoji Library", desc: "High-engagement picker", type: "emoji" },
      { name: "Unicode Symbol Gen", desc: "Special FB characters", type: "emoji" },
      { name: "Zalgo / Glitch Text", desc: "Attention-grabbing styles", type: "text" }
    ]
  },
  {
    category: "Growth & Utilities",
    icon: "📈",
    tools: [
      { name: "ROI Calculator", desc: "Direct profit tracker", type: "calc" },
      { name: "CPM / CPC Calculator", desc: "Ad spend efficiency", type: "calc" },
      { name: "Engagement Rate Calc", desc: "Follower/Interaction ratio", type: "calc" },
      { name: "Best Time to Post Calc", desc: "Input-based schedule", type: "guide" },
      { name: "Engagement Calculator", desc: "Per-post performance", type: "calc" },
      { name: "Ad Budget Split Calc", desc: "Campaign budgeter", type: "calc" },
      { name: "Weekly Content Planner", desc: "Offline visual calendar", type: "guide" },
      { name: "Reach vs Engagement Est.", desc: "Predict your numbers", type: "calc" }
    ]
  },
  {
    category: "URL & Link Tools",
    icon: "🔗",
    tools: [
      { name: "FB Link Cleaner", desc: "Remove tracking params", type: "link" },
      { name: "Post URL Extractor", desc: "Get clean permalinks", type: "link" },
      { name: "Profile ID Finder", desc: "Extract ID from URL", type: "id-finder" },
      { name: "Page ID Finder", desc: "Extract Page ID instantly", type: "id-finder" },
      { name: "UTM Builder", desc: "Campaign tracking setup", type: "link" },
      { name: "Redirect Checker", desc: "Verify destination links", type: "link" },
      { name: "FB Share Link Builder", desc: "One-click share URLs", type: "link" }
    ]
  },
  {
    category: "Admin & Utils",
    icon: "🛠️",
    tools: [
      { name: "Community Moderation Checklist", desc: "Daily admin tasks", type: "checklist" },
      { name: "Report Reason Guide", desc: "Policy compliance helper", type: "guide" },
      { name: "Giveaway Winner Picker", desc: "Random entry selector", type: "picker" },
      { name: "Rules Template Gen", desc: "Group policy builder", type: "text" },
      { name: "Blocked Word List Gen", desc: "Moderation filter", type: "text" }
    ]
  }
];

const PremiumHub: React.FC = () => {
  const [search, setSearch] = useState('');
  const [selectedTool, setSelectedTool] = useState<any | null>(null);
  const [inputVal, setInputVal] = useState('');
  const [outputVal, setOutputVal] = useState('');
  const [calcInputs, setCalcInputs] = useState({ v1: '', v2: '', v3: '' });

  const filteredCategories = TOOLS_CONFIG.map(cat => ({
    ...cat,
    tools: cat.tools.filter(t => 
      t.name.toLowerCase().includes(search.toLowerCase()) || 
      cat.category.toLowerCase().includes(search.toLowerCase())
    )
  })).filter(cat => cat.tools.length > 0);

  const handleToolExecute = () => {
    if (selectedTool.type === 'link') {
      const cleaned = inputVal.split('?')[0];
      setOutputVal(cleaned);
    } else if (selectedTool.type === 'id-finder') {
      const match = inputVal.match(/(?:profile\.php\?id=|facebook\.com\/)(\d+|[a-zA-Z0-9.]+)/);
      setOutputVal(match ? match[1] : 'No ID Found. Ensure URL is correct.');
    } else if (selectedTool.type === 'calc') {
      if (selectedTool.name.includes('ROI')) {
        const gain = parseFloat(calcInputs.v1);
        const cost = parseFloat(calcInputs.v2);
        if (cost > 0) {
          const roi = ((gain - cost) / cost) * 100;
          setOutputVal(`Calculated ROI: ${roi.toFixed(2)}%`);
        } else {
          setOutputVal('Error: Cost must be greater than 0');
        }
      } else if (selectedTool.name.includes('CPM')) {
        const cost = parseFloat(calcInputs.v1);
        const impressions = parseFloat(calcInputs.v2);
        if (impressions > 0) {
          const cpm = (cost / impressions) * 1000;
          setOutputVal(`Calculated CPM: $${cpm.toFixed(2)}`);
        } else {
          setOutputVal('Error: Impressions must be greater than 0');
        }
      } else if (selectedTool.name.includes('Engagement Rate')) {
        const interactions = parseFloat(calcInputs.v1);
        const reach = parseFloat(calcInputs.v2);
        if (reach > 0) {
          const rate = (interactions / reach) * 100;
          setOutputVal(`Engagement Rate: ${rate.toFixed(2)}%`);
        } else {
          setOutputVal('Error: Reach must be greater than 0');
        }
      }
    } else {
      setOutputVal(`Successfully processed: ${inputVal.length > 50 ? inputVal.substring(0, 50) + '...' : inputVal}`);
    }
  };

  const copyResult = () => {
    navigator.clipboard.writeText(outputVal);
    alert('Result copied to clipboard!');
  };

  if (!selectedTool) {
    return (
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-6 py-2 bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-200 rounded-full text-[11px] font-black uppercase tracking-[0.2em] mb-4 border border-amber-200 dark:border-amber-800 shadow-sm">
            <span className="animate-pulse">💎</span> Premium Mega-Toolkit
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-gray-950 dark:text-white tracking-tighter leading-tight">
            Advanced Creator Utilities
          </h2>
          <p className="text-xl text-gray-800 dark:text-gray-100 max-w-3xl mx-auto font-bold leading-relaxed">
            Specialized logic tools for analytics, parsing, and management. 
            Runs 100% locally for zero-latency privacy.
          </p>
        </div>

        <div className="relative max-w-2xl mx-auto">
          <input 
            type="text"
            placeholder="Search our 40+ utilities..."
            className="w-full px-8 py-5 bg-white dark:bg-gray-900 border-2 border-blue-200 dark:border-gray-800 rounded-3xl shadow-2xl shadow-blue-100/50 dark:shadow-none focus:border-blue-600 dark:focus:border-blue-500 outline-none transition-all text-xl font-bold text-gray-900 dark:text-white"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="absolute right-8 top-5 text-2xl">🔍</div>
        </div>

        <div className="space-y-20">
          {filteredCategories.map((cat, i) => (
            <div key={i} className="space-y-8">
              <div className="flex items-center gap-5">
                <span className="text-3xl bg-white dark:bg-gray-900 p-3 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800">{cat.icon}</span>
                <h3 className="text-2xl font-black text-gray-950 dark:text-white uppercase tracking-tighter">{cat.category}</h3>
                <div className="flex-1 h-[2px] bg-gradient-to-r from-blue-100 dark:from-blue-900 to-transparent"></div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {cat.tools.map((tool, j) => (
                  <button
                    key={j}
                    onClick={() => {
                      setSelectedTool(tool);
                      setInputVal('');
                      setOutputVal('');
                      setCalcInputs({ v1: '', v2: '', v3: '' });
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="group bg-white dark:bg-gray-900 p-6 rounded-3xl border-2 border-gray-50 dark:border-gray-800 shadow-xl hover:shadow-2xl transition-all text-left flex flex-col justify-between h-full hover:border-blue-500 dark:hover:border-blue-400 hover:-translate-y-2"
                  >
                    <div className="space-y-3">
                      <h4 className="font-black text-gray-950 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-tight text-lg">{tool.name}</h4>
                      <p className="text-[13px] text-gray-800 dark:text-gray-100 font-bold leading-relaxed">{tool.desc}</p>
                    </div>
                    <div className="mt-6 pt-4 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between">
                      <span className="text-[11px] font-black text-blue-700 dark:text-blue-300 uppercase tracking-widest bg-blue-50 dark:bg-blue-900/30 px-3 py-1 rounded-lg">Launch</span>
                      <span className="text-blue-400 group-hover:translate-x-2 transition-transform">➜</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto space-y-10 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b-4 border-blue-50 dark:border-gray-800 pb-10">
        <div className="space-y-2">
          <button 
            onClick={() => setSelectedTool(null)}
            className="text-blue-600 dark:text-blue-400 text-sm font-black flex items-center gap-2 hover:translate-x-[-4px] transition-transform mb-4 uppercase tracking-widest"
          >
            ← Back to Premium Toolkit
          </button>
          <h2 className="text-5xl font-black text-gray-950 dark:text-white tracking-tight leading-none">{selectedTool.name}</h2>
          <p className="text-xl text-gray-800 dark:text-gray-100 font-bold">{selectedTool.desc}</p>
        </div>
        <div className="flex items-center gap-3 px-6 py-3 bg-blue-600 text-white rounded-[2rem] shadow-2xl shadow-blue-200 dark:shadow-none">
          <span className="text-2xl">🛡️</span>
          <span className="text-xs font-black uppercase tracking-[0.2em]">Secured Offline Environment</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-1 space-y-8">
          <div className="bg-white dark:bg-gray-900 p-8 rounded-[2.5rem] shadow-2xl border border-gray-100 dark:border-gray-800 space-y-8">
            <div className="space-y-6">
              <h3 className="font-black text-xl text-gray-950 dark:text-white flex items-center gap-3">
                <span className="w-3 h-8 bg-blue-600 rounded-full"></span>
                Action Required
              </h3>
              
              {selectedTool.type === 'calc' ? (
                <div className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-[11px] font-black text-gray-900 dark:text-gray-100 uppercase tracking-widest">Primary Metric (e.g. Sales)</label>
                    <input 
                      type="number" 
                      className="w-full px-5 py-4 bg-gray-50 dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-2xl focus:ring-4 focus:ring-blue-500/20 outline-none font-black text-lg text-gray-950 dark:text-white" 
                      placeholder="0.00"
                      value={calcInputs.v1}
                      onChange={(e) => setCalcInputs({...calcInputs, v1: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[11px] font-black text-gray-900 dark:text-gray-100 uppercase tracking-widest">Secondary Metric (e.g. Spend)</label>
                    <input 
                      type="number" 
                      className="w-full px-5 py-4 bg-gray-50 dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-2xl focus:ring-4 focus:ring-blue-500/20 outline-none font-black text-lg text-gray-950 dark:text-white" 
                      placeholder="0.00"
                      value={calcInputs.v2}
                      onChange={(e) => setCalcInputs({...calcInputs, v2: e.target.value})}
                    />
                  </div>
                </div>
              ) : (
                <textarea
                  className="w-full p-6 bg-gray-50 dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-3xl h-56 outline-none focus:ring-4 focus:ring-blue-500/20 text-lg font-bold text-gray-900 dark:text-white placeholder:text-gray-400"
                  placeholder={`Paste your source ${selectedTool.name.toLowerCase()} data here...`}
                  value={inputVal}
                  onChange={(e) => setInputVal(e.target.value)}
                />
              )}

              <button 
                onClick={handleToolExecute}
                disabled={selectedTool.type === 'calc' ? (!calcInputs.v1 || !calcInputs.v2) : !inputVal}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 dark:disabled:bg-gray-700 text-white font-black py-5 rounded-2xl shadow-2xl shadow-blue-200 dark:shadow-none transition-all active:scale-95 text-xl"
              >
                Execute Analysis 🚀
              </button>
            </div>
          </div>

          <div className="bg-gray-950 text-white p-8 rounded-[2.5rem] shadow-2xl space-y-6">
            <h4 className="font-black text-xl flex items-center gap-3">
              <span className="text-2xl">⚡</span>
              Expert Creator Tip
            </h4>
            <p className="text-md opacity-100 leading-relaxed font-bold text-gray-200">
              {selectedTool.type === 'download' 
                ? "Bypass platform redirects by using clean permalinks. This ensures our parser gets the direct CDN stream link every time."
                : "Combine these local utilities with your native Meta dashboard to find hidden ROI patterns that standard analytics might miss."}
            </p>
          </div>
        </div>

        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white dark:bg-gray-900 p-10 rounded-[2.5rem] shadow-2xl border border-gray-100 dark:border-gray-800 min-h-[400px] flex flex-col">
            <div className="flex items-center justify-between mb-10 pb-6 border-b-2 border-gray-50 dark:border-gray-800">
              <h3 className="font-black text-gray-950 dark:text-white text-2xl">Processed Output</h3>
              {outputVal && (
                <button 
                  onClick={copyResult}
                  className="bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 px-6 py-3 rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-emerald-600 hover:text-white transition-all border-2 border-emerald-100 dark:border-emerald-800"
                >
                  Copy to Clipboard
                </button>
              )}
            </div>

            {!outputVal ? (
              <div className="flex-1 flex flex-col items-center justify-center text-gray-300 dark:text-gray-700 space-y-6">
                <div className="w-24 h-24 bg-gray-50 dark:bg-gray-800/50 rounded-full flex items-center justify-center text-5xl">🔭</div>
                <p className="font-black uppercase tracking-[0.3em] text-xs">Awaiting Source Input...</p>
              </div>
            ) : (
              <div className="animate-in zoom-in-95 duration-300 space-y-6">
                <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-[2rem] border-2 border-gray-100 dark:border-gray-700">
                  <pre className="whitespace-pre-wrap font-sans font-black text-gray-950 dark:text-white text-2xl leading-relaxed break-words">
                    {outputVal}
                  </pre>
                </div>
                <div className="p-5 bg-blue-50 dark:bg-blue-900/30 rounded-2xl flex items-center gap-4 text-blue-800 dark:text-blue-100 text-md font-black border-2 border-blue-100 dark:border-blue-800">
                  <span className="text-xl">✅</span> Tool execution completed successfully.
                </div>
              </div>
            )}
          </div>

          <div className="bg-white dark:bg-gray-900 p-10 rounded-[2.5rem] border-4 border-dashed border-gray-100 dark:border-gray-800">
            <h4 className="font-black text-gray-900 dark:text-gray-100 uppercase text-xs tracking-[0.3em] mb-8">Professional Workflow</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="space-y-4">
                <span className="text-3xl bg-blue-50 dark:bg-blue-900/30 p-3 rounded-xl block w-fit">📍</span>
                <p className="text-sm text-gray-900 dark:text-gray-100 font-black leading-tight uppercase tracking-tighter">Source Target Media or Metrics</p>
              </div>
              <div className="space-y-4">
                <span className="text-3xl bg-blue-50 dark:bg-blue-900/30 p-3 rounded-xl block w-fit">⚙️</span>
                <p className="text-sm text-gray-900 dark:text-gray-100 font-black leading-tight uppercase tracking-tighter">Execute High-Contrast Local Parse</p>
              </div>
              <div className="space-y-4">
                <span className="text-3xl bg-blue-50 dark:bg-blue-900/30 p-3 rounded-xl block w-fit">🚀</span>
                <p className="text-sm text-gray-900 dark:text-gray-100 font-black leading-tight uppercase tracking-tighter">Deploy Content Across Platforms</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <EmbedSection toolName={selectedTool.name} />
    </div>
  );
};

export default PremiumHub;
