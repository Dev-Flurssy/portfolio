'use client';

import React, { useState } from 'react';
import { Project } from '@/lib/types';
import { Github, ExternalLink } from 'lucide-react';
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
      className="bg-white dark:bg-slate-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-slate-200 dark:border-slate-700"
    >
      <div className="relative h-48 bg-gradient-to-br from-purple-light to-purple-dark flex items-center justify-center overflow-hidden">
        {project.image && !imageError ? (
          <Image
            src={project.image}
            alt={project.name}
            fill
            className="object-cover"
            onError={() => setImageError(true)}
          />
        ) : (
          <span className="text-white text-4xl font-bold">{project.name[0]}</span>
        )}
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.name}</h3>
        <p className="text-slate-600 dark:text-slate-300 mb-4">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span key={tech} className="px-3 py-1 bg-purple/10 text-purple text-xs rounded-full">
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex gap-3">
          {(project.linkType === 'github' || project.linkType === 'both') && project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-purple hover:text-purple-dark transition-colors"
            >
              <Github size={18} />
              <span className="text-sm font-medium">Code</span>
            </a>
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
