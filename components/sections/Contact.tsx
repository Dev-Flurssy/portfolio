'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { contactInfo } from '@/lib/data/contact';
import { Mail, Github, Linkedin, Send, MessageCircle } from 'lucide-react';
import Button from '../ui/Button';

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-br from-purple/5 to-purple-light/5">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Let's Work <span className="text-purple">Together</span>
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-slate-600 dark:text-slate-400 mb-6 md:mb-8 max-w-2xl mx-auto px-4">
            I'm currently available for freelance work and full-time opportunities. 
            Have a project in mind? Let's make it happen!
          </p>

          {/* Hire Me CTA Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-slate-800 rounded-2xl p-6 md:p-8 lg:p-12 shadow-2xl border border-purple/20 mb-8 md:mb-12"
          >
            <div className="inline-block px-4 py-2 bg-purple/10 text-purple rounded-full text-sm font-semibold mb-4">
              Available for Hire
            </div>
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3 md:mb-4">Ready to Start Your Project?</h3>
            <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 mb-6 md:mb-8 max-w-xl mx-auto px-4">
              Whether you need a full-stack developer, a tutor,  or someone to bring your 
              ideas to life, I'm here to help. Let's discuss how we can work together.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              {contactInfo.email && (
                <Button href={`mailto:${contactInfo.email}`} variant="primary" className="w-full sm:w-auto">
                  <Send className="inline mr-2" size={18} />
                  Send Me an Email
                </Button>
              )}
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p className="text-slate-600 dark:text-slate-400 mb-6">Or connect with me on</p>
            <div className="flex gap-6 justify-center items-center flex-wrap">
              {contactInfo.email && (
                <motion.a
                  href={`mailto:${contactInfo.email}`}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="flex flex-col items-center gap-2 p-4 bg-white dark:bg-slate-800 rounded-lg shadow-md hover:shadow-xl transition-all border border-slate-200 dark:border-slate-700 group"
                >
                  <Mail className="text-purple group-hover:text-purple-dark transition-colors" size={32} />
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Email</span>
                </motion.a>
              )}
              {contactInfo.whatsapp && (
                <motion.a
                  href={contactInfo.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="flex flex-col items-center gap-2 p-4 bg-white dark:bg-slate-800 rounded-lg shadow-md hover:shadow-xl transition-all border border-slate-200 dark:border-slate-700 group"
                >
                  <MessageCircle className="text-teal group-hover:text-teal-dark transition-colors" size={32} />
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">WhatsApp</span>
                </motion.a>
              )}
              {contactInfo.github && (
                <motion.a
                  href={contactInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="flex flex-col items-center gap-2 p-4 bg-white dark:bg-slate-800 rounded-lg shadow-md hover:shadow-xl transition-all border border-slate-200 dark:border-slate-700 group"
                >
                  <Github className="text-purple group-hover:text-purple-dark transition-colors" size={32} />
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">GitHub</span>
                </motion.a>
              )}
              {contactInfo.linkedin && (
                <motion.a
                  href={contactInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="flex flex-col items-center gap-2 p-4 bg-white dark:bg-slate-800 rounded-lg shadow-md hover:shadow-xl transition-all border border-slate-200 dark:border-slate-700 group"
                >
                  <Linkedin className="text-purple group-hover:text-purple-dark transition-colors" size={32} />
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">LinkedIn</span>
                </motion.a>
              )}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
