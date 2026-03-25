import React from 'react';
import AppShell from '../../components/layout/AppShell';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import { HEALTH_SERVICES } from '../../data/health';
import './admin.css';

const SystemHealthPage: React.FC = () => {
  const sorted = [...HEALTH_SERVICES].sort((a, b) => (a.healthy === b.healthy ? 0 : a.healthy ? 1 : -1));

  return (
    <AppShell>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-6)' }}>
        <h1 className="page-title" style={{ marginBottom: 0 }}>System Health</h1>
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
          <Button variant="ghost">Check Now</Button>
          <span className="text-muted" style={{ fontSize: 'var(--font-size-xs)' }}>Auto-checking every 60s</span>
        </div>
      </div>

      <div className="health-grid">
        {sorted.map((svc) => (
          <Card
            key={svc.name}
            className="health-card"
            accentColor={svc.healthy ? 'var(--signal-success)' : 'var(--signal-error)'}
          >
            <span className="health-card__icon">{svc.healthy ? '✅' : '❌'}</span>
            <div className="health-card__content">
              <span className="health-card__name">{svc.name}</span>
              <span className={`health-card__status ${svc.healthy ? 'health-card__status--healthy' : 'health-card__status--unhealthy'}`}>
                {svc.healthy ? 'Healthy' : 'Unhealthy'}
              </span>
              {svc.healthy && svc.responseMs && (
                <span className="health-card__detail">{svc.responseMs}ms • {svc.lastChecked}</span>
              )}
              {!svc.healthy && svc.error && (
                <div className="health-card__error">{svc.error}</div>
              )}
            </div>
          </Card>
        ))}
      </div>
    </AppShell>
  );
};

export default SystemHealthPage;
