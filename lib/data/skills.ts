import { SkillCategory } from '../types';

export const skillCategories: SkillCategory[] = [
  {
    category: 'learning',
    label: 'AI & Data Skills',
    skills: [
      'Python',
      'NumPy',
      'Pandas',
      'Matplotlib',
      'Scikit-Learn',
      'Machine Learning',
      'Data Preprocessing',
      'Feature Engineering',
      'Model Evaluation',
      'Exploratory Data Analysis',
    ],
  },
  {
    category: 'databases',
    label: 'Software Engineering',
    skills: [
      'Git',
      'GitHub',
      'SQL',
      'Java',
      'C++',
      'React',
      'TypeScript',
      'Node.js',
      'REST APIs',
    ],
  },
  {
    category: 'tools',
    label: 'Tools & Environment',
    skills: [
      'Jupyter Notebook',
      'VS Code',
      'Postman',
      'Docker',
      'MS Office Suite',
      'Google Workspace',
    ],
  },
];

// ── Currently Learning (active right now) ─────────────────────────────────────
export const currentlyLearning = [
  {
    title: 'Machine Learning',
    skills: ['Scikit-Learn', 'Supervised Learning', 'Unsupervised Learning', 'Model Optimization'],
  },
  {
    title: 'Neural Networks',
    skills: ['Perceptrons', 'Activation Functions', 'Forward Propagation', 'Backpropagation', 'Loss Functions'],
  },
  {
    title: 'Prompt Engineering',
    skills: ['Prompt Design', 'Chain-of-Thought', 'Few-Shot Prompting', 'LLM Interaction', 'Analytical Thinking'],
  },
  {
    title: 'Data Science Workflows',
    skills: ['EDA', 'Statistical Analysis', 'Data Visualization', 'Feature Engineering', 'Predictive Modeling'],
  },
];

// ── Future Specializations (planned, not yet started) ─────────────────────────
export const futureSpecializations = [
  {
    title: 'Deep Learning',
    skills: ['TensorFlow', 'PyTorch', 'CNNs', 'RNNs'],
  },
  {
    title: 'Natural Language Processing',
    skills: ['Text Classification', 'Sentiment Analysis', 'Large Language Models (LLMs)', 'LangChain'],
  },
  {
    title: 'Computer Vision',
    skills: ['OpenCV', 'Image Classification', 'Object Detection'],
  },
  {
    title: 'MLOps & Deployment',
    skills: ['FastAPI', 'Docker', 'MLflow', 'Model Deployment', 'CI/CD for ML'],
  },
];
