'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { skillCategories, currentlyLearning, futureSpecializations } from '@/lib/data/skills';
import SkillBadge from '../ui/SkillBadge';
import { Sparkles, Wrench, Code2, Clock, Telescope } from 'lucide-react';

const categoryConfig: Record<string, { icon: React.ElementType; gradient: string }> = {
  learning: {
    icon: Sparkles,
    gradient: 'from-purple to-purple-medium',
  },
  databases: {
    icon: Code2,
    gradient: 'from-teal to-teal-medium',
  },
  tools: {
    icon: Wrench,
    gradient: 'from-amber-500 to-orange-500',
  },
};

export default function Skills() {
  return (
    <section id="skills" className="py-16 sm:py-20 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">
            <span className="bg-gradient-to-r from-purple to-teal bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
            AI & machine learning at the core, backed by solid software engineering foundations.
          </p>
        </motion.div>

        {/* ── Core skills ── */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 lg:gap-6 mb-14">
          {skillCategories.map((category, index) => {
            const config = categoryConfig[category.category] ?? {
              icon: Wrench,
              gradient: 'from-slate-500 to-slate-600',
            };
            const Icon = config.icon;

            return (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-slate-800 rounded-xl p-5 sm:p-6 shadow-lg border border-slate-200 dark:border-slate-700 hover:shadow-2xl transition-all flex flex-col"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className={`p-2.5 rounded-lg bg-gradient-to-br ${config.gradient} flex-shrink-0`}>
                    <Icon className="text-white" size={20} />
                  </div>
                  <h3 className={`text-base sm:text-lg font-bold bg-gradient-to-r ${config.gradient} bg-clip-text text-transparent leading-tight`}>
                    {category.label}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <SkillBadge key={skill} skill={skill} />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ── Currently Learning ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <div className="flex items-center gap-3 mb-5">
            <span className="p-2 bg-purple/10 rounded-lg flex-shrink-0">
              <Clock className="text-purple" size={20} />
            </span>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-800 dark:text-slate-200">
                Currently Learning
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                Actively studying and applying right now — backed by ongoing lab projects
              </p>
            </div>
            <span className="ml-auto flex-shrink-0 px-2.5 py-1 bg-purple/10 text-purple border border-purple/20 text-xs font-semibold rounded-full">
              Active
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {currentlyLearning.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-slate-800 rounded-xl border-2 border-purple/30 p-4 sm:p-5 hover:border-purple/60 hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2 h-2 rounded-full bg-purple animate-pulse flex-shrink-0" />
                  <h4 className="text-sm font-bold text-purple">{area.title}</h4>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {area.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 bg-purple/8 dark:bg-purple/15 border border-purple/20 text-slate-700 dark:text-slate-300 text-xs rounded-full font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ── Future Specializations ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-5">
            <span className="p-2 bg-slate-200 dark:bg-slate-700 rounded-lg flex-shrink-0">
              <Telescope className="text-slate-500 dark:text-slate-400" size={20} />
            </span>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-800 dark:text-slate-200">
                Future Specializations
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                Planned learning path — where I'm heading next as an AI Engineer
              </p>
            </div>
            <span className="ml-auto flex-shrink-0 px-2.5 py-1 bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-600 text-xs font-semibold rounded-full">
              Upcoming
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {futureSpecializations.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-4 sm:p-5 opacity-80 hover:opacity-100 hover:border-slate-400 dark:hover:border-slate-500 transition-all"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2 h-2 rounded-full bg-slate-300 dark:bg-slate-600 flex-shrink-0" />
                  <h4 className="text-sm font-bold text-slate-600 dark:text-slate-400">{area.title}</h4>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {area.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 bg-slate-50 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-600 text-slate-500 dark:text-slate-400 text-xs rounded-full font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
