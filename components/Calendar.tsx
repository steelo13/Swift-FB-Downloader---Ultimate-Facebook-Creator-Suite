
import React, { useState, useEffect } from 'react';
import { ScheduledPost } from '../types';
import EmbedSection from './EmbedSection';

const Calendar: React.FC = () => {
  const [posts, setPosts] = useState<ScheduledPost[]>([]);
  const [newPostText, setNewPostText] = useState('');
  const [newPostDate, setNewPostDate] = useState('');

  useEffect(() => {
    const saved = localStorage.getItem('fb_posts');
    if (saved) setPosts(JSON.parse(saved));
  }, []);

  const handleAddPost = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPostText || !newPostDate) return;

    const newPost: ScheduledPost = {
      id: Date.now().toString(),
      text: newPostText,
      date: newPostDate,
      platform: 'facebook'
    };

    const updated = [...posts, newPost].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    setPosts(updated);
    localStorage.setItem('fb_posts', JSON.stringify(updated));
    setNewPostText('');
    setNewPostDate('');
  };

  const deletePost = (id: string) => {
    const updated = posts.filter(p => p.id !== id);
    setPosts(updated);
    localStorage.setItem('fb_posts', JSON.stringify(updated));
  };

  return (
    <div className="max-w-5xl mx-auto space-y-8 animate-in fade-in duration-500">
      <div className="text-center space-y-2">
        <h2 className="text-4xl font-black text-gray-950 dark:text-white tracking-tight">Lightweight Post Scheduler</h2>
        <p className="text-lg text-gray-800 dark:text-gray-200 font-bold">Plan your Facebook & Instagram content visually. Data saved locally.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Planner Sidebar */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800 transition-colors">
            <h3 className="font-black text-xl text-gray-950 dark:text-white mb-6">Add New Post</h3>
            <form onSubmit={handleAddPost} className="space-y-6">
              <div>
                <label className="block text-[11px] font-black text-gray-600 dark:text-gray-300 uppercase tracking-widest mb-2">Post Caption</label>
                <textarea
                  rows={4}
                  className="w-full p-4 bg-gray-50 dark:bg-gray-800 border-2 border-gray-100 dark:border-gray-700 rounded-xl text-md font-bold text-gray-950 dark:text-white outline-none focus:border-blue-600 dark:focus:border-blue-500 transition-all"
                  placeholder="Write your post content here..."
                  value={newPostText}
                  onChange={(e) => setNewPostText(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-[11px] font-black text-gray-600 dark:text-gray-300 uppercase tracking-widest mb-2">Schedule Date</label>
                <input
                  type="datetime-local"
                  className="w-full p-4 bg-gray-50 dark:bg-gray-800 border-2 border-gray-100 dark:border-gray-700 rounded-xl text-md font-bold text-gray-950 dark:text-white outline-none focus:border-blue-600 dark:focus:border-blue-500 transition-all"
                  value={newPostDate}
                  onChange={(e) => setNewPostDate(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-black py-4 rounded-xl shadow-xl shadow-blue-200 dark:shadow-none transition-all active:scale-95 text-lg"
              >
                Add to Calendar 📅
              </button>
            </form>
          </div>

          <div className="bg-blue-600 dark:bg-blue-700 text-white p-6 rounded-2xl shadow-2xl transition-colors">
            <h4 className="font-black text-lg mb-3 flex items-center gap-2">Pro Tip 💡</h4>
            <p className="text-md font-bold leading-relaxed">
              The best time to post on Facebook is typically between 8 AM and 12 PM on Tuesdays, Wednesdays, and Thursdays.
            </p>
          </div>
        </div>

        {/* Calendar View / Feed */}
        <div className="lg:col-span-2 space-y-4">
          <div className="bg-white dark:bg-gray-900 p-8 rounded-[2.5rem] shadow-xl border border-gray-100 dark:border-gray-800 min-h-[500px] transition-colors">
            <div className="flex items-center justify-between mb-8">
              <h3 className="font-black text-2xl text-gray-950 dark:text-white">Upcoming Posts</h3>
              <span className="text-xs font-black bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 px-4 py-2 rounded-full uppercase tracking-widest border border-blue-200 dark:border-blue-800">
                {posts.length} Total
              </span>
            </div>

            {posts.length === 0 ? (
              <div className="h-64 flex flex-col items-center justify-center text-gray-400 dark:text-gray-600 space-y-4">
                <span className="text-6xl grayscale opacity-50">📅</span>
                <p className="font-black uppercase tracking-[0.3em] text-[11px]">No posts scheduled yet. Start planning!</p>
              </div>
            ) : (
              <div className="space-y-6">
                {posts.map((post) => (
                  <div key={post.id} className="group relative bg-gray-50 dark:bg-gray-800 p-6 rounded-2xl border-2 border-transparent hover:border-blue-600 dark:hover:border-blue-400 transition-all shadow-sm hover:shadow-xl">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center gap-3">
                        <span className="text-blue-600 dark:text-blue-400 text-xl">🔵</span>
                        <span className="text-sm font-black text-gray-800 dark:text-gray-200 uppercase tracking-widest">
                          {new Date(post.date).toLocaleString([], { dateStyle: 'medium', timeStyle: 'short' })}
                        </span>
                      </div>
                      <button 
                        onClick={() => deletePost(post.id)}
                        className="text-gray-400 hover:text-red-500 dark:hover:text-red-400 transition-colors p-2"
                        title="Delete Post"
                      >
                        <span className="text-lg">✕</span>
                      </button>
                    </div>
                    <p className="text-lg text-gray-950 dark:text-white font-bold whitespace-pre-wrap leading-relaxed">{post.text}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <EmbedSection toolName="Facebook Content Planner" />
    </div>
  );
};

export default Calendar;
