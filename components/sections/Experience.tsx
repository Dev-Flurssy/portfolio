'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { experiences, volunteerExperience } from '@/lib/data/experience';
import { Briefcase, Heart, Calendar } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-16 sm:py-20 px-4">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">
            <span className="text-purple">Experience</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
            My professional journey and community involvement
          </p>
        </motion.div>

        {/* ── Work Experience ── */}
        <div className="mb-14">
          <h3 className="text-lg sm:text-xl font-bold mb-6 flex items-center gap-2 text-slate-800 dark:text-slate-200">
            <span className="p-2 bg-purple/10 rounded-lg">
              <Briefcase className="text-purple" size={20} />
            </span>
            Work Experience
          </h3>

          <div className="space-y-5">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-slate-800 rounded-xl p-5 sm:p-6 shadow-md hover:shadow-lg transition-shadow border border-slate-200 dark:border-slate-700 border-l-4 border-l-purple"
              >
                {/* Role + period row */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-3 mb-1">
                  <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100 leading-tight">
                    {exp.role}
                  </h4>
                  <span className="flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400 whitespace-nowrap flex-shrink-0">
                    <Calendar size={12} />
                    {exp.period}
                  </span>
                </div>

                {/* Company */}
                <p className="text-sm font-semibold text-purple mb-3">{exp.company}</p>

                {/* Description */}
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                  {exp.description}
                </p>

                {/* Tech tags */}
                {exp.technologies && (
                  <div className="flex flex-wrap gap-1.5">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 bg-purple/10 text-purple dark:bg-purple/20 text-xs rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── Volunteer & Community ── */}
        <div>
          <h3 className="text-lg sm:text-xl font-bold mb-6 flex items-center gap-2 text-slate-800 dark:text-slate-200">
            <span className="p-2 bg-purple/10 rounded-lg">
              <Heart className="text-purple" size={20} />
            </span>
            Volunteer & Community Work
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {volunteerExperience.map((vol, index) => (
              <motion.div
                key={vol.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-slate-800 rounded-xl p-4 sm:p-5 shadow-md hover:shadow-lg transition-shadow border border-slate-200 dark:border-slate-700 flex flex-col"
              >
                {/* Role + active badge */}
                <div className="flex items-start justify-between gap-2 mb-1">
                  <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-slate-100 leading-tight">
                    {vol.role}
                  </h4>
                  {vol.current ? (
                    <span className="flex-shrink-0 px-2 py-0.5 bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-400 text-xs font-semibold rounded-full">
                      Active
                    </span>
                  ) : (
                    <span className="flex-shrink-0 px-2 py-0.5 bg-slate-100 text-slate-500 dark:bg-slate-700 dark:text-slate-400 text-xs rounded-full">
                      Past
                    </span>
                  )}
                </div>

                {/* Org + period */}
                <p className="text-xs font-semibold text-purple mb-0.5">{vol.organization}</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">{vol.period}</p>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed flex-1">
                  {vol.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
