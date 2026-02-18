'use client';

import React from 'react';
import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';
import { contactInfo } from '@/lib/data/contact';
import { motion } from 'framer-motion';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-12 px-4 border-t border-slate-200 dark:border-slate-800 bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-6xl mx-auto">
        {/* Scroll to Top Button */}
        <motion.button
          onClick={scrollToTop}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="absolute -top-6 left-1/2 transform -translate-x-1/2 p-3 bg-gradient-to-r from-purple to-teal rounded-full shadow-lg hover:shadow-xl transition-all"
          aria-label="Scroll to top"
        >
          <ArrowUp className="text-white" size={24} />
        </motion.button>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple to-teal bg-clip-text text-transparent mb-3">
              Bisola Alayande
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              Software Developer passionate about building impactful web applications and mentoring the next generation of developers.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-slate-800 dark:text-slate-200 mb-3">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-slate-600 dark:text-slate-400 hover:text-purple dark:hover:text-teal transition-colors text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-bold text-slate-800 dark:text-slate-200 mb-3">Connect With Me</h4>
            <div className="flex gap-4">
              {contactInfo.github && (
                <a
                  href={contactInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-slate-200 dark:bg-slate-700 rounded-lg hover:bg-purple hover:text-white dark:hover:bg-teal transition-all"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
              )}
              {contactInfo.linkedin && (
                <a
                  href={contactInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-slate-200 dark:bg-slate-700 rounded-lg hover:bg-purple hover:text-white dark:hover:bg-teal transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
              )}
              {contactInfo.email && (
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="p-2 bg-slate-200 dark:bg-slate-700 rounded-lg hover:bg-purple hover:text-white dark:hover:bg-teal transition-all"
                  aria-label="Email"
                >
                  <Mail size={20} />
                </a>
              )}
            </div>
            <p className="text-slate-600 dark:text-slate-400 text-sm mt-4">
              Available for freelance work and full-time opportunities
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-200 dark:border-slate-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-600 dark:text-slate-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Bisola Sodikat Alayande. All rights reserved.
            </p>
            <p className="text-slate-600 dark:text-slate-400 text-sm flex items-center gap-1">
              Built with <Heart className="text-red-500 inline" size={16} fill="currentColor" /> using Next.js & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
