'use client';

import React, { useState } from 'react';
import { Project } from '@/lib/types';
import { Github, ExternalLink, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="group bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-slate-200 dark:border-slate-700 flex flex-col"
    >
      {/* ── Banner image ── */}
      <div className="relative h-44 sm:h-52 bg-gradient-to-br from-purple/80 via-purple to-teal flex items-center justify-center overflow-hidden flex-shrink-0">
        {project.image && !imageError ? (
          <Image
            src={project.image}
            alt={project.name}
            fill
            className={`object-cover transition-transform duration-500 group-hover:scale-105 ${
              project.upcoming ? 'opacity-30' : 'opacity-80'
            }`}
            onError={() => setImageError(true)}
          />
        ) : (
          <span className="relative z-10 text-white text-5xl font-bold opacity-30 select-none">
            {project.name[0]}
          </span>
        )}

        {/* Gradient overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

        {/* Project name on banner */}
        <div className="absolute bottom-3 left-4 right-4 z-10">
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className="text-white text-lg sm:text-xl font-bold drop-shadow-md leading-tight">
              {project.name}
            </h3>
            {project.upcoming && (
              <span className="flex items-center gap-1 px-2 py-0.5 bg-amber-500 text-white text-xs font-semibold rounded-full shadow">
                <Clock size={11} />
                In Progress
              </span>
            )}
          </div>
        </div>
      </div>

      {/* ── Card body ── */}
      <div className="p-5 sm:p-6 flex flex-col flex-1 border-t-4 border-purple/20 group-hover:border-purple transition-colors duration-300">

        <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-3">
          {project.description}
        </p>

        {/* Bullet points */}
        {project.bullets && project.bullets.length > 0 && (
          <ul className="mb-4 space-y-1.5">
            {project.bullets.map((bullet, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300">
                <span className="text-purple font-bold mt-0.5 flex-shrink-0 text-xs">▸</span>
                <span className="leading-snug">{bullet}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Spacer pushes tech + links to bottom */}
        <div className="flex-1" />

        {/* Tech badges */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 bg-purple/10 text-purple dark:bg-purple/20 text-xs rounded-full font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-slate-100 dark:border-slate-700 pt-4">
          <div className="flex items-center gap-4">
            {(project.linkType === 'github' || project.linkType === 'both') &&
              project.githubUrl &&
              (project.upcoming ? (
                <span className="flex items-center gap-1.5 text-slate-400 dark:text-slate-500 text-sm cursor-not-allowed select-none">
                  <Github size={16} />
                  <span className="font-medium">Coming Soon</span>
                </span>
              ) : (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-slate-600 dark:text-slate-300 hover:text-purple dark:hover:text-purple transition-colors text-sm font-medium"
                >
                  <Github size={16} />
                  <span>View Code</span>
                </a>
              ))}

            {(project.linkType === 'demo' || project.linkType === 'both') &&
              project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-slate-600 dark:text-slate-300 hover:text-purple dark:hover:text-purple transition-colors text-sm font-medium"
                >
                  <ExternalLink size={16} />
                  <span>Live Demo</span>
                </a>
              )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
