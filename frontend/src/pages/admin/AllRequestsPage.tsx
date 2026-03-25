import React from 'react';
import { useNavigate } from 'react-router-dom';
import AppShell from '../../components/layout/AppShell';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import { StatusBadge } from '../../components/ui/Badge';
import { SAMPLE_REQUESTS } from '../../data/migrations';
import './admin.css';

const AllRequestsPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <AppShell>
      <div className="page-header">
        <h1 className="page-title">All Migration Requests</h1>
        <Button variant="ghost">Export as CSV</Button>
      </div>

      <Card padding="none" className="requests-table-card">
        <div className="requests-filter-bar">
          <select className="form-input" style={{ width: 140 }}><option>All Users</option></select>
          <select className="form-input" style={{ width: 140 }}><option>All Types</option></select>
          <select className="form-input" style={{ width: 140 }}><option>All Statuses</option></select>
          <input type="date" className="form-input" style={{ width: 150 }} />
          <input type="text" className="form-input" placeholder="Search..." style={{ flex: 1 }} />
        </div>
        <table className="data-table">
          <thead><tr><th>ID ↕</th><th>User ↕</th><th>Type</th><th>Repository</th><th>Branch</th><th>Status</th><th>Started ↕</th><th>Duration</th><th>Actions</th></tr></thead>
          <tbody>
            {SAMPLE_REQUESTS.map((r) => (
              <tr key={r.id} className="clickable-row" onClick={() => navigate(`/requests/${r.id}`)}>
                <td>#{r.id}</td>
                <td>{r.user}</td>
                <td>{r.typeTitle}</td>
                <td className="repo-cell">{r.repository.split('/').pop()}</td>
                <td className="branch-cell">{r.branch.split('/').pop()}</td>
                <td><StatusBadge status={r.status} /></td>
                <td>{r.startedAt ?? '—'}</td>
                <td>{r.duration ?? '—'}</td>
                <td><Button variant="ghost" size="sm" onClick={() => navigate(`/requests/${r.id}`)}><span className="material-symbols-outlined" style={{fontSize: 16}}>visibility</span></Button></td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="table-pagination"><span>1 2 3</span><span>Items per page: 10</span></div>
      </Card>
    </AppShell>
  );
};

export default AllRequestsPage;
