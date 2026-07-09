import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'careerlens',
    name: 'CareerLens',
    description:
      'An AI-powered resume analyzer that compares resumes with job descriptions using NLP techniques.',
    bullets: [
      'Built with TF-IDF vectorization and Cosine Similarity to calculate resume-to-job match scores.',
      'Extracted text from PDF resumes and performed preprocessing for natural language analysis.',
      'Highlighted missing technical skills and generated personalized ATS compatibility recommendations.',
      'Designed an intuitive React dashboard for resume uploads and interactive analysis results.',
    ],
    technologies: ['React', 'Node.js', 'Python', 'Scikit-learn', 'NLP', 'TF-IDF', 'Cosine Similarity'],
    linkType: 'github',
    githubUrl: 'https://github.com/Dev-Flurssy/Careerlens',
    image: '/images/profile.jpg',
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
    id: 'salesvision',
    name: 'SalesVision',
    description:
      'An AI-powered Business Sales Intelligence Dashboard that transforms Excel sales data into actionable business insights.',
    bullets: [
      'Upload Excel/CSV files with automatic data cleaning, validation, and missing value handling.',
      'Visualize revenue KPIs, sales trends, product performance, and category analysis.',
      'Forecast monthly revenue, sales trends, and growth estimates using predictive models.',
      'Generate AI-powered business summaries — detecting declining products, seasonal trends, and inventory planning suggestions.',
    ],
    technologies: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Scikit-learn', 'React'],
    linkType: 'github',
    githubUrl: 'https://github.com/Dev-Flurssy/Salesvision',
    image: '/images/ShopIt.jpg',
    upcoming: true,
  },
  {
    id: 'neu-app',
    name: 'NEU App',
    description:
      'An administrative web application built during my internship at Near East University.',
    bullets: [
      'Developed user management and reporting dashboards with Next.js and TypeScript.',
      'Used Prisma ORM for type-safe database access with MongoDB.',
      'Practiced server-side rendering and clean component architecture.',
    ],
    technologies: ['Next.js', 'TypeScript', 'React', 'Prisma', 'MongoDB'],
    linkType: 'github',
    githubUrl: 'https://github.com/Dev-Flurssy/neu',
    image: '/images/Neu1.jpg',
  },
];
