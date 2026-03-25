import React from 'react';
import { useNavigate } from 'react-router-dom';
import AppShell from '../../components/layout/AppShell';
import Card from '../../components/ui/Card';
import Badge from '../../components/ui/Badge';
import Button from '../../components/ui/Button';
import NotificationBanner from '../../components/feedback/NotificationBanner';
import './admin.css';

const RUNNING_ITEMS = [
  { id: 156, type: 'DNG Requirements', user: 'Nguyen Van A', repo: 'sw-pkg-cc-eal-dac', branch: 'migration/dng-req', progress: 60, tasks: '3/5', time: '5m 12s' },
  { id: 155, type: 'DOORS Requirements', user: 'Tran Thi B', repo: 'sw-pkg-cc-eal-dac', branch: 'migration/doors', progress: 80, tasks: '4/5', time: '9m 30s' },
  { id: 154, type: 'Rhapsody DSD', user: 'Le Van C', repo: 'sw-pkg-cc-hal-dac', branch: 'migration/rhap', progress: 20, tasks: '1/5', time: '1m 45s' },
];
const QUEUE_ITEMS = [
  { pos: 1, id: 153, user: 'Pham Thi D', type: 'DNG DSD', repo: 'sw-pkg-cc-eal-dac', queued: '2 min ago' },
  { pos: 2, id: 152, user: 'Hoang Van E', type: 'TestSpec', repo: 'sw-pkg-cc-hal-dac', queued: '5 min ago' },
];

const MonitoringPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <AppShell>
      <h1 className="page-title">Real-Time Migration Monitoring</h1>

      <h3 style={{ marginBottom: 'var(--space-4)' }}>Currently Running</h3>
      <div className="running-cards">
        {RUNNING_ITEMS.map((item) => (
          <Card key={item.id} className="running-card">
            <div className="running-card__header">
              <Badge variant="primary">{item.type}</Badge>
              <span>#{item.id}</span>
            </div>
            <div className="running-card__meta">{item.user} • {item.repo} / {item.branch}</div>
            <div className="running-card__progress">
              <div className="progress-bar" style={{ flex: 1 }}><div className="progress-bar__fill" style={{ width: `${item.progress}%` }} /></div>
              <span style={{ fontSize: 'var(--font-size-xs)' }}>{item.tasks} tasks</span>
            </div>
            <div className="running-card__time">{item.time}</div>
            <div className="running-card__actions">
              <Button variant="ghost" size="sm" onClick={() => navigate(`/requests/${item.id}`)}>View Details</Button>
              <Button variant="ghost" size="sm">View Logs</Button>
            </div>
          </Card>
        ))}
      </div>

      <h3 style={{ marginBottom: 'var(--space-4)' }}>Migration Queue</h3>
      <Card padding="none">
        <NotificationBanner variant="info">3 of 5 concurrent slots in use</NotificationBanner>
        <table className="data-table">
          <thead><tr><th>Position</th><th>Request ID</th><th>User</th><th>Type</th><th>Repository</th><th>Queued Since</th></tr></thead>
          <tbody>
            {QUEUE_ITEMS.map((q) => (<tr key={q.id}><td>#{q.pos}</td><td>#{q.id}</td><td>{q.user}</td><td>{q.type}</td><td>{q.repo}</td><td>{q.queued}</td></tr>))}
          </tbody>
        </table>
      </Card>
    </AppShell>
  );
};

export default MonitoringPage;
