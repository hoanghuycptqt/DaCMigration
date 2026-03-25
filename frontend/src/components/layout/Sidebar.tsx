import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import type { SidebarItem } from '../../types';
import { CURRENT_USER } from '../../data/users';
import './Sidebar.css';

const USER_MENU: SidebarItem[] = [
  { icon: '⌂', label: 'Home', path: '/' },
  { icon: '+', label: 'New Migration', path: '/wizard' },
  { icon: '☰', label: 'My Requests', path: '/requests' },
  { icon: 'ⓘ', label: 'Help', path: '/help' },
];

const ADMIN_MENU: SidebarItem[] = [
  { icon: '▦', label: 'Dashboard', path: '/admin', adminOnly: true },
  { icon: '◫', label: 'All Requests', path: '/admin/requests', adminOnly: true },
  { icon: '⟳', label: 'Monitoring', path: '/admin/monitoring', adminOnly: true },
  { icon: '◩', label: 'Statistics', path: '/admin/statistics', adminOnly: true },
  { icon: '⚇', label: 'Users', path: '/admin/users', adminOnly: true },
  { icon: '♥', label: 'System Health', path: '/admin/health', adminOnly: true },
];

interface SidebarProps {
  readonly className?: string;
}

export const Sidebar: React.FC<SidebarProps> = ({ className = '' }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const isAdmin = CURRENT_USER.role === 'ADMIN';

  const isActive = (path: string) => {
    if (path === '/' || path === '/admin') return location.pathname === path;
    return location.pathname.startsWith(path);
  };

  return (
    <aside className={`sidebar ${className}`}>
      <nav className="sidebar__nav">
        {USER_MENU.map((item) => (
          <button
            key={item.path}
            className={`sidebar__item ${isActive(item.path) ? 'sidebar__item--active' : ''}`}
            onClick={() => navigate(item.path)}
          >
            <span className="sidebar__icon">{item.icon}</span>
            <span className="sidebar__label">{item.label}</span>
          </button>
        ))}

        {isAdmin && (
          <>
            <div className="sidebar__divider">
              <span className="sidebar__divider-label">ADMINISTRATION</span>
            </div>
            {ADMIN_MENU.map((item) => (
              <button
                key={item.path}
                className={`sidebar__item ${isActive(item.path) ? 'sidebar__item--active' : ''}`}
                onClick={() => navigate(item.path)}
              >
                <span className="sidebar__icon">{item.icon}</span>
                <span className="sidebar__label">{item.label}</span>
              </button>
            ))}
          </>
        )}
      </nav>
    </aside>
  );
};

export default Sidebar;
