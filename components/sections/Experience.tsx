'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { experiences, volunteerExperience } from '@/lib/data/experience';
import { Briefcase, Heart } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4 text-center">
            <span className="text-purple">Experience</span>
          </h2>
          <p className="text-center text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto">
            My professional journey and community involvement
          </p>
        </motion.div>

        {/* Work Experience */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Briefcase className="text-purple" size={28} />
            <span>Work Experience</span>
          </h3>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-lg border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-purple/10 rounded-lg flex-shrink-0">
                    <Briefcase className="text-purple" size={24} />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center justify-between mb-2 gap-2">
                      <h3 className="text-xl md:text-2xl font-bold">{exp.role}</h3>
                      {exp.current && (
                        <span className="px-3 py-1 bg-purple text-white text-sm rounded-full">
                          Current
                        </span>
                      )}
                    </div>
                    <p className="text-lg text-purple font-semibold mb-1">{exp.company}</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mb-3">{exp.period}</p>
                    <p className="text-slate-700 dark:text-slate-300 mb-4 leading-relaxed">{exp.description}</p>
                    {exp.technologies && (
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-purple/10 text-purple text-sm rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Volunteer & Community Work */}
        <div>
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Heart className="text-purple" size={28} />
            <span>Volunteer & Community Work</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {volunteerExperience.map((vol, index) => (
              <motion.div
                key={vol.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-lg border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="p-2 bg-purple/10 rounded-lg flex-shrink-0">
                    <Heart className="text-purple" size={20} />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                      <h4 className="text-lg font-bold">{vol.role}</h4>
                      {vol.current && (
                        <span className="px-2 py-1 bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300 text-xs rounded-full">
                          Active
                        </span>
                      )}
                    </div>
                    <p className="text-purple font-semibold text-sm mb-1">{vol.organization}</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">{vol.period}</p>
                  </div>
                </div>
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">{vol.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
