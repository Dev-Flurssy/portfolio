import { Project } from '../types';

// ── Foundation Repositories ────────────────────────────────────────────────────
// Structured learning — building strong fundamentals before applying them

export const foundationProjects: Project[] = [
  {
    id: 'ml-foundation',
    name: 'ML Foundation',
    description:
      'A collection of machine learning projects documenting my learning journey — experimenting with models, visualizations, feature engineering, and building industry-ready ML pipelines.',
    bullets: [
      'Implemented core ML algorithms and statistical concepts to reinforce theoretical understanding.',
      'Built industry-ready ML pipelines using hands-on study with Scikit-Learn.',
      'Covered supervised learning, model optimization, and performance visualization.',
      'Structured as a growing reference and personal knowledge base for ML engineering.',
    ],
    technologies: ['Python', 'Scikit-Learn', 'Matplotlib', 'Machine Learning', 'Data Science'],
    linkType: 'github',
    githubUrl: 'https://github.com/Dev-Flurssy/ml-foundation',
    image: '/images/Machine Learning.png',
    upcoming: true,
  },
  {
    id: 'neural-computation-foundation',
    name: 'Neural Computation Foundation',
    description:
      'Documenting my Neural Computation course journey through notes, practicals, experiments, projects, and learning resources.',
    bullets: [
      'Course notes and practicals covering neural networks, deep learning theory, and computational models.',
      'Hands-on experiments implementing neural computation concepts from scratch.',
      'Covers Python, computer science fundamentals, data science, machine learning, and deep learning.',
      'Structured as a reproducible reference for neural computation and AI study.',
    ],
    technologies: ['Python', 'Deep Learning', 'Machine Learning', 'Data Science', 'Jupyter Notebook'],
    linkType: 'github',
    githubUrl: 'https://github.com/Dev-Flurssy/neural-computation-foundation',
    image: '/images/data-science.jpg',
    upcoming: true,
  },
  {
    id: 'data-science-algorithm-foundation',
    name: 'Data Science Algorithm Foundation',
    description:
      'A comprehensive repository for learning Data Structures and Algorithms using Python — through textbook study, notes, implementations, problem solving, visualizations, and projects.',
    bullets: [
      'Algorithm implementations covering sorting, searching, trees, graphs, and dynamic programming.',
      'Data structure fundamentals with Python — lists, stacks, queues, hash maps, and more.',
      'Problem-solving exercises with documented solutions and visual explanations.',
      'Bridges the gap between computer science fundamentals and AI/ML engineering.',
      'Upcoming projects: Student Record Manager · Library Management System · Task Scheduler · Contact Book · Expression Evaluator',
    ],
    technologies: ['Python', 'Algorithms', 'Data Structures', 'Problem Solving', 'Jupyter Notebook'],
    linkType: 'github',
    githubUrl: 'https://github.com/Dev-Flurssy/data-science-algorithm-lab',
    image: '/images/data-science.algorithm.jpeg',
    upcoming: true,
  },
];

// ── Lab Repositories ───────────────────────────────────────────────────────────
// Applied projects — putting the foundations into practice immediately

