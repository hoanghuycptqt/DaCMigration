import React from 'react';
import type { MigrationStatus } from '../../types';
import './Badge.css';

interface BadgeProps {
  readonly children: React.ReactNode;
  readonly variant?: 'primary' | 'success' | 'error' | 'warning' | 'neutral' | 'purple' | 'info';
  readonly pulse?: boolean;
  readonly className?: string;
}

const STATUS_VARIANT_MAP: Record<MigrationStatus, BadgeProps['variant']> = {
  RUNNING: 'primary',
  COMPLETED: 'success',
  FAILED: 'error',
  SCHEDULED: 'purple',
  QUEUED: 'neutral',
  CANCELLED: 'neutral',
};

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'neutral',
  pulse = false,
  className = '',
}) => {
  return (
    <span className={`badge badge--${variant} ${pulse ? 'badge--pulse' : ''} ${className}`}>
      {children}
    </span>
  );
};

export const StatusBadge: React.FC<{ readonly status: MigrationStatus }> = ({ status }) => {
  const variant = STATUS_VARIANT_MAP[status];
  return (
    <Badge variant={variant} pulse={status === 'RUNNING'}>
      {status}
    </Badge>
  );
};

export default Badge;
