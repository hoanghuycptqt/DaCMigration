import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import type { SidebarItem } from '../../types';
import { CURRENT_USER } from '../../data/users';
import './Sidebar.css';

const USER_MENU: SidebarItem[] = [
  { icon: 'home', label: 'Home', path: '/' },
  { icon: 'add_circle', label: 'New Migration', path: '/wizard' },
  { icon: 'folder_shared', label: 'My Space', path: '/requests' },
];

const ADMIN_MENU: SidebarItem[] = [
  { icon: 'dashboard', label: 'Dashboard', path: '/admin', adminOnly: true },
  { icon: 'list_alt', label: 'All Requests', path: '/admin/requests', adminOnly: true },
  { icon: 'monitor_heart', label: 'Monitoring', path: '/admin/monitoring', adminOnly: true },
  { icon: 'bar_chart', label: 'Statistics', path: '/admin/statistics', adminOnly: true },
  { icon: 'group', label: 'Users', path: '/admin/users', adminOnly: true },
  { icon: 'favorite', label: 'System Health', path: '/admin/health', adminOnly: true },
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
            <span className="material-symbols-outlined sidebar__icon"
              style={isActive(item.path) ? { fontVariationSettings: "'FILL' 1" } : undefined}
            >{item.icon}</span>
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
                <span className="material-symbols-outlined sidebar__icon">{item.icon}</span>
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

