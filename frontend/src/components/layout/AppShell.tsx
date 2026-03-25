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
        <div className="app-shell__footer-inner">
          <div className="app-shell__footer-left">
            <span className="app-shell__footer-copyright">© 2026 Robert Bosch GmbH — DaC Migration Portal v0.1</span>
          </div>
          <div className="app-shell__footer-links">
            <a href="#">Legal Notice</a>
            <a href="#">Data Protection</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AppShell;
