import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import AppShell from '../components/layout/AppShell';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { StatusBadge } from '../components/ui/Badge';
import NotificationBanner from '../components/feedback/NotificationBanner';
import { getRequestById } from '../data/migrations';
import { LOG_ENTRIES_RUNNING, LOG_ENTRIES_FAILED } from '../data/fileTree';
import './RequestDetailPage.css';

const RequestDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const request = getRequestById(Number(id));
  const [logsOpen, setLogsOpen] = useState(request?.status === 'FAILED');

  if (!request) return <AppShell><p>Request not found.</p></AppShell>;

  const logs = request.status === 'FAILED' ? LOG_ENTRIES_FAILED : LOG_ENTRIES_RUNNING;
  const isRunning = request.status === 'RUNNING';
  const isCompleted = request.status === 'COMPLETED';
  const isFailed = request.status === 'FAILED';

  const runningTasks = [
    { label: 'parse_reqif', time: '1m 12s', status: 'done' as const },
    { label: 'generate_linking_json', time: '0m 45s', status: 'done' as const },
    { label: 'convert_to_rst', time: '1m 30s', status: isRunning ? 'running' : isFailed ? 'failed' : 'done' as const },
    { label: 'commit_to_github', time: '—', status: isCompleted ? 'done' : 'pending' as const },
    { label: 'run_postcheck', time: '—', status: isCompleted ? 'done' : 'pending' as const },
  ];

  return (
    <AppShell>
      <div className="breadcrumb">
        <a href="/requests" onClick={(e) => { e.preventDefault(); navigate('/requests'); }}>My Requests</a>
        <span> › </span>
        <span>Request #{request.id}</span>
      </div>

      <div className="detail-header">
        <h1 className="page-title">Migration Request #{request.id}</h1>
        <StatusBadge status={request.status} />
      </div>

      {isCompleted && <NotificationBanner variant="success">Migration completed successfully in {request.duration}</NotificationBanner>}
      {isFailed && <NotificationBanner variant="error">Migration failed at step 'convert_to_rst' after {request.duration}</NotificationBanner>}

      <Card className="detail-summary">
        <div className="detail-summary__grid">
          <div><span className="detail-summary__label">Type</span><span className="detail-summary__value">{request.typeTitle}</span></div>
          <div><span className="detail-summary__label">Repository</span><span className="detail-summary__value"><a href="#">{request.repository}</a></span></div>
          <div><span className="detail-summary__label">Branch</span><span className="detail-summary__value">{request.branch}</span></div>
          <div><span className="detail-summary__label">SW Package</span><span className="detail-summary__value">{request.swPackage}</span></div>
          <div><span className="detail-summary__label">By</span><span className="detail-summary__value">{request.user}</span></div>
          <div><span className="detail-summary__label">Started</span><span className="detail-summary__value">{request.startedAt ?? '—'}</span></div>
          {request.completedAt && <div><span className="detail-summary__label">Completed</span><span className="detail-summary__value">{request.completedAt}</span></div>}
          <div><span className="detail-summary__label">Duration</span><span className="detail-summary__value">{request.duration ?? '—'}</span></div>
        </div>
      </Card>

      <Card className="detail-progress">
        <h3 style={{marginBottom: 'var(--space-4)'}}>Execution Progress</h3>
        <div className="vertical-stepper">
          {['Queued', 'Prechecking', 'Running', 'Validating', 'Completed'].map((step, i) => {
            const done = isCompleted ? true : i < 2;
            const active = isRunning && i === 2;
            const failed = isFailed && i === 2;
            const skipped = isFailed && i > 2;
            return (
              <div key={step} className={`v-step ${done ? 'v-step--done' : ''} ${active ? 'v-step--active' : ''} ${failed ? 'v-step--failed' : ''} ${skipped ? 'v-step--skipped' : ''}`}>
                <div className="v-step__icon">
                  {done ? '✅' : active ? '🔵' : failed ? '❌' : skipped ? '⏭️' : '⏳'}
                </div>
                <div className="v-step__content">
                  <span className="v-step__label">{step}</span>
                  {i === 2 && (active || failed || done) && (
                    <div className="v-step__subtasks">
                      {runningTasks.map((t, j) => (
                        <div key={j} className={`subtask subtask--${t.status}`}>
                          <span>{t.status === 'done' ? '✅' : t.status === 'running' ? '🔵' : t.status === 'failed' ? '❌' : '⏳'}</span>
                          <span>{t.label}</span>
                          <span className="subtask__time">{t.time}</span>
                          {t.status === 'failed' && <span className="subtask__error">Missing required columns: 'Test ID', 'Expected Result'</span>}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </Card>

      <Card className="detail-logs" padding="none">
        <button className="logs-toggle" onClick={() => setLogsOpen(!logsOpen)}>
          📋 {logsOpen ? 'Hide' : 'View'} Logs {logsOpen ? '▲' : '▼'}
        </button>
        {logsOpen && (
          <div className="log-viewer">
            {logs.map((entry, i) => (
              <div key={i} className={`log-line log-line--${entry.level.toLowerCase()}`}>
                <span className="log-line__ts">[{entry.timestamp}]</span>
                <span className="log-line__level">{entry.level}:</span>
                <span>{entry.message}</span>
              </div>
            ))}
          </div>
        )}
      </Card>

      <div className="detail-actions">
        {isCompleted && <><Button variant="ghost" onClick={() => navigate(`/requests/${request.id}/preview`)}>Preview RST Output</Button><Button variant="danger">Rollback Migration</Button></>}
        {isFailed && <><Button variant="primary">Retry Migration</Button><Button variant="ghost">View Error Details</Button></>}
        {isRunning && <span className="text-muted">Migration in progress...</span>}
      </div>
    </AppShell>
  );
};

export default RequestDetailPage;
