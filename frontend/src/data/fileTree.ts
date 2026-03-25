import type { FileTreeNode, LogEntry } from '../types';

export const RST_FILE_TREE: FileTreeNode = {
  name: 'data/requirements/CC_EAL',
  type: 'folder',
  children: [
    {
      name: 'core',
      type: 'folder',
      children: [
        { name: 'REQ_Core.rst', type: 'file' },
        { name: 'REQ_Core_linking.json', type: 'file' },
        { name: 'conf.py', type: 'file' },
      ],
    },
    {
      name: 'safety',
      type: 'folder',
      children: [
        { name: 'REQ_Safety.rst', type: 'file' },
        { name: 'conf.py', type: 'file' },
      ],
    },
    {
      name: 'diag',
      type: 'folder',
      children: [
        { name: 'REQ_Diag.rst', type: 'file' },
        { name: 'conf.py', type: 'file' },
      ],
    },
  ],
};

export const SAMPLE_RST_HTML = `
<h1>Core Requirements — CC_EAL</h1>
<p class="subtitle">Software Requirements Specification</p>

<h2>Table of Contents</h2>
<ol>
  <li><a href="#intro">Introduction</a></li>
  <li><a href="#functional">Functional Requirements</a></li>
</ol>

<h2 id="intro">1. Introduction</h2>
<p>This document specifies the software requirements for the CC_EAL core module. It covers system initialization, diagnostic interface, and communication protocols required for the embedded control unit.</p>

<h2 id="functional">2. Functional Requirements</h2>
<table>
  <thead>
    <tr><th>Req ID</th><th>Title</th><th>Priority</th><th>Status</th></tr>
  </thead>
  <tbody>
    <tr><td>REQ-001</td><td>System Initialization</td><td>High</td><td>Approved</td></tr>
    <tr><td>REQ-002</td><td>Diagnostic Interface</td><td>Medium</td><td>Draft</td></tr>
    <tr><td>REQ-003</td><td>CAN Communication</td><td>High</td><td>Approved</td></tr>
    <tr><td>REQ-004</td><td>Watchdog Timer</td><td>High</td><td>Under Review</td></tr>
  </tbody>
</table>
`;

export const SAMPLE_RST_RAW = `Core Requirements — CC_EAL
==========================

Software Requirements Specification

.. contents:: Table of Contents
   :depth: 2

1. Introduction
---------------

This document specifies the software requirements for the CC_EAL core module.

2. Functional Requirements
--------------------------

.. list-table::
   :header-rows: 1

   * - Req ID
     - Title
     - Priority
     - Status
   * - REQ-001
     - System Initialization
     - High
     - Approved
   * - REQ-002
     - Diagnostic Interface
     - Medium
     - Draft
`;

export const LOG_ENTRIES_RUNNING: readonly LogEntry[] = [
  { timestamp: '14:30:05', level: 'INFO', message: 'Migration started for request #24' },
  { timestamp: '14:30:06', level: 'INFO', message: 'Running prechecks...' },
  { timestamp: '14:30:45', level: 'INFO', message: 'Prechecks passed. Starting Airflow DAG.' },
  { timestamp: '14:31:00', level: 'INFO', message: 'Task parse_reqif started' },
  { timestamp: '14:32:12', level: 'INFO', message: 'Task parse_reqif completed (1m 12s)' },
  { timestamp: '14:32:13', level: 'INFO', message: 'Task generate_linking_json started' },
  { timestamp: '14:32:58', level: 'INFO', message: 'Task generate_linking_json completed (0m 45s)' },
  { timestamp: '14:33:00', level: 'INFO', message: 'Task convert_to_rst started...' },
] as const;

export const LOG_ENTRIES_FAILED: readonly LogEntry[] = [
  { timestamp: '16:00:05', level: 'INFO', message: 'Migration started for request #22' },
  { timestamp: '16:00:10', level: 'INFO', message: 'Running prechecks...' },
  { timestamp: '16:00:30', level: 'INFO', message: 'Prechecks passed. Starting Airflow DAG.' },
  { timestamp: '16:01:00', level: 'INFO', message: 'Task parse_excel started' },
  { timestamp: '16:02:00', level: 'INFO', message: 'Task parse_excel completed' },
  { timestamp: '16:02:45', level: 'INFO', message: 'Starting convert_to_rst task...' },
  { timestamp: '16:02:46', level: 'INFO', message: 'Processing module1_ut_spec.xlsm...' },
  { timestamp: '16:03:12', level: 'ERROR', message: "Missing required columns: 'Test ID', 'Expected Result'" },
  { timestamp: '16:03:12', level: 'ERROR', message: 'Task convert_to_rst failed with exit code 1' },
] as const;
