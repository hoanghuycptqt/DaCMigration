import React, { useState } from 'react';
import AppShell from '../../components/layout/AppShell';
import Card from '../../components/ui/Card';
import { TYPE_BREAKDOWN, TOP_USERS } from '../../data/statistics';
import './admin.css';

const CHART_COLORS = ['#9e2896', '#007bc0', '#18837e', '#00884a', '#e96b00', '#ffcf00', '#595e62'];

const StatisticsPage: React.FC = () => {
  const [period, setPeriod] = useState('7d');
  const maxType = Math.max(...TYPE_BREAKDOWN.map((d) => d.value));
  const maxUser = Math.max(...TOP_USERS.map((d) => d.value));

  return (
    <AppShell>
      <h1 className="page-title">Migration Statistics</h1>

      <div className="presets">
        {[{ key: '7d', label: 'Last 7 days' }, { key: '30d', label: 'Last 30 days' }, { key: '3m', label: 'Last 3 months' }, { key: 'all', label: 'All time' }].map((p) => (
          <button key={p.key} className={`preset-btn ${period === p.key ? 'preset-btn--active' : ''}`} onClick={() => setPeriod(p.key)}>{p.label}</button>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-4)' }}>
        <Card>
          <h3>Migrations Over Time</h3>
          <div style={{ height: 200, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)', fontSize: 'var(--font-size-sm)', border: '1px dashed var(--border-subtle)', borderRadius: 'var(--radius-md)', marginTop: 'var(--space-4)' }}>
            📈 Line chart placeholder — integrate with recharts
          </div>
        </Card>
        <Card>
          <h3>Success vs Failure Rate</h3>
          <div style={{ height: 200, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)', fontSize: 'var(--font-size-sm)', border: '1px dashed var(--border-subtle)', borderRadius: 'var(--radius-md)', marginTop: 'var(--space-4)' }}>
            <div style={{ textAlign: 'center' }}>
              <span style={{ fontSize: 'var(--font-size-2xl)', fontWeight: 700, color: 'var(--signal-success)' }}>94.2%</span><br />
              <span>Success Rate</span>
            </div>
          </div>
        </Card>
        <Card>
          <h3>By Migration Type</h3>
          <div className="h-bar-chart" style={{ marginTop: 'var(--space-4)' }}>
            {TYPE_BREAKDOWN.map((d, i) => (
              <div className="h-bar-row" key={d.label}>
                <span className="h-bar-label">{d.label}</span>
                <div className="h-bar-track"><div className="h-bar-fill" style={{ width: `${(d.value / maxType) * 100}%`, backgroundColor: CHART_COLORS[i] }} /></div>
                <span className="h-bar-value">{d.value}</span>
              </div>
            ))}
          </div>
        </Card>
        <Card>
          <h3>Most Active Users</h3>
          <div className="h-bar-chart" style={{ marginTop: 'var(--space-4)' }}>
            {TOP_USERS.map((d) => (
              <div className="h-bar-row" key={d.label}>
                <span className="h-bar-label">{d.label}</span>
                <div className="h-bar-track"><div className="h-bar-fill" style={{ width: `${(d.value / maxUser) * 100}%`, backgroundColor: 'var(--primary)' }} /></div>
                <span className="h-bar-value">{d.value}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </AppShell>
  );
};

export default StatisticsPage;
