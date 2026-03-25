import React from 'react';
import './NotificationBanner.css';

interface NotificationBannerProps {
  readonly children: React.ReactNode;
  readonly variant?: 'info' | 'success' | 'warning' | 'error';
  readonly className?: string;
}

const ICONS: Record<string, string> = {
  info: 'ℹ️',
  success: '✅',
  warning: '⚠️',
  error: '❌',
};

export const NotificationBanner: React.FC<NotificationBannerProps> = ({
  children,
  variant = 'info',
  className = '',
}) => {
  return (
    <div className={`notification-banner notification-banner--${variant} ${className}`}>
      <span className="notification-banner__icon">{ICONS[variant]}</span>
      <span className="notification-banner__text">{children}</span>
    </div>
  );
};

export default NotificationBanner;
