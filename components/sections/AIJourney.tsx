'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Circle, Clock, Briefcase, Github } from 'lucide-react';

type StageStatus = 'completed' | 'current' | 'upcoming';

interface JourneyStage {
  year: string;
  title: string;
  status: StageStatus;
  description: string;
  skills: string[];
  githubUrl?: string;
}

const aiStages: JourneyStage[] = [
  {
    year: '2026',
    title: 'Data Science Foundations',
    status: 'completed',
    description:
      'Built hands-on proficiency in Python-based data science covering data manipulation, visualization, statistical analysis, and EDA through structured projects and notebooks.',
    skills: ['NumPy', 'Pandas', 'Matplotlib', 'Statistics', 'EDA', 'Data Cleaning'],
    githubUrl: 'https://github.com/Dev-Flurssy/data-science-foundations',
  },
  {
    year: '2026 – Present',
    title: 'Machine Learning Fundamentals',
    status: 'current',
    description:
      'Applying Scikit-Learn to build, train, and evaluate predictive models. Working through classification, regression, feature engineering, and model optimization with real datasets.',
    skills: ['Scikit-Learn', 'Predictive Modeling', 'Feature Engineering', 'Model Evaluation', 'Classification', 'Regression'],
    githubUrl: 'https://github.com/Dev-Flurssy/ml-lab',
  },
  {
    year: 'Upcoming',
    title: 'Deep Learning & Advanced AI',
    status: 'upcoming',
    description:
      'Next focus: neural networks, NLP, computer vision, and deploying models as production-ready APIs and applications.',
    skills: ['TensorFlow', 'PyTorch', 'NLP', 'Computer Vision', 'MLOps', 'FastAPI', 'LLM Applications'],
  },
];

const webStages: JourneyStage[] = [
  {
    year: '2023 – 2024',
    title: 'Full-Stack Web Development',
    status: 'completed',
    description:
      'Internship at Sanlam Allianz building automation tools. Developed strong JavaScript, data handling, and workflow optimization foundations.',
    skills: ['JavaScript', 'React', 'HTML/CSS', 'Data Management', 'Excel Automation'],
  },
  {
    year: '2025 – 2026',
    title: 'AI-Powered Web Applications',
    status: 'completed',
    description:
      'NEU internship: built a production AI note-generation system with Next.js, TypeScript, Groq AI, Prisma, and role-based auth used live by lecturers.',
    skills: ['Next.js 15', 'TypeScript', 'Groq AI', 'Prisma ORM', 'MongoDB', 'NextAuth.js'],
    githubUrl: 'https://github.com/Dev-Flurssy/neu',
  },
  {
    year: 'Now',
    title: 'Web Skills Supporting AI Engineering',
    status: 'current',
    description:
      'Using web development as a deployment layer building interfaces, dashboards, and APIs for AI/ML projects. React and Node.js serve the AI, not the other way around.',
    skills: ['React', 'FastAPI', 'REST APIs', 'Dashboard Development', 'AI Integration'],
  },
];

const statusConfig: Record<StageStatus, {
  Icon: typeof CheckCircle2;
  iconClass: string;
  cardClass: string;
  badgeClass: string;
  label: string;
}> = {
  completed: {
    Icon: CheckCircle2,
    iconClass: 'text-teal',
    cardClass: 'border-teal/40 bg-white dark:bg-slate-800',
    badgeClass: 'bg-teal/10 text-teal border border-teal/20',
    label: 'Completed',
  },
  current: {
    Icon: Clock,
    iconClass: 'text-purple',
    cardClass: 'border-purple/60 bg-purple/5 dark:bg-purple/10 shadow-lg shadow-purple/10',
    badgeClass: 'bg-purple/10 text-purple border border-purple/20',
    label: 'Current Focus',
  },
  upcoming: {
    Icon: Circle,
    iconClass: 'text-slate-400 dark:text-slate-500',
    cardClass: 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 opacity-75',
    badgeClass: 'bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-600',
    label: 'Upcoming',
  },
};

