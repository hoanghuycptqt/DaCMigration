/* ── Types for DaC Migration Portal ── */

export type MigrationStatus = 'QUEUED' | 'RUNNING' | 'COMPLETED' | 'FAILED' | 'SCHEDULED' | 'CANCELLED';

export type MigrationType =
  | 'sw-architecture'
  | 'doors-requirements'
  | 'dng-requirements'
  | 'doors-dsd'
  | 'dng-dsd'
  | 'rhapsody-dsd'
  | 'testspec';

export type UserRole = 'USER' | 'ADMIN';

export interface MigrationTypeInfo {
  readonly id: MigrationType;
  readonly order: number;
  readonly title: string;
  readonly subtitle: string;
  readonly badge: 'Automated' | 'Manual Upload';
  readonly description: string;
}

export interface MigrationRequest {
  readonly id: number;
  readonly type: MigrationType;
  readonly typeTitle: string;
  readonly repository: string;
  readonly branch: string;
  readonly status: MigrationStatus;
  readonly startedAt: string | null;
  readonly completedAt: string | null;
  readonly duration: string | null;
  readonly user: string;
  readonly swPackage: string;
}

export interface User {
  readonly name: string;
  readonly ntid: string;
  readonly email: string;
  readonly role: UserRole;
  readonly status: 'Active' | 'Blocked';
  readonly lastLogin: string;
  readonly totalMigrations: number;
}

export interface HealthService {
  readonly name: string;
  readonly healthy: boolean;
  readonly responseMs: number | null;
  readonly lastChecked: string;
  readonly error?: string;
}

export interface WizardStepDef {
  readonly id: number;
  readonly label: string;
  readonly key: string;
}

export interface SidebarItem {
  readonly icon: string;
  readonly label: string;
  readonly path: string;
  readonly adminOnly?: boolean;
}

export interface FileTreeNode {
  readonly name: string;
  readonly type: 'file' | 'folder';
  readonly children?: FileTreeNode[];
}

export interface LogEntry {
  readonly timestamp: string;
  readonly level: 'INFO' | 'ERROR' | 'WARN';
  readonly message: string;
}

export interface MappingRow {
  readonly status: 'complete' | 'incomplete';
  readonly sourceModule: string;
  readonly gitPath: string;
  readonly rstPrefix?: string;
}

export interface ChartDataPoint {
  readonly label: string;
  readonly value: number;
}

export interface ActivityItem {
  readonly user: string;
  readonly action: string;
  readonly type: string;
  readonly timeAgo: string;
}

export interface DoorsModule {
  readonly moduleName: string;
  readonly doorsPath: string;
  readonly baselineVersion: string;
}

export interface DngModuleUrl {
  readonly url: string;
}
