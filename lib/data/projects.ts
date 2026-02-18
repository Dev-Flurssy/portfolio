import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'chatterhub',
    name: 'ChatterHub',
    description: 'A full-stack social media platform featuring real-time messaging, user authentication, and post interactions.',
    technologies: ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'Socket.io'],
    linkType: 'github',
    githubUrl: 'https://github.com/Dev-Flurssy/mern/tree/main/chatterhub',
    image: '/images/chatter.jpg'
  },
  {
    id: 'neu-generator',
    name: 'NEU Generator',
    description: 'A Next.js application built to practice TypeScript and server-side rendering concepts.',
    technologies: ['Next.js', 'TypeScript', 'React', 'Prisma', 'MongoDB'],
    linkType: 'github',
    githubUrl: 'https://github.com/Dev-Flurssy/neu',
    image: '/images/Neu1.jpg'
  },
  {
    id: 'shopit',
    name: 'ShopIt',
    description: 'An upcoming online shopping website with modern e-commerce features, built with Next.js for optimal performance.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'React', 'Prisma', 'MySQL'],
    linkType: 'github',
    githubUrl: 'https://github.com/Dev-Flurssy/shopit',
    image: '/images/ShopIt.jpg'
  }
];
