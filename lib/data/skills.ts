import { SkillCategory } from '../types';

export const skillCategories: SkillCategory[] = [
  {
    category: 'current',
    label: 'Current Skills',
    skills: [
      'React.js', 
      'Node.js', 
      'Next.js', 
      'TypeScript', 
      'JavaScript',
      'Tailwind CSS', 
      'MongoDB', 
      'MySQL',
      'Docker', 
      'Git & GitHub',
      'Python',
      'REST APIs'
    ]
  },
  {
    category: 'learning',
    label: 'Currently Learning',
    skills: [
      'Python Backend Development',
      'Machine Learning', 
      'Deep Learning',
      'AI Agent Development', 
      'AWS Cloud Services',
      'Cloud Architecture'
    ]
  },
  {
    category: 'future',
    label: 'Interested in Learning',
    skills: [
      'PostgreSQL',
      'C#',
      '.NET',
      'React Native', 
      'Flutter',
      'Kubernetes',
      'Microservices',
      'Natural Language Processing',
      'Computer Vision'
    ]
  }
];
