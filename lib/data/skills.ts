import { SkillCategory } from '../types';

export const skillCategories: SkillCategory[] = [
  {
    category: 'current',
    label: 'Programming & Web Dev',
    skills: [
      'Python',
      'JavaScript',
      'TypeScript',
      'HTML5',
      'CSS3',
      'React',
      'Next.js',
      'Node.js',
      'Express.js',
      'Tailwind CSS',
      'REST APIs',
      'Git & GitHub',
    ],
  },
  {
    category: 'learning',
    label: 'AI & Data Science',
    skills: [
      'Pandas',
      'NumPy',
      'Matplotlib',
      'Seaborn',
      'Scikit-learn',
      'Data Cleaning',
      'Data Visualization',
      'NLP (Basic)',
      'Machine Learning',
    ],
  },
  {
    category: 'databases',
    label: 'Databases',
    skills: [
      'MongoDB',
      'MySQL',
      'Prisma ORM',
    ],
  },
  {
    category: 'tools',
    label: 'Tools & Productivity',
    skills: [
      'VS Code',
      'Postman',
      'Docker',
      'MS Office Suite',
      'Google Workspace',
    ],
  },
];