export const labProjects: Project[] = [
  {
    id: 'ml-lab',
    name: 'ML Lab',
    description:
      'My AI playground — a repository where I build mini AI/ML projects, experiment with new ideas, document my learning process, and grow my skills one project at a time.',
    bullets: [
      'Applied machine learning workflows: data preprocessing, feature engineering, model training, and evaluation.',
      'Built classification and regression models for real-world datasets and prediction challenges.',
      'Experimented with NLP techniques including text classification and natural language processing.',
      'Implemented neural computation experiments — activation functions, forward propagation, backpropagation, and learning algorithms.',
      'Maintained detailed experimentation notes, performance analysis, and project documentation.',
    ],
    technologies: ['Python', 'Scikit-Learn', 'NLP', 'Neural Networks', 'Pandas', 'NumPy', 'Machine Learning'],
    linkType: 'github',
    githubUrl: 'https://github.com/Dev-Flurssy/ml-lab',
    image: '/images/machine-learning-lab.avif',
    upcoming: false,
  },
  {
    id: 'data-science-lab',
    name: 'Data Science Lab',
    description:
      'A Data Science and Machine Learning project repository covering data cleaning, EDA, feature engineering, predictive modeling, evaluation, and insight generation.',
    bullets: [
      'End-to-end data science projects from raw data through cleaning, EDA, and insight generation.',
      'Feature engineering and predictive modeling with Scikit-Learn on real-world datasets.',
      'Model evaluation using accuracy, precision, recall, and F1-score metrics.',
      'Visual storytelling with Matplotlib and data-driven reporting.',
    ],
    technologies: ['Python', 'Pandas', 'NumPy', 'Scikit-Learn', 'Matplotlib', 'Data Science'],
    linkType: 'github',
    githubUrl: 'https://github.com/Dev-Flurssy/data-science-lab',
    image: '/images/data-science-lab.png',
    upcoming: true,
  },
  {
    id: 'data-science-algorithm-lab',
    name: 'Data Science Algorithm Lab',
    description:
      'A hands-on lab applying Data Structures and Algorithms through real Python mini-systems — turning theory into working projects.',
    bullets: [
      'Upcoming projects: Student Record Manager, Library Management System, Task Scheduler, Contact Book, Expression Evaluator.',
      'Each project applies a core DSA concept — linked lists, hash maps, trees, queues, and stacks — to a practical real-world system.',
      'Reinforces algorithm fundamentals alongside data science and AI engineering skills.',
    ],
    technologies: ['Python', 'Algorithms', 'Data Structures', 'Problem Solving', 'CLI'],
    linkType: 'github',
    githubUrl: 'https://github.com/Dev-Flurssy/data-science-algorithm-lab',
    image: '/images/predictive-analytics.avif',
    upcoming: true,
  },
];

// ── All lab projects combined (for Projects section) ──────────────────────────
export const allLabProjects = [...foundationProjects, ...labProjects];

// ── Applied AI Projects ────────────────────────────────────────────────────────

export const projects: Project[] = [
  ...allLabProjects,
  {
    id: 'scorevision',
    name: 'ScoreVision',
    description:
      'An AI-powered student performance dashboard combining Python data analysis with a React frontend.',
    bullets: [
      'Python pipeline using Pandas and NumPy to process student records and generate statistical summaries.',
      'Matplotlib visualizations to identify performance trends and patterns across cohorts.',
      'JSON integration layer connecting the Python analysis backend to an interactive React dashboard.',
      'Demonstrates end-to-end AI thinking: data processing → analysis → visual interface.',
    ],
    technologies: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'React', 'JSON'],
    linkType: 'both',
    githubUrl: 'https://github.com/Dev-Flurssy/Scorevision',
    demoUrl: 'https://scorevision-delta.vercel.app/',
    image: '/images/Score.jpeg',
  },
  {
    id: 'neu-app',
    name: 'NEU AI Note Generator',
    description:
      'An AI-powered note-generation system built during my internship at Near East University — used live by lecturers and engineering teams.',
    bullets: [
      'Integrated Groq AI to enable structured note generation, editing, and export with AI-driven content suggestions.',
      'Secure authentication with NextAuth.js including role-based access control for admin and lecturer roles.',
      'Administrative dashboards for user management, reporting, and content oversight.',
      'Prisma ORM with MongoDB for type-safe, scalable data access across the application.',
    ],
    technologies: ['Next.js 15', 'TypeScript', 'Groq AI', 'NextAuth.js', 'Prisma ORM', 'MongoDB'],
    linkType: 'both',
    githubUrl: 'https://github.com/Dev-Flurssy/neu',
    demoUrl: 'https://neu-dawt.vercel.app/',
    image: '/images/Neu1.jpg',
  },
];
