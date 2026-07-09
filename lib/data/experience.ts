import { ExperienceItem } from '../types';

export const experiences: ExperienceItem[] = [
  {
    id: 'neu-intern',
    company: 'Near East University',
    role: 'Software Engineer Intern',
    period: 'Present',
    description:
      'Building administrative dashboards for user management and reporting. Supporting system testing, debugging, and documentation. Developing and maintaining web tools used by engineering teams, and collaborating closely with supervisors to deliver functional internal solutions on schedule.',
    technologies: ['Next.js', 'React', 'TypeScript', 'Node.js', 'Docker', 'GitHub'],
    current: true,
  },
  {
    id: 'sanlam-allianz',
    company: 'Sanlam Allianz (Mauritius Branch)',
    role: 'Software Engineer Intern',
    period: '6 Months',
    description:
      'Developed a Premium Calculator tool that automated insurance calculations for agents — reducing manual workload and calculation errors significantly. Enabled dynamic data input for automatic computation of premiums, interests, and profit/loss outcomes. Maintained structured client data records, supported backend operations, assisted in documentation and workflow optimization, and collaborated with technical teams to deliver solutions on schedule.',
    technologies: ['JavaScript', 'Data Management', 'MS Office', 'Advanced Excel'],
    current: false,
  },
];

export const volunteerExperience = [
  {
    id: 'she-builds-tech',
    organization: 'She Builds Tech',
    role: 'Co-Founder',
    period: 'Ongoing',
    description:
      'Co-founded a growing platform that teaches and mentors African women in tech. Organized workshops, mentorship sessions, and community events. Coordinating communications with participants and mentors while supporting administrative and operational activities.',
    current: true,
  },
  {
    id: 'devbyte',
    organization: 'DevByte Community (Africa)',
    role: 'Admin & Team Leader',
    period: 'Ongoing',
    description:
      'Leading a free Frontend Bootcamp training African students in web development fundamentals. Coordinating instructors, mentoring learners, managing community communications and schedules, and tracking learner progress across multiple programs.',
    current: true,
  },
  {
    id: 'gdg-nicosia',
    organization: 'Google Developer Group, Nicosia',
    role: 'Member',
    period: 'Recently Joined',
    description:
      'Engaging with the local developer ecosystem in Cyprus. Attending tech talks, networking with developers, and exploring collaboration opportunities in the AI and software engineering space.',
    current: true,
  },
  {
    id: 'free-hype-lessons',
    organization: 'Free Hype Lessons (Nigeria)',
    role: 'Volunteer Tutor',
    period: 'Past',
    description:
      'Provided free academic support in Mathematics, Physics, and Chemistry to high school students. Specialized in simplifying complex topics using relatable examples, which boosted student confidence and performance.',
    current: false,
  },
  
];
