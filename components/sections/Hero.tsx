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
              <h2 className="text-base md:text-lg lg:text-xl text-purple font-semibold mb-2">Hello, I'm</h2>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4 leading-tight">
                Bisola Sodikat <span className="text-purple">Alayande</span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-4 md:mb-6 font-medium">
                Software Developer & Emerging AI Engineer
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-400 mb-6 md:mb-8 leading-relaxed"
            >
              I'm a passionate software developer and an upcoming AI engineer focused on building exceptional digital experiences. 
              Currently interning at <span className="text-purple font-semibold">NEU</span>, I create 
              intuitive, scalable web applications using modern technologies like React, Next.js, 
              Node.js, and TypeScript. I love turning complex problems into simple, beautiful solutions.
              <br /><br />
              I'm excited to advance deeper into AI engineering, solving real problems, improving accessibility, 
              and making life a little easier (and hopefully a little smarter) with what I learn.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start"
            >
              <Button href="#contact" variant="primary" className="w-full sm:w-auto">
                <Mail className="inline mr-2" size={18} />
                Hire Me
              </Button>
              <Button href="/resume.pdf" variant="secondary" className="w-full sm:w-auto">
                <Download className="inline mr-2" size={18} />
                Download CV
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
                {/* Placeholder - replace with actual image */}
                <Image
                  src="/images/profile.jpg"
                  alt="Bisola Sodikat Alayande"
                  fill
                  className="object-cover"
                  priority
                  onError={(e) => {
                    // Fallback to initials if image doesn't exist
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <div className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold">BA</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
