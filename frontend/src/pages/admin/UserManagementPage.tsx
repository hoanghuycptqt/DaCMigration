import React from 'react';
import AppShell from '../../components/layout/AppShell';
import Card from '../../components/ui/Card';
import { ALL_USERS } from '../../data/users';
import './admin.css';

const UserManagementPage: React.FC = () => {
  return (
    <AppShell>
      <h1 className="page-title">User Management</h1>

      <Card padding="none">
        <div style={{ padding: 'var(--space-4)', borderBottom: '1px solid var(--border-default)' }}>
          <input type="text" className="form-input" placeholder="Search users by name or NTID..." style={{ maxWidth: 400 }} />
        </div>
        <table className="data-table">
          <thead><tr><th>Name</th><th>NTID</th><th>Email</th><th>Role</th><th>Status</th><th>Last Login</th><th>Migrations</th><th>Actions</th></tr></thead>
          <tbody>
            {ALL_USERS.map((u) => (
              <tr key={u.ntid} style={u.status === 'Blocked' ? { backgroundColor: 'var(--signal-error-light)' } : undefined}>
                <td style={{ fontWeight: 'var(--font-weight-medium)' }}>{u.name}</td>
                <td style={{ fontFamily: 'var(--font-family-mono)', fontSize: 'var(--font-size-xs)' }}>{u.ntid}</td>
                <td>{u.email}</td>
                <td>
                  <select className="form-input" defaultValue={u.role} style={{ width: 100, padding: '2px 6px', fontSize: 'var(--font-size-xs)', color: u.role === 'ADMIN' ? 'var(--accent-purple)' : 'var(--primary)', fontWeight: 600 }}>
                    <option value="USER">USER</option>
                    <option value="ADMIN">ADMIN</option>
                  </select>
                </td>
                <td>
                  <button className={`toggle ${u.status === 'Active' ? 'toggle--on' : ''}`} />
                  <span style={{ marginLeft: 'var(--space-2)', fontSize: 'var(--font-size-xs)', color: u.status === 'Active' ? 'var(--signal-success)' : 'var(--signal-error)', fontWeight: 600 }}>
                    {u.status}
                  </span>
                </td>
                <td>{u.lastLogin}</td>
                <td>{u.totalMigrations}</td>
                <td><a href="#" style={{ fontSize: 'var(--font-size-sm)' }}>View Requests</a></td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </AppShell>
  );
};

export default UserManagementPage;
