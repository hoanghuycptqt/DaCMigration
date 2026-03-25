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
      <footer className="app-shell__footer">
        <span>v1.0.0</span>
        <span>© Robert Bosch GmbH</span>
      </footer>
    </div>
  );
};

export default AppShell;
