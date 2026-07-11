'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '@/lib/data/projects';
import ProjectCard from '../ui/ProjectCard';

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4 text-center">
            <span className="bg-gradient-to-r from-purple to-teal bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-center text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto">
            A mix of AI-powered tools, data science projects, and full-stack web applications
          </p>
        </motion.div>

        {/* 1 col mobile → 2 col tablet → 3 col desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