function Timeline({ stages }: { stages: JourneyStage[] }) {
  return (
    <div className="relative">
      <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-teal via-purple to-slate-300 dark:to-slate-600" />
      <div className="space-y-8 md:space-y-10">
        {stages.map((stage, index) => {
          const config = statusConfig[stage.status];
          const { Icon } = config;
          const isLeft = index % 2 === 0;

          return (
            <motion.div
              key={stage.title}
              initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              viewport={{ once: true }}
              className={`relative flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-0 ${
                isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Card */}
              <div className={`w-full md:w-[calc(50%-2.5rem)] ${isLeft ? 'md:pr-8' : 'md:pl-8'}`}>
                <div className={`rounded-xl border-2 p-5 transition-all ${config.cardClass}`}>
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${config.badgeClass}`}>
                      {config.label}
                    </span>
                    <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">{stage.year}</span>
                    {stage.githubUrl && (
                      <a
                        href={stage.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-auto flex items-center gap-1 text-xs text-slate-500 hover:text-purple dark:text-slate-400 dark:hover:text-purple transition-colors"
                        aria-label="View on GitHub"
                      >
                        <Github size={12} />
                        <span>View repo</span>
                      </a>
                    )}
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-slate-800 dark:text-slate-100 mb-2">
                    {stage.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-3">
                    {stage.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {stage.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-0.5 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-300 text-xs rounded-full font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Center dot */}
              <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-700 items-center justify-center z-10 shadow-md">
                <Icon className={config.iconClass} size={20} />
              </div>

              {/* Spacer */}
              <div className="hidden md:block w-[calc(50%-2.5rem)]" />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default function AIJourney() {
  return (
    <section id="journey" className="py-16 sm:py-20 px-4 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-6xl mx-auto">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">
            <span className="bg-gradient-to-r from-purple to-teal bg-clip-text text-transparent">
              My Engineering Journey
            </span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
            A transparent roadmap of skills built, projects shipped, and what's coming next.
          </p>
        </motion.div>

        {/* ── Professional Summary Banner ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-14 bg-white dark:bg-slate-800 rounded-xl border border-purple/20 p-6 sm:p-8 shadow-md"
        >
          <div className="flex items-start gap-3 mb-3">
            <span className="p-2 bg-purple/10 rounded-lg flex-shrink-0">
              <Briefcase className="text-purple" size={18} />
            </span>
            <h3 className="text-base sm:text-lg font-bold text-slate-800 dark:text-slate-200">
              Professional Summary
            </h3>
          </div>
          <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
            AI Engineering student with a growing focus on{' '}
            <span className="font-semibold text-purple">Machine Learning, Data Science, and Intelligent Systems</span>.
            Experienced in Python, data analysis, visualization, and developing machine learning solutions through
            hands-on projects. Passionate about applying AI techniques to solve real-world problems while continuously
            expanding expertise in Deep Learning, NLP, Computer Vision, and MLOps.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {['Open to AI Internships', 'Open to Part-Time Roles', 'Remote Friendly', 'Based in Cyprus'].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-purple/10 text-purple border border-purple/20 text-xs font-semibold rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* ── AI Learning Journey ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-6"
        >
          <h3 className="text-lg sm:text-xl font-bold text-slate-800 dark:text-slate-200 mb-8 flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-gradient-to-br from-purple to-teal inline-block" />
            AI & Machine Learning Journey
          </h3>
        </motion.div>
        <Timeline stages={aiStages} />

        {/* ── Web Development Journey ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 mb-6"
        >
          <h3 className="text-lg sm:text-xl font-bold text-slate-800 dark:text-slate-200 mb-8 flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-gradient-to-br from-teal to-blue-500 inline-block" />
            Web Development Journey
            <span className="text-xs font-normal text-slate-500 dark:text-slate-400 ml-2">
              — supporting the AI work
            </span>
          </h3>
        </motion.div>
        <Timeline stages={webStages} />

        {/* ── GitHub CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-14 text-center"
        >
          <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
            All labs, experiments, and projects are open source and actively updated.
          </p>
          <a
            href="https://github.com/Dev-Flurssy"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 dark:bg-slate-700 text-white rounded-lg text-sm font-semibold hover:bg-slate-700 dark:hover:bg-slate-600 transition-colors shadow-md"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            GitHub: Dev-Flurssy (Flurssy)
          </a>
        </motion.div>

      </div>
    </section>
  );
}
