
export enum ToolType {
  DOWNLOADER = 'DOWNLOADER',
  CALENDAR = 'CALENDAR',
  STYLER = 'STYLER',
  BIO_GEN = 'BIO_GEN',
  EMOJI = 'EMOJI',
  PREMIUM = 'PREMIUM',
  PRIVACY = 'PRIVACY',
  TERMS = 'TERMS'
}

export interface ScheduledPost {
  id: string;
  text: string;
  date: string;
  platform: 'facebook' | 'instagram';
}

export interface BioTemplate {
  category: string;
  templates: string[];
}
