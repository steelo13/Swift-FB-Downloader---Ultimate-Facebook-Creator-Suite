
import React from 'react';
import { BioTemplate } from './types';

export const UNICODE_MAP: Record<string, string> = {
  a: '𝖺', b: '𝖻', c: '𝖼', d: '𝖽', e: '𝖾', f: '𝖿', g: '𝗀', h: '𝗁', i: '𝗂', j: '𝗃', k: '𝗄', l: '𝗅', m: '𝗆', n: '𝗇', o: '𝗈', p: '𝗉', q: '𝗊', r: '𝗋', s: '𝗌', t: '𝗍', u: '𝗎', v: '𝗏', w: '𝗐', x: '𝗑', y: '𝗒', z: '𝗓',
  A: '𝖠', B: '𝖡', C: '𝖢', D: '𝖣', E: '𝖤', F: '𝖥', G: '𝖦', H: '𝖧', I: '𝖨', J: '𝖩', K: '𝖪', L: '𝖫', M: '𝖬', N: '𝖭', O: '𝖮', P: '𝖯', Q: '𝖰', R: '𝖱', S: '𝖲', T: '𝖳', U: '𝖴', V: '𝖵', W: '𝗒', X: '𝖷', Y: '𝖸', Z: '𝖹'
};

export const BOLD_MAP: Record<string, string> = {
  a: '𝗮', b: '𝗯', c: '𝗰', d: '𝗱', e: '𝗲', f: '𝗳', g: '𝗴', h: '𝗵', i: '𝗶', j: '𝗷', k: '𝗸', l: '𝗹', m: '𝗺', n: '𝗻', o: '𝗼', p: '𝗽', q: '𝗾', r: '𝗿', s: '𝘀', t: '𝘁', u: '𝘂', v: '𝘃', w: '𝘄', x: '𝘅', y: '𝘆', z: '𝘇',
  A: '𝗔', B: '𝗕', C: '𝗖', D: '𝗗', E: '𝗘', F: '𝗙', G: '𝗚', H: '𝗛', I: '𝗜', J: '𝗝', K: '𝗞', L: '𝗟', M: '𝗠', N: '𝗡', O: '𝗢', P: '𝗣', Q: '𝗤', R: '𝗥', S: '𝗦', T: '𝗧', U: '𝗨', V: '𝗩', W: '𝗪', X: '𝗫', Y: '𝗬', Z: '𝗭'
};

export const BIO_TEMPLATES: BioTemplate[] = [
  {
    category: 'Business',
    templates: [
      "🚀 Helping [Target Audience] achieve [Goal]\n📍 Based in [City]\n👇 Work with us below",
      "Building the future of [Industry] 🛠️\nTop Rated Service Provider 🌟\nDM for collaborations 📥",
      "Helping you [Benefit] through [Service] 📈\n100+ Happy Clients ✅\nClick the link to learn more 🔗"
    ]
  },
  {
    category: 'Creator',
    templates: [
      "🎥 Daily Content on [Topic]\n✨ Lifestyle | Tech | Growth\nBusiness: [Email]",
      "Just a human sharing [Topic] 🌍\nNew Video Every [Day] 🎬\nJoin the community below! 👇",
      "Living life one [Hobby] at a time 🎨\nCreative Soul | Coffee Lover ☕\nCheck my latest reel! 📽️"
    ]
  },
  {
    category: 'Personal',
    templates: [
      "Explorer 🗺️ | Foodie 🍕 | Dreamer ✨\nLiving in [City] 🏙️",
      "Simple living in a complex world 🌿\nFamily & Friends First ❤️",
      "Here for a good time, not a long time 🥂\n[University/Job] 🎓"
    ]
  }
];
