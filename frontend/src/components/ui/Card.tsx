import React from 'react';
import './Card.css';

interface CardProps {
  readonly children: React.ReactNode;
  readonly className?: string;
  readonly padding?: 'none' | 'sm' | 'md' | 'lg';
  readonly onClick?: () => void;
  readonly accentColor?: string;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  padding = 'md',
  onClick,
  accentColor,
}) => {
  return (
    <div
      className={`card card--pad-${padding} ${onClick ? 'card--clickable' : ''} ${className}`}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      style={accentColor ? { borderLeft: `3px solid ${accentColor}` } : undefined}
    >
      {children}
    </div>
  );
};

export default Card;
