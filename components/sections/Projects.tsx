'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { foundationProjects, labProjects, projects } from '@/lib/data/projects';
import ProjectCard from '../ui/ProjectCard';
import { BookOpen, FlaskConical, Rocket, Github } from 'lucide-react';

// Applied projects = everything not in foundations or labs
const appliedProjects = projects.filter(
  (p) => !foundationProjects.find((f) => f.id === p.id) && !labProjects.find((l) => l.id === p.id)
);

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 bg-slate-50 dark:bg-slate-900">
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
              Projects & Labs
            </span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
            All open source and actively updated — from foundations to applied AI projects.
          </p>
        </motion.div>

        {/* ── Row 1: Foundations ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-4"
        >
          <div className="flex items-center gap-3 mb-2">
            <span className="p-2 bg-purple/10 rounded-lg flex-shrink-0">
              <BookOpen className="text-purple" size={20} />
            </span>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-800 dark:text-slate-200">
                Foundations
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                Structured learning repositories — building strong roots in ML, neural computation, and algorithms
              </p>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 mb-16">
          {foundationProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* ── Row 2: Labs ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-4"
        >
          <div className="flex items-center gap-3 mb-2">
            <span className="p-2 bg-teal/10 rounded-lg flex-shrink-0">
              <FlaskConical className="text-teal" size={20} />
            </span>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-800 dark:text-slate-200">
                AI & Data Science Labs
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                Applied projects — putting foundations into practice through real datasets, experiments, and end-to-end ML workflows
              </p>
            </div>
            <a
              href="https://github.com/Dev-Flurssy"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-auto flex items-center gap-1.5 text-xs font-semibold text-slate-500 dark:text-slate-400 hover:text-purple dark:hover:text-purple transition-colors whitespace-nowrap"
            >
              <Github size={14} />
              All repos
            </a>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 mb-16">
          {labProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* ── Row 3: Applied Projects ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-4"
        >
          <div className="flex items-center gap-3 mb-2">
            <span className="p-2 bg-amber-500/10 rounded-lg flex-shrink-0">
              <Rocket className="text-amber-500" size={20} />
            </span>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-800 dark:text-slate-200">
                Applied Projects
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                End-to-end AI and web applications — designed, built, and deployed
              </p>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
          {appliedProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
}
