import type { WizardStepDef } from '../types';

export const WIZARD_STEPS: readonly WizardStepDef[] = [
  { id: 1, label: 'Select Type', key: 'select-type' },
  { id: 2, label: 'Repository', key: 'repository' },
  { id: 3, label: 'Source Config', key: 'source-config' },
  { id: 4, label: 'Upload / Export', key: 'upload' },
  { id: 5, label: 'Mapping', key: 'mapping' },
  { id: 6, label: 'Review', key: 'review' },
  { id: 7, label: 'Execute', key: 'execute' },
  { id: 8, label: 'Monitor', key: 'monitor' },
] as const;

/* ── DOORS module configs (Types 2 & 4) ── */
export const DOORS_REQ_MODULES = [
  { moduleName: 'SWR_CC_EAL_Core', doorsPath: '/DOORS/Projects/CC_EAL/SWR/Core', baselineVersion: 'v2.3' },
  { moduleName: 'SWR_CC_EAL_Diag', doorsPath: '/DOORS/Projects/CC_EAL/SWR/Diag', baselineVersion: 'v1.8' },
];

export const DOORS_DSD_MODULES = [
  { moduleName: 'DSD_CC_EAL_Core', doorsPath: '/DOORS/Projects/CC_EAL/DSD/Core', baselineVersion: 'v3.1' },
  { moduleName: 'DSD_CC_EAL_Interface', doorsPath: '/DOORS/Projects/CC_EAL/DSD/Interface', baselineVersion: 'v2.0' },
];

/* ── DNG module URLs (Types 3 & 5) ── */
export const DNG_REQ_URLS = [
  'https://dng.bosch.com/rm/resources/module_A',
  'https://dng.bosch.com/rm/resources/module_B',
];

export const DNG_DSD_URLS = [
  'https://dng.bosch.com/rm/resources/dsd_module_A',
  'https://dng.bosch.com/rm/resources/dsd_module_B',
];

/* ── Rhapsody modules (Type 6) ── */
export const RHAPSODY_MODULES = [
  { moduleName: 'CC_EAL_StateMachine', targetFolder: '/dsd/statemachine/', version: 'v8.4.1' },
  { moduleName: 'CC_EAL_ClassDiagram', targetFolder: '/dsd/classdiagram/', version: 'v8.4.1' },
];

/* ── TestSpec modules (Type 7) ── */
export const TESTSPEC_MODULES = [
  { moduleName: 'CC_EAL_Core', targetFolder: '/testspec/core/', utVersion: 'v2.1', swqtVersion: 'v1.5', sysqtVersion: 'v1.0' },
  { moduleName: 'CC_EAL_Diag', targetFolder: '/testspec/diag/', utVersion: 'v1.8', swqtVersion: 'v1.2', sysqtVersion: '—' },
];

/* ── SW Architecture rows (Type 1) ── */
export const SW_ARCH_ROWS = [
  { needType: 'SW_ARCH', title: 'CC_EAL_Core', elementClass: 'SwArchPkg', longName: 'Core Module', responsible: 'user1', description: 'Main core module', parent: '-', dir: '/core' },
  { needType: 'SW_ARCH', title: 'CC_EAL_Diag', elementClass: 'SwArchSubPkg', longName: 'Diagnostics', responsible: 'user2', description: 'Diagnostics sub-package', parent: 'CC_EAL_Core', dir: '/diag' },
];

/* ── Mapping data ── */
export const DNG_MAPPING_ROWS = [
  { status: 'complete' as const, sourceModule: 'Module_CoreRequirements', gitPath: 'data/requirements/CC_EAL/', rstPrefix: 'REQ_Core' },
  { status: 'complete' as const, sourceModule: 'Module_SafetyRequirements', gitPath: 'data/requirements/CC_EAL/', rstPrefix: 'REQ_Safety' },
  { status: 'complete' as const, sourceModule: 'Module_DiagRequirements', gitPath: 'data/requirements/CC_EAL/', rstPrefix: 'REQ_Diag' },
  { status: 'incomplete' as const, sourceModule: 'Module_InterfaceSpec', gitPath: '', rstPrefix: '' },
];

export const DOORS_MAPPING_ROWS = [
  { status: 'complete' as const, sourceModule: 'SWR_CC_EAL_Core', gitPath: 'data/requirements/CC_EAL/' },
  { status: 'complete' as const, sourceModule: 'SWR_CC_EAL_Diag', gitPath: 'data/requirements/CC_EAL/' },
];

export const UPLOADED_FILES = [
  { name: 'module_A.reqifz', size: '12.3 MB', progress: 100, status: 'Uploaded' as const },
  { name: 'module_B.reqifz', size: '8.7 MB', progress: 100, status: 'Uploaded' as const },
  { name: 'diagram_overview.png', size: '2.1 MB', progress: 65, status: 'Uploading' as const },
];
