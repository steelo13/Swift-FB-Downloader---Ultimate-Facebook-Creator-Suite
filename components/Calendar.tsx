
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
    <div className="max-w-5xl mx-auto space-y-8">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold text-gray-900">Lightweight Post Scheduler</h2>
        <p className="text-gray-600">Plan your Facebook & Instagram content visually. Data saved locally.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Planner Sidebar */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
            <h3 className="font-bold text-gray-800 mb-4">Add New Post</h3>
            <form onSubmit={handleAddPost} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase mb-1">Post Caption</label>
                <textarea
                  rows={4}
                  className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg text-sm outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Write your post content here..."
                  value={newPostText}
                  onChange={(e) => setNewPostText(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase mb-1">Schedule Date</label>
                <input
                  type="datetime-local"
                  className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg text-sm outline-none focus:ring-2 focus:ring-blue-500"
                  value={newPostDate}
                  onChange={(e) => setNewPostDate(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition-colors"
              >
                Add to Calendar
              </button>
            </form>
          </div>

          <div className="bg-blue-600 text-white p-6 rounded-2xl shadow-lg">
            <h4 className="font-bold mb-2">Pro Tip 💡</h4>
            <p className="text-sm opacity-90">
              The best time to post on Facebook is typically between 8 AM and 12 PM on Tuesdays, Wednesdays, and Thursdays.
            </p>
          </div>
        </div>

        {/* Calendar View / Feed */}
        <div className="lg:col-span-2 space-y-4">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 min-h-[400px]">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-bold text-gray-800">Upcoming Posts</h3>
              <span className="text-xs font-medium bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
                {posts.length} Posts Total
              </span>
            </div>

            {posts.length === 0 ? (
              <div className="h-64 flex flex-col items-center justify-center text-gray-400 space-y-4">
                <span className="text-5xl">📅</span>
                <p>No posts scheduled yet. Start planning!</p>
              </div>
            ) : (
              <div className="space-y-4">
                {posts.map((post) => (
                  <div key={post.id} className="group relative bg-gray-50 p-4 rounded-xl border border-gray-200 hover:border-blue-300 transition-all">
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-blue-600 text-lg">🔵</span>
                        <span className="text-xs font-bold text-gray-500">
                          {new Date(post.date).toLocaleString([], { dateStyle: 'medium', timeStyle: 'short' })}
                        </span>
                      </div>
                      <button 
                        onClick={() => deletePost(post.id)}
                        className="text-gray-300 hover:text-red-500 transition-colors"
                      >
                        ✕
                      </button>
                    </div>
                    <p className="text-sm text-gray-700 whitespace-pre-wrap">{post.text}</p>
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
