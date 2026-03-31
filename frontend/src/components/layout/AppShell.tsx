import React from 'react';
import AppHeader from './AppHeader';
import Sidebar from './Sidebar';
import './AppShell.css';

interface AppShellProps {
  readonly children: React.ReactNode;
  readonly className?: string;
}

export const AppShell: React.FC<AppShellProps> = ({ children, className = '' }) => {
  return (
    <div className={`app-shell ${className}`}>
      <AppHeader />
      <Sidebar />
      <main className="app-shell__content">
        {children}
      </main>
    </div>
  );
};

export default AppShell;
