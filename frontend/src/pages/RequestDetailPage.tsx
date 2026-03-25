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

const STEP_ICONS: Record<string, string> = {
  done: 'check_circle',
  active: 'sync',
  running: 'sync',
  failed: 'cancel',
  skipped: 'block',
  pending: 'radio_button_unchecked',
};

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

  const pipelineSteps = [
    { name: 'Queued', desc: 'Request submitted and queued for processing' },
    { name: 'Prechecking', desc: 'Validating input files and repository access' },
    { name: 'Running', desc: 'Executing migration pipeline tasks' },
    { name: 'Validating', desc: 'Post-migration validation and checks' },
    { name: 'Completed', desc: 'Migration finished and committed' },
  ];

  const getStepState = (i: number) => {
    if (isCompleted) return 'done';
    if (i < 2) return 'done';
    if (i === 2 && isRunning) return 'active';
    if (i === 2 && isFailed) return 'failed';
    if (isFailed && i > 2) return 'skipped';
    return 'pending';
  };

  return (
    <AppShell>
      {/* Header */}
      <div className="detail-header">
        <h1 className="page-title">Migration Request #{request.id}</h1>
        <StatusBadge status={request.status} />
      </div>

      {/* Status Banners */}
      {isCompleted && (
        <NotificationBanner variant="success">
          Migration completed successfully in {request.duration}. All files have been committed to the target repository.
        </NotificationBanner>
      )}
      {isFailed && (
        <NotificationBanner variant="error">
          Migration failed at step <strong>convert_to_rst</strong> after {request.duration}. Review the log output below for details.
        </NotificationBanner>
      )}

      {/* Summary Card */}
      <Card className="detail-summary">
        <h3 className="detail-summary__title">Request Information</h3>
        <div className="detail-summary__grid">
          <div className="detail-summary__item">
            <span className="detail-summary__label">
              <span className="material-symbols-outlined">category</span> Type
            </span>
            <span className="detail-summary__value">{request.typeTitle}</span>
          </div>
          <div className="detail-summary__item">
            <span className="detail-summary__label">
              <span className="material-symbols-outlined">folder</span> Repository
            </span>
            <span className="detail-summary__value detail-summary__value--mono">
              <a href="#">{request.repository}</a>
            </span>
          </div>
          <div className="detail-summary__item">
            <span className="detail-summary__label">
              <span className="material-symbols-outlined">fork_right</span> Branch
            </span>
            <span className="detail-summary__value detail-summary__value--mono">{request.branch}</span>
          </div>
          <div className="detail-summary__item">
            <span className="detail-summary__label">
              <span className="material-symbols-outlined">inventory_2</span> SW Package
            </span>
            <span className="detail-summary__value">{request.swPackage}</span>
          </div>
          <div className="detail-summary__item">
            <span className="detail-summary__label">
              <span className="material-symbols-outlined">person</span> Requested By
            </span>
            <span className="detail-summary__value">{request.user}</span>
          </div>
          <div className="detail-summary__item">
            <span className="detail-summary__label">
              <span className="material-symbols-outlined">schedule</span> Started
            </span>
            <span className="detail-summary__value">{request.startedAt ?? '—'}</span>
          </div>
          {request.completedAt && (
            <div className="detail-summary__item">
              <span className="detail-summary__label">
                <span className="material-symbols-outlined">event_available</span> Completed
              </span>
              <span className="detail-summary__value">{request.completedAt}</span>
            </div>
          )}
          <div className="detail-summary__item">
            <span className="detail-summary__label">
              <span className="material-symbols-outlined">timer</span> Duration
            </span>
            <span className="detail-summary__value">{request.duration ?? '—'}</span>
          </div>
        </div>
      </Card>

      {/* Execution Progress */}
      <Card className="detail-progress">
        <h3 className="detail-progress__title">Execution Progress</h3>
        <div className="vertical-stepper">
          {pipelineSteps.map((step, i) => {
            const state = getStepState(i);
            return (
              <div key={step.name} className={`v-step v-step--${state}`}>
                <div className="v-step__icon">
                  <span className="material-symbols-outlined">
                    {STEP_ICONS[state]}
                  </span>
                </div>
                <div className="v-step__content">
                  <span className="v-step__label">
                    {step.name}
                    {state === 'active' && <span className="v-step__time">In progress...</span>}
                    {state === 'done' && i < 2 && <span className="v-step__time">Done</span>}
                  </span>

                  {/* Subtasks for the Running step */}
                  {i === 2 && (state === 'active' || state === 'failed' || state === 'done') && (
                    <div className="v-step__subtasks">
                      {runningTasks.map((t, j) => (
                        <div key={j} className={`subtask subtask--${t.status}`}>
                          <span className="material-symbols-outlined subtask__icon">
                            {t.status === 'done' ? 'check_circle' : t.status === 'running' ? 'sync' : t.status === 'failed' ? 'error' : 'pending'}
                          </span>
                          <span className="subtask__name">{t.label}</span>
                          <span className="subtask__time">{t.time}</span>
                        </div>
                      ))}
                      {runningTasks.some(t => t.status === 'failed') && (
                        <div className="subtask__error">
                          Missing required columns: 'Test ID', 'Expected Result'
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </Card>

      {/* Log Viewer */}
      <Card className="detail-logs" padding="none">
        <button className="logs-toggle" onClick={() => setLogsOpen(!logsOpen)}>
          <span className="material-symbols-outlined">terminal</span>
          {logsOpen ? 'Hide' : 'View'} Execution Logs
          <span className="material-symbols-outlined" style={{ marginLeft: 'auto', fontSize: 18 }}>
            {logsOpen ? 'expand_less' : 'expand_more'}
          </span>
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

      {/* Action Bar */}
      <div className="detail-actions">
        {isCompleted && (
          <>
            <Button variant="primary" onClick={() => navigate(`/requests/${request.id}/preview`)}>
              <span className="material-symbols-outlined" style={{ fontSize: 16, marginRight: 4 }}>preview</span>
              Preview RST Output
            </Button>
            <Button variant="danger">
              <span className="material-symbols-outlined" style={{ fontSize: 16, marginRight: 4 }}>undo</span>
              Rollback Migration
            </Button>
          </>
        )}
        {isFailed && (
          <>
            <Button variant="primary">
              <span className="material-symbols-outlined" style={{ fontSize: 16, marginRight: 4 }}>replay</span>
              Retry Migration
            </Button>
            <Button variant="ghost">
              <span className="material-symbols-outlined" style={{ fontSize: 16, marginRight: 4 }}>bug_report</span>
              View Error Details
            </Button>
          </>
        )}
        {isRunning && (
          <span className="text-muted" style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
            <span className="material-symbols-outlined" style={{ fontSize: 18, animation: 'pulse 1.5s infinite' }}>sync</span>
            Migration in progress...
          </span>
        )}
      </div>
    </AppShell>
  );
};

export default RequestDetailPage;
