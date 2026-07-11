import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'careerlens',
    name: 'CareerLens',
    description:
      'An upcoming AI-powered resume analysis tool designed to compare resumes with job descriptions using NLP techniques.',
    bullets: [
      'Currently building the core engine with TF‑IDF vectorization and Cosine Similarity to compute resume‑to‑job match scores.',
      'Implementing PDF text extraction and NLP preprocessing for accurate natural language analysis.',
      'Developing features to highlight missing technical skills and generate personalized ATS compatibility recommendations.',
      'Designing an intuitive React dashboard for resume uploads, interactive analysis results, and clear improvement insights.',
    ],
    technologies: ['React', 'Node.js', 'Python', 'Scikit-learn', 'NLP', 'TF-IDF', 'Cosine Similarity'],
    linkType: 'github',
    githubUrl: 'https://github.com/Dev-Flurssy/Careerlens',
    image: '/images/profile.jpg',
    upcoming: true,
  },
  {
    id: 'scorevision',
    name: 'ScoreVision',
    description:
      'An AI-powered student performance dashboard combining Python data analysis with a React frontend.',
    bullets: [
      'Built a Python pipeline using Pandas and NumPy to process student records and generate statistical summaries.',
      'Created visualizations with Matplotlib to identify performance trends and patterns.',
      'Exported analysis results as JSON and integrated them into an interactive React dashboard.',
      'Demonstrated full-stack thinking across data processing, backend, and UI layers.',
    ],
    technologies: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'React', 'JSON'],
    linkType: 'github',
    githubUrl: 'https://github.com/Dev-Flurssy/Scorevision',
    image: '/images/Neu1.jpg',
  },
  {
    id: 'neu-app',
    name: 'NEU AI Note Generator',
    description:
      'An AI-powered note-generation system built during my internship at Near East University, used by lecturers and engineering teams.',
    bullets: [
      'Integrated Groq AI to enable lecturers to generate, edit, and export structured notes with AI-driven content suggestions.',
      'Built secure authentication with NextAuth.js including role-based access control for admin and lecturer roles.',
      'Developed administrative dashboards for user management, reporting, and content oversight.',
      'Used Prisma ORM with MongoDB for type-safe, scalable data access across the application.',
    ],
    technologies: ['Next.js 15', 'TypeScript', 'Groq AI', 'NextAuth.js', 'Prisma ORM', 'MongoDB', 'React'],
    linkType: 'github',
    githubUrl: 'https://github.com/Dev-Flurssy/neu',
    image: '/images/Neu1.jpg',
  },
];
