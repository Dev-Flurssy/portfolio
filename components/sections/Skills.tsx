'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { skillCategories } from '@/lib/data/skills';
import SkillBadge from '../ui/SkillBadge';
import { Sparkles, TrendingUp, Database, Wrench } from 'lucide-react';

const categoryConfig = {
  current: {
    icon: Sparkles,
    gradient: 'from-purple to-purple-medium',
  },
  learning: {
    icon: TrendingUp,
    gradient: 'from-teal to-teal-medium',
  },
  databases: {
    icon: Database,
    gradient: 'from-blue-500 to-blue-600',
  },
  tools: {
    icon: Wrench,
    gradient: 'from-amber-500 to-orange-500',
  },
} as const;

export default function Skills() {
  return (
    <section id="skills" className="py-16 sm:py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-center">
            <span className="bg-gradient-to-r from-purple to-teal bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          <p className="text-center text-slate-600 dark:text-slate-400 mb-10 sm:mb-12 max-w-2xl mx-auto text-sm sm:text-base">
            Full-stack web development skills paired with an actively growing AI & data science toolkit
          </p>
        </motion.div>

        {/*
          Mobile:  1 column
          Tablet:  2 columns (2×2 grid — looks intentional)
          Desktop: 4 columns (all in one row)
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 lg:gap-6">
          {skillCategories.map((category, index) => {
            const config = categoryConfig[category.category];
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
                {/* Card header */}
                <div className="flex items-center gap-3 mb-5">
                  <div className={`p-2.5 rounded-lg bg-gradient-to-br ${config.gradient} flex-shrink-0`}>
                    <Icon className="text-white" size={20} />
                  </div>
                  <h3 className={`text-base sm:text-lg font-bold bg-gradient-to-r ${config.gradient} bg-clip-text text-transparent leading-tight`}>
                    {category.label}
                  </h3>
                </div>

                {/* Skill badges */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <SkillBadge key={skill} skill={skill} />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
