'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import { Download, Mail } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 py-20 md:py-32">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1 text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-base md:text-lg lg:text-xl text-purple font-semibold mb-2">Hi, I'm</h2>
              <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4 leading-tight">
                Bisola Sodikat <span className="text-purple">Alayande</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-4 md:mb-6 font-medium leading-snug">
                AI Engineering Student &nbsp;|&nbsp; Machine Learning Developer &nbsp;|&nbsp; Writer &nbsp;|&nbsp; Reader
              </p>
            </motion.div>

            {/* Mission statement */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mb-4 md:mb-5"
            >
              <p className="text-sm sm:text-base italic text-slate-500 dark:text-slate-400 border-l-4 border-purple pl-4 leading-relaxed">
                My goal is to become a world-class AI Engineer by combining strong software engineering fundamentals
                with machine learning, data science, and intelligent system development.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-6 md:mb-8"
            >
              <p className="text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                An AI Engineering student passionate about{' '}
                <span className="text-purple font-semibold">machine learning, data science, and intelligent software systems</span>.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-400 mb-5 leading-relaxed">
                I enjoy building AI-powered applications, training predictive models, analyzing data,
                and documenting my journey as I grow into a professional AI Engineer.
              </p>
              <p className="text-sm sm:text-base font-semibold text-slate-700 dark:text-slate-300 mb-2">
                Currently exploring:
              </p>
              <ul className="space-y-1 text-sm sm:text-base text-slate-600 dark:text-slate-400">
                {[
                  'Machine Learning',
                  'Deep Learning',
                  'Natural Language Processing',
                  'Data Science',
                  'MLOps & AI Deployment',
                ].map((topic) => (
                  <li key={topic} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple inline-block flex-shrink-0" />
                    {topic}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start"
            >
              <Button href="#projects" variant="primary" className="w-full sm:w-auto">
                View AI Projects
              </Button>
              <Button href="/images/resume.pdf" variant="secondary" className="w-full sm:w-auto" download>
                <Download className="inline mr-2" size={18} />
                Download Resume
              </Button>
              <Button href="#contact" variant="outline" className="w-full sm:w-auto">
                <Mail className="inline mr-2" size={18} />
                Contact Me
              </Button>
            </motion.div>
          </motion.div>

          {/* Right side - Profile image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-purple via-purple-medium to-teal rounded-full animate-pulse opacity-20"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-purple shadow-2xl bg-gradient-to-br from-purple via-purple-medium to-teal flex items-center justify-center">
                {/* Fallback initials — sits behind the image */}
                <div className="absolute inset-0 flex items-center justify-center text-white text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold z-0">BA</div>
                <Image
                  src="/images/profile.jpeg"
                  alt="Bisola Sodikat Alayande"
                  fill
                  className="object-cover z-10"
                  priority
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
