import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import AppShell from '../components/layout/AppShell';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { RST_FILE_TREE, SAMPLE_RST_HTML, SAMPLE_RST_RAW } from '../data/fileTree';
import type { FileTreeNode } from '../types';
import './RstPreviewPage.css';

const TreeItem: React.FC<{ node: FileTreeNode; depth: number; selected: string; onSelect: (n: string) => void }> = ({ node, depth, selected, onSelect }) => {
  const [open, setOpen] = useState(depth < 2);
  const isFile = node.type === 'file';
  const isSel = selected === node.name;
  return (
    <div>
      <div className={`tree-item ${isSel ? 'tree-item--selected' : ''}`} style={{ paddingLeft: `${depth * 16 + 8}px` }} onClick={() => { if (isFile) onSelect(node.name); else setOpen(!open); }}>
        <span>{isFile ? '📄' : open ? '📂' : '📁'}</span>
        <span className="tree-item__name">{node.name}</span>
      </div>
      {!isFile && open && node.children?.map((c) => <TreeItem key={c.name} node={c} depth={depth + 1} selected={selected} onSelect={onSelect} />)}
    </div>
  );
};

const RstPreviewPage: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedFile, setSelectedFile] = useState('REQ_Core.rst');
  const [activeTab, setActiveTab] = useState<'html' | 'raw'>('html');

  return (
    <AppShell>
      <div className="breadcrumb">
        <a href="/requests" onClick={(e) => { e.preventDefault(); navigate('/requests'); }}>My Requests</a>
        <span> › </span>
        <a href={`/requests/${id}`} onClick={(e) => { e.preventDefault(); navigate(`/requests/${id}`); }}>Request #{id}</a>
        <span> › </span>
        <span>RST Preview</span>
      </div>
      <h1 className="page-title">RST Preview — Request #{id}</h1>

      <Card padding="none" className="preview-split">
        <div className="preview-tree">
          <h3 style={{ padding: 'var(--space-3) var(--space-4)', borderBottom: '1px solid var(--border-default)' }}>File Tree</h3>
          <TreeItem node={RST_FILE_TREE} depth={0} selected={selectedFile} onSelect={setSelectedFile} />
        </div>
        <div className="preview-content">
          <div className="preview-tabs">
            <Button variant="ghost" size="sm" className={`preview-tab ${activeTab === 'html' ? 'preview-tab--active' : ''}`} onClick={() => setActiveTab('html')}>Rendered HTML</Button>
            <Button variant="ghost" size="sm" className={`preview-tab ${activeTab === 'raw' ? 'preview-tab--active' : ''}`} onClick={() => setActiveTab('raw')}>Raw RST</Button>
          </div>
          <div className="preview-body">
            {activeTab === 'html' ? (
              <div className="rst-rendered" dangerouslySetInnerHTML={{ __html: SAMPLE_RST_HTML }} />
            ) : (
              <pre className="rst-raw">{SAMPLE_RST_RAW}</pre>
            )}
          </div>
        </div>
      </Card>
    </AppShell>
  );
};

export default RstPreviewPage;
