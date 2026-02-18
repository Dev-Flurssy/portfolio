import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  href?: string;
  onClick?: () => void;
  className?: string;
}

export default function Button({ children, variant = 'primary', href, onClick, className = '' }: ButtonProps) {
  const baseStyles = 'px-6 py-3 rounded-lg font-medium transition-all duration-300 inline-block text-center';
  const variantStyles = {
    primary: 'bg-purple text-white hover:bg-purple-medium focus:ring-2 focus:ring-purple-light focus:outline-none',
    secondary: 'border-2 border-purple text-purple hover:bg-purple hover:text-white focus:ring-2 focus:ring-purple-light focus:outline-none'
  };

  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedStyles} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={combinedStyles}>
      {children}
    </button>
  );
}
