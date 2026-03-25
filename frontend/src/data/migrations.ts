import type { MigrationTypeInfo, MigrationRequest } from '../types';

export const MIGRATION_TYPES: readonly MigrationTypeInfo[] = [
  {
    id: 'sw-architecture',
    order: 1,
    title: 'SW Architecture',
    subtitle: 'From Excel/Template',
    badge: 'Manual Upload',
    description: 'Define software architecture hierarchy from Excel or template',
  },
  {
    id: 'doors-requirements',
    order: 2,
    title: 'DOORS Requirements',
    subtitle: 'From IBM DOORS via ReqIF',
    badge: 'Automated',
    description: 'Export requirements from DOORS and convert to RST',
  },
  {
    id: 'dng-requirements',
    order: 3,
    title: 'DNG Requirements',
    subtitle: 'From IBM DNG',
    badge: 'Manual Upload',
    description: 'Upload DNG ReqIF exports and convert to RST',
  },
  {
    id: 'doors-dsd',
    order: 4,
    title: 'DOORS DSD',
    subtitle: 'From IBM DOORS via ReqIF',
    badge: 'Automated',
    description: 'Export DSD from DOORS and convert to RST',
  },
  {
    id: 'dng-dsd',
    order: 5,
    title: 'DNG DSD',
    subtitle: 'From IBM DNG',
    badge: 'Manual Upload',
    description: 'Upload DNG DSD exports and convert to RST',
  },
  {
    id: 'rhapsody-dsd',
    order: 6,
    title: 'Rhapsody DSD',
    subtitle: 'From IBM Rhapsody via SDOM',
    badge: 'Manual Upload',
    description: 'Migrate Rhapsody design documents to RST',
  },
  {
    id: 'testspec',
    order: 7,
    title: 'TestSpec',
    subtitle: 'From Excel Test Specifications',
    badge: 'Manual Upload',
    description: 'Convert Excel test specifications to RST format',
  },
] as const;

export const SAMPLE_REQUESTS: readonly MigrationRequest[] = [
  {
    id: 24,
    type: 'dng-requirements',
    typeTitle: 'DNG Requirements',
    repository: 'bosch-engineering/sw-pkg-cc-eal-dac',
    branch: 'migration/dng-requirements-2024',
    status: 'RUNNING',
    startedAt: '2024-03-20 14:30',
    completedAt: null,
    duration: '5m 12s',
    user: 'Nguyen Van A',
    swPackage: 'CC_EAL',
  },
  {
    id: 23,
    type: 'doors-requirements',
    typeTitle: 'DOORS Requirements',
    repository: 'bosch-engineering/sw-pkg-cc-eal-dac',
    branch: 'migration/doors-requirements-2024',
    status: 'COMPLETED',
    startedAt: '2024-03-20 10:15',
    completedAt: '2024-03-20 10:28',
    duration: '12m 45s',
    user: 'Tran Thi B',
    swPackage: 'CC_EAL',
  },
  {
    id: 22,
    type: 'testspec',
    typeTitle: 'TestSpec',
    repository: 'bosch-engineering/sw-pkg-cc-eal-dac',
    branch: 'migration/testspec-2024',
    status: 'FAILED',
    startedAt: '2024-03-19 16:00',
    completedAt: null,
    duration: '3m 22s',
    user: 'Le Van C',
    swPackage: 'CC_EAL',
  },
  {
    id: 21,
    type: 'rhapsody-dsd',
    typeTitle: 'Rhapsody DSD',
    repository: 'bosch-engineering/sw-pkg-cc-hal-dac',
    branch: 'migration/rhapsody-dsd',
    status: 'SCHEDULED',
    startedAt: null,
    completedAt: null,
    duration: null,
    user: 'Pham Thi D',
    swPackage: 'CC_HAL',
  },
  {
    id: 20,
    type: 'dng-dsd',
    typeTitle: 'DNG DSD',
    repository: 'bosch-engineering/sw-pkg-cc-eal-dac',
    branch: 'migration/dng-dsd-2024',
    status: 'COMPLETED',
    startedAt: '2024-03-18 09:00',
    completedAt: '2024-03-18 09:08',
    duration: '8m 30s',
    user: 'Hoang Van E',
    swPackage: 'CC_EAL',
  },
] as const;

export function getRequestById(id: number): MigrationRequest | undefined {
  return SAMPLE_REQUESTS.find((r) => r.id === id);
}

export function getTypeTitle(typeId: string): string {
  return MIGRATION_TYPES.find((t) => t.id === typeId)?.title ?? typeId;
}
