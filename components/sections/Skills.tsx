'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { skillCategories } from '@/lib/data/skills';
import SkillBadge from '../ui/SkillBadge';
import { Sparkles, TrendingUp, Target } from 'lucide-react';

const categoryIcons = {
  current: Sparkles,
  learning: TrendingUp,
  future: Target,
};

const categoryColors = {
  current: 'from-purple to-purple-medium',
  learning: 'from-teal to-teal-medium',
  future: 'from-purple-light to-teal-light',
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4 text-center">
            <span className="bg-gradient-to-r from-purple to-teal bg-clip-text text-transparent">Skills & Expertise</span>
          </h2>
          <p className="text-center text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto">
            My technical skills and continuous learning journey
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = categoryIcons[category.category];
            const gradientColor = categoryColors[category.category];
            
            return (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg border border-slate-200 dark:border-slate-700 hover:shadow-2xl transition-all"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-3 rounded-lg bg-gradient-to-br ${gradientColor}`}>
                    <Icon className="text-white" size={24} />
                  </div>
                  <h3 className={`text-xl font-bold bg-gradient-to-r ${gradientColor} bg-clip-text text-transparent`}>
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
      </div>
    </section>
  );
}
