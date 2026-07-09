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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white dark:bg-slate-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-slate-200 dark:border-slate-700 flex flex-col"
    >
      {/* Image / banner */}
      <div className="relative h-48 bg-gradient-to-br from-purple-light to-purple-dark flex items-center justify-center overflow-hidden">
        {project.image && !imageError ? (
          <Image
            src={project.image}
            alt={project.name}
            fill
            className={`object-cover ${project.upcoming ? 'opacity-40' : ''}`}
            onError={() => setImageError(true)}
          />
        ) : (
          <span className="text-white text-4xl font-bold">{project.name[0]}</span>
        )}

        {/* Upcoming badge */}
        {project.upcoming && (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="flex items-center gap-1.5 px-3 py-1.5 bg-amber-500 text-white text-xs font-semibold rounded-full shadow-lg">
              <Clock size={13} />
              In Progress
            </span>
          </div>
        )}
      </div>

      <div className="p-6 flex flex-col flex-1">
        {/* Title row */}
        <div className="flex items-center gap-2 mb-2">
          <h3 className="text-xl font-bold">{project.name}</h3>
          {project.upcoming && (
            <span className="px-2 py-0.5 bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-400 text-xs font-medium rounded-full">
              Upcoming
            </span>
          )}
        </div>

        <p className="text-slate-600 dark:text-slate-300 mb-3 text-sm leading-relaxed">
          {project.description}
        </p>

        {/* Bullet points */}
        {project.bullets && project.bullets.length > 0 && (
          <ul className="mb-4 space-y-1">
            {project.bullets.map((bullet, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300">
                <span className="text-purple mt-1 flex-shrink-0">▸</span>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Tech badges */}
        <div className="flex flex-wrap gap-2 mb-4 mt-auto">
          {project.technologies.map((tech) => (
            <span key={tech} className="px-3 py-1 bg-purple/10 text-purple text-xs rounded-full">
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3">
          {(project.linkType === 'github' || project.linkType === 'both') && project.githubUrl && (
            project.upcoming ? (
              <span className="flex items-center gap-2 text-slate-400 dark:text-slate-500 text-sm cursor-not-allowed select-none">
                <Github size={18} />
                <span className="font-medium">Coming Soon</span>
              </span>
            ) : (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-purple hover:text-purple-dark transition-colors"
              >
                <Github size={18} />
                <span className="text-sm font-medium">Code</span>
              </a>
            )
          )}
          {(project.linkType === 'demo' || project.linkType === 'both') && project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-purple hover:text-purple-dark transition-colors"
            >
              <ExternalLink size={18} />
              <span className="text-sm font-medium">Demo</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
