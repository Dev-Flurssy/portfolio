import React from 'react';

interface SkillBadgeProps {
  skill: string;
}

export default function SkillBadge({ skill }: SkillBadgeProps) {
  return (
    <span className="px-4 py-2 bg-purple/10 text-purple border border-purple/30 rounded-full text-sm font-medium hover:bg-purple/20 transition-colors">
      {skill}
    </span>
  );
}
