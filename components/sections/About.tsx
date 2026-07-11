'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Code, Coffee, Music, Book, Mountain, Plane, UtensilsCrossed, Users } from 'lucide-react';

const interests = [
  { icon: Code, label: 'Coding', color: 'text-purple' },
  { icon: Coffee, label: 'Tea', color: 'text-amber-600' },
  { icon: UtensilsCrossed, label: 'Eating', color: 'text-orange-600' },
  { icon: Users, label: 'Connecting', color: 'text-teal' },
  { icon: Music, label: 'Meditation', color: 'text-pink-600' },
  { icon: Book, label: 'Reading', color: 'text-blue-600' },
  { icon: Mountain, label: 'Hiking', color: 'text-green-600' },
  { icon: Plane, label: 'Travel', color: 'text-indigo-600' },
];

export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4 text-center">
            About <span className="text-purple">Me</span>
          </h2>
          <p className="text-center text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto">
            Get to know me better
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold text-purple mb-4">Who I Am</h3>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              I'm a proactive and detail-oriented <span className="font-semibold text-purple">AI Engineering student</span> who
              loves learning, building, and contributing to meaningful work. Driven by curiosity and a desire to expand
              my abilities, I enjoy solving problems, exploring new technologies, and taking ownership of projects from
              idea to execution. I genuinely love learning from people, interacting with others, and growing through
              shared experiences and collaboration.
            </p>

            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              With hands-on experience developing dashboards, analyzing data, and working across both frontend and
              backend environments, I bring adaptability, initiative, and a strong foundation in
              <span className="font-semibold"> Python, React, and machine learning fundamentals</span>. I'm currently
              focused on strengthening my AI skills and building solutions that improve workflows, support
              decision‑making, and create real impact for people and organizations.
            </p>

            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              My dream is to build useful, deep, and lasting AI solutions that touch lives, serve people, support
              organizations, and leave meaningful impact wherever my work reaches.
            </p>

            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              I value clean, maintainable code and believe great software should be both technically sound and easy to
              use. Outside of tech, I read widely across AI, tech, leadership, and self‑development, engage in
              community initiatives, mentor others, sharing what I learn and helping people grow in their own journeys.
            </p>

            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              When I'm not building, you'll find me hiking, experimenting in the kitchen, brewing healthy teas, or
              unwinding with a good drama, little rituals that keep me balanced and creatively energized.
              <br />
              Thank you for stopping by.
            </p>
          </motion.div>

          {/* Quick Facts */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-slate-800 rounded-lg p-8 shadow-lg border border-slate-200 dark:border-slate-700"
          >
            <h3 className="text-2xl font-bold text-purple mb-6">Quick Facts</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-purple rounded-full mt-2"></div>
                <div>
                  <p className="font-semibold text-slate-800 dark:text-slate-200">Location</p>
                  <p className="text-slate-600 dark:text-slate-400">Nicosia, Cyprus — open to remote opportunities worldwide</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-purple rounded-full mt-2"></div>
                <div>
                  <p className="font-semibold text-slate-800 dark:text-slate-200">Education</p>
                  <p className="text-slate-600 dark:text-slate-400">B.Sc. Artificial Intelligence Engineering — Near East University</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-purple rounded-full mt-2"></div>
                <div>
                  <p className="font-semibold text-slate-800 dark:text-slate-200">Current Focus</p>
                  <p className="text-slate-600 dark:text-slate-400">Data analysis with Python, AI‑powered tools, full‑stack applications</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-purple rounded-full mt-2"></div>
                <div>
                  <p className="font-semibold text-slate-800 dark:text-slate-200">Target Roles</p>
                  <p className="text-slate-600 dark:text-slate-400">AI/ML Intern · Web Developer Intern · AI Engineer Intern</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-purple rounded-full mt-2"></div>
                <div>
                  <p className="font-semibold text-slate-800 dark:text-slate-200">Languages</p>
                  <p className="text-slate-600 dark:text-slate-400">English (Fluent)</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-purple rounded-full mt-2"></div>
                <div>
                  <p className="font-semibold text-slate-800 dark:text-slate-200">Fun Facts</p>
                  <ul className="text-slate-600 dark:text-slate-400 space-y-1 mt-1">
                    <li>I learn something new every day, whether from people, books, or random AI experiments.</li>
                    <li>I connect best with people over good conversations, new ideas, and a cup of tea.</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Interests & Hobbies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-center mb-8">
            Interests & <span className="text-purple">Hobbies</span>
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 md:gap-6">
            {interests.map((interest, index) => (
              <motion.div
                key={interest.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="flex flex-col items-center gap-2 md:gap-3 p-4 md:p-6 bg-white dark:bg-slate-800 rounded-lg shadow-md hover:shadow-xl transition-all border border-slate-200 dark:border-slate-700 cursor-pointer"
              >
                <interest.icon className={`${interest.color} w-6 h-6 md:w-8 md:h-8`} />
                <span className="text-xs md:text-sm font-medium text-slate-700 dark:text-slate-300 text-center">
                  {interest.label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
