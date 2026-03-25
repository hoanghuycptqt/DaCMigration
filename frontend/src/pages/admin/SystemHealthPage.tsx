import React from 'react';
import AppShell from '../../components/layout/AppShell';
import { HEALTH_SERVICES } from '../../data/health';
import './SystemHealth.css';

const SystemHealthPage: React.FC = () => {
  const sorted = [...HEALTH_SERVICES].sort((a, b) => (a.healthy === b.healthy ? 0 : a.healthy ? 1 : -1));
  const healthyCount = HEALTH_SERVICES.filter(s => s.healthy).length;
  const unhealthyCount = HEALTH_SERVICES.length - healthyCount;
  const allHealthy = unhealthyCount === 0;

  return (
    <AppShell>
      <div className="page-header">
        <h1 className="page-title">System Health</h1>
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
          <button className="sh-btn-refresh" type="button">
            <span className="material-symbols-outlined">refresh</span>
            Check Now
          </button>
          <span className="sh-auto-label">Auto-checking every 60s</span>
        </div>
      </div>

      {/* ── Summary Bar ── */}
      <div className={`sh-summary ${allHealthy ? 'sh-summary--ok' : 'sh-summary--warn'}`}>
        <span className="material-symbols-outlined sh-summary__icon">
          {allHealthy ? 'verified' : 'warning'}
        </span>
        <div className="sh-summary__text">
          <strong>
            {allHealthy
              ? 'All systems operational'
              : `${unhealthyCount} service${unhealthyCount > 1 ? 's' : ''} require attention`}
          </strong>
          <span className="sh-summary__counts">
            <span className="sh-summary__count sh-summary__count--ok">
              <span className="material-symbols-outlined" style={{ fontSize: 16 }}>check_circle</span>
              {healthyCount} Healthy
            </span>
            {unhealthyCount > 0 && (
              <span className="sh-summary__count sh-summary__count--err">
                <span className="material-symbols-outlined" style={{ fontSize: 16 }}>cancel</span>
                {unhealthyCount} Unhealthy
              </span>
            )}
          </span>
        </div>
      </div>

      {/* ── Service List ── */}
      <div className="sh-list">
        <div className="sh-list__header">
          <span className="sh-list__col sh-list__col--status">Status</span>
          <span className="sh-list__col sh-list__col--name">Service</span>
          <span className="sh-list__col sh-list__col--response">Response Time</span>
          <span className="sh-list__col sh-list__col--checked">Last Checked</span>
        </div>

        {sorted.map((svc) => (
          <div key={svc.name} className={`sh-row ${!svc.healthy ? 'sh-row--error' : ''}`}>
            {/* Status indicator */}
            <span className="sh-list__col sh-list__col--status">
              <span className={`sh-status-dot ${svc.healthy ? 'sh-status-dot--ok' : 'sh-status-dot--err'}`} />
              <span className={`sh-status-label ${svc.healthy ? 'sh-status-label--ok' : 'sh-status-label--err'}`}>
                {svc.healthy ? 'Healthy' : 'Unhealthy'}
              </span>
            </span>

            {/* Name + icon */}
            <span className="sh-list__col sh-list__col--name">
              <span className="material-symbols-outlined sh-row__icon">
                {svc.name.includes('Database') ? 'database'
                  : svc.name.includes('SMTP') ? 'mail'
                  : svc.name.includes('GitHub') ? 'code'
                  : svc.name.includes('Airflow') ? 'air'
                  : 'dns'}
              </span>
              <span className="sh-row__name">{svc.name}</span>
            </span>

            {/* Response time with bar */}
            <span className="sh-list__col sh-list__col--response">
              {svc.healthy && svc.responseMs != null ? (
                <div className="sh-response">
                  <div className="sh-response__bar-track">
                    <div
                      className={`sh-response__bar-fill ${svc.responseMs > 150 ? 'sh-response__bar-fill--warn' : ''}`}
                      style={{ width: `${Math.min((svc.responseMs / 300) * 100, 100)}%` }}
                    />
                  </div>
                  <span className="sh-response__value">{svc.responseMs}ms</span>
                </div>
              ) : (
                <span className="sh-response__na">—</span>
              )}
            </span>

            {/* Last checked */}
            <span className="sh-list__col sh-list__col--checked">
              {svc.lastChecked}
            </span>

            {/* Error row */}
            {!svc.healthy && svc.error && (
              <div className="sh-row__error-banner">
                <span className="material-symbols-outlined" style={{ fontSize: 16 }}>error</span>
                {svc.error}
              </div>
            )}
          </div>
        ))}
      </div>
    </AppShell>
  );
};

export default SystemHealthPage;
