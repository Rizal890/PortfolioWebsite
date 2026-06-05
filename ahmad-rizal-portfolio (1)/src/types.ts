export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  metrics: { label: string; value: string }[];
  tags: string[];
  image: string;
  videoUrl?: string;
  images?: string[];
  videoUrls?: string[];
  details: string[];
  achievements: string[];
}

export interface Publication {
  title: string;
  authors: string;
  venue: string;
  year: string;
  doi?: string;
  abstract: string;
  highlights: string[];
  pdfUrl: string;
  citation: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
  bullets: string[];
  skills: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  gpa: string;
  details: string[];
  lab: string;
  period: string;
}

export interface Organization {
  role: string;
  name: string;
  location: string;
  period: string;
  bullets: string[];
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: string;
}
