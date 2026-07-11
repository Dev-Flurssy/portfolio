export interface Project {
  id: string;
  name: string;
  description: string;
  bullets?: string[];
  technologies: string[];
  linkType: 'demo' | 'github' | 'both';
  demoUrl?: string;
  githubUrl?: string;
  image?: string;
  upcoming?: boolean;
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
  technologies?: string[];
  current: boolean;
}

export interface SkillCategory {
  category: 'current' | 'learning' | 'databases' | 'tools';
  label: string;
  skills: string[];
}

export interface ContactInfo {
  email?: string;
  github?: string;
  linkedin?: string;
  whatsapp?: string;
}
