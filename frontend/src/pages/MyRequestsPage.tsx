import React from 'react';
import { useNavigate } from 'react-router-dom';
import AppShell from '../components/layout/AppShell';
import Card from '../components/ui/Card';
import { StatusBadge } from '../components/ui/Badge';
import { SAMPLE_REQUESTS } from '../data/migrations';
import './MyRequestsPage.css';

const MyRequestsPage: React.FC = () => {
  const navigate = useNavigate();
  const stats = {
    total: SAMPLE_REQUESTS.length,
    running: SAMPLE_REQUESTS.filter((r) => r.status === 'RUNNING').length,
    completed: SAMPLE_REQUESTS.filter((r) => r.status === 'COMPLETED').length,
    failed: SAMPLE_REQUESTS.filter((r) => r.status === 'FAILED').length,
  };

  return (
    <AppShell>
      <h1 className="page-title">My Migration Requests</h1>

      <div className="stats-row">
        <Card className="stat-card"><span className="stat-card__label">Total Migrations</span><span className="stat-card__value stat-card__value--primary">{stats.total}</span></Card>
        <Card className="stat-card"><span className="stat-card__label">Running</span><span className="stat-card__value stat-card__value--primary">{stats.running}</span></Card>
        <Card className="stat-card"><span className="stat-card__label">Completed</span><span className="stat-card__value stat-card__value--success">{stats.completed}</span></Card>
        <Card className="stat-card"><span className="stat-card__label">Failed</span><span className="stat-card__value stat-card__value--error">{stats.failed}</span></Card>
      </div>

      <Card className="requests-table-card" padding="none">
        <div className="requests-filter-bar">
          <select className="form-input" style={{ width: 160 }}><option>All Types</option></select>
          <select className="form-input" style={{ width: 140 }}><option>All Statuses</option></select>
          <input type="date" className="form-input" style={{ width: 150 }} />
          <input type="text" className="form-input" placeholder="Search..." style={{ flex: 1 }} />
        </div>
        <table className="data-table">
          <thead><tr><th>ID</th><th>Type</th><th>Repository</th><th>Branch</th><th>Status</th><th>Started</th><th>Duration</th><th>Actions</th></tr></thead>
          <tbody>
            {SAMPLE_REQUESTS.map((r) => (
              <tr key={r.id} className="clickable-row" onClick={() => navigate(`/requests/${r.id}`)}>
                <td>#{r.id}</td>
                <td>{r.typeTitle}</td>
                <td className="repo-cell">{r.repository.split('/').pop()}</td>
                <td className="branch-cell">{r.branch.split('/').pop()}</td>
                <td><StatusBadge status={r.status} /></td>
                <td>{r.startedAt ?? '—'}</td>
                <td>{r.duration ?? '—'}</td>
                <td><button className="action-icon" onClick={(e) => { e.stopPropagation(); navigate(`/requests/${r.id}`); }}>👁️</button></td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="table-pagination">
          <span>1 2 3</span>
          <span>Items per page: 10</span>
        </div>
      </Card>
    </AppShell>
  );
};

export default MyRequestsPage;
