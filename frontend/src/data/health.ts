import type { HealthService } from '../types';

export const HEALTH_SERVICES: readonly HealthService[] = [
  {
    name: 'Windows Server — Precheck',
    healthy: false,
    responseMs: null,
    lastChecked: '1 min ago',
    error: 'Connection timeout after 30s — Server not responding at 10.0.1.25:8443',
  },
  {
    name: 'Airflow Server',
    healthy: true,
    responseMs: 45,
    lastChecked: '2 min ago',
  },
  {
    name: 'Windows Server — ReqIF Parser',
    healthy: true,
    responseMs: 120,
    lastChecked: '2 min ago',
  },
  {
    name: 'Windows Server — Postcheck',
    healthy: true,
    responseMs: 95,
    lastChecked: '2 min ago',
  },
  {
    name: 'Windows Server — DOORS Export',
    healthy: true,
    responseMs: 200,
    lastChecked: '2 min ago',
  },
  {
    name: 'GitHub Enterprise',
    healthy: true,
    responseMs: 35,
    lastChecked: '2 min ago',
  },
  {
    name: 'MySQL Database',
    healthy: true,
    responseMs: 12,
    lastChecked: '2 min ago',
  },
  {
    name: 'SMTP Server',
    healthy: true,
    responseMs: 78,
    lastChecked: '2 min ago',
  },
] as const;
