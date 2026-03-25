import React from 'react';
import { useNavigate } from 'react-router-dom';
import AppShell from '../../components/layout/AppShell';
import Card from '../../components/ui/Card';
import Badge from '../../components/ui/Badge';
import { DASHBOARD_STATS, WEEKLY_MIGRATIONS, RECENT_ACTIVITY } from '../../data/statistics';
import './admin.css';

const AdminDashboardPage: React.FC = () => {
  const navigate = useNavigate();
  const maxVal = Math.max(...WEEKLY_MIGRATIONS.map((d) => d.value));

  return (
    <AppShell>
      <h1 className="page-title">Administration Dashboard</h1>

      <div className="stats-row">
        <Card className="stat-card" onClick={() => navigate('/admin/requests')}>
          <span className="stat-card__label">Total Requests</span>
          <span className="stat-card__value stat-card__value--primary">{DASHBOARD_STATS.totalRequests}</span>
        </Card>
        <Card className="stat-card" onClick={() => navigate('/admin/monitoring')}>
          <span className="stat-card__label">Active Migrations</span>
          <span className="stat-card__value stat-card__value--primary">{DASHBOARD_STATS.activeMigrations}</span>
          <span className="stat-card__sub">{DASHBOARD_STATS.activeBreakdown}</span>
        </Card>
        <Card className="stat-card" onClick={() => navigate('/admin/statistics')}>
          <span className="stat-card__label">Success Rate</span>
          <span className="stat-card__value stat-card__value--success">{DASHBOARD_STATS.successRate}%</span>
        </Card>
        <Card className="stat-card" onClick={() => navigate('/admin/health')}>
          <span className="stat-card__label">System Health</span>
          <span className="stat-card__value stat-card__value--success">All Healthy</span>
          <span className="stat-card__sub">{DASHBOARD_STATS.healthyServices}</span>
        </Card>
      </div>

      <div className="admin-two-col">
        <Card className="admin-chart-card">
          <h3>Migrations This Week</h3>
          <div className="bar-chart">
            {WEEKLY_MIGRATIONS.map((d) => (
              <div key={d.label} className="bar-chart__col">
                <div className="bar-chart__bar" style={{ height: `${(d.value / maxVal) * 160}px` }}><span className="bar-chart__val">{d.value}</span></div>
                <span className="bar-chart__label">{d.label}</span>
              </div>
            ))}
          </div>
        </Card>
        <Card className="admin-activity-card">
          <h3>Recent Activity</h3>
          <div className="activity-list">
            {RECENT_ACTIVITY.map((a, i) => (
              <div key={i} className="activity-item">
                <div className="activity-item__text"><strong>{a.user}</strong> {a.action} <Badge variant={a.action === 'completed' ? 'success' : a.action === 'failed' ? 'error' : 'primary'}>{a.type}</Badge></div>
                <span className="activity-item__time">{a.timeAgo}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </AppShell>
  );
};

export default AdminDashboardPage;
