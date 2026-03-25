import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CURRENT_USER } from '../../data/users';
import boschLogo from '../../assets/bosch-logo.svg';
import './AppHeader.css';

interface AppHeaderProps {
  readonly className?: string;
}

/** Get initials like Microsoft Teams — first letter of first name + first letter of last name */
function getInitials(name: string): string {
  // Filter to only alphabetic words (ignore department codes like "(MS/EET22)")
  const parts = name.trim().split(/\s+/).filter(w => /^[a-zA-Z]/.test(w));
  if (parts.length === 0) return '??';
  if (parts.length === 1) return parts[0].substring(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

export const AppHeader: React.FC<AppHeaderProps> = ({ className = '' }) => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const initials = getInitials(CURRENT_USER.name);
  const isAdmin = CURRENT_USER.role === 'ADMIN';

  return (
    <>
      <div className="bosch-supergraphic" />
      <header className={`app-header ${className}`}>
        <div className="app-header__left" onClick={() => navigate('/')} role="button" tabIndex={0}>
          <img src={boschLogo} alt="Bosch" className="app-header__logo" />
          <span className="app-header__divider" />
          <span className="app-header__title">DaC Migration Portal</span>
        </div>

        <div className="app-header__right">
          {/* User avatar + dropdown */}
          <div className="app-header__user-menu" ref={menuRef}>
            <button
              className="app-header__user-trigger"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-expanded={menuOpen}
              aria-haspopup="true"
            >
              <div className={`app-header__avatar ${isAdmin ? 'app-header__avatar--admin' : ''}`}>
                {initials}
              </div>
              <span className="app-header__user-name">{CURRENT_USER.name}</span>
              <span className="material-symbols-outlined app-header__chevron">
                {menuOpen ? 'expand_less' : 'expand_more'}
              </span>
            </button>

            {menuOpen && (
              <div className="app-header__dropdown">
                {/* User info header */}
                <div className="dropdown__user-info">
                  <div className="dropdown__user-details">
                    <span className="dropdown__user-name">{CURRENT_USER.name}</span>
                    <span className="dropdown__user-email">{CURRENT_USER.email}</span>
                    <span className={`dropdown__role-badge dropdown__role-badge--${CURRENT_USER.role.toLowerCase()}`}>
                      {CURRENT_USER.role}
                    </span>
                  </div>
                </div>

                <div className="dropdown__separator" />

                {/* Menu items */}
                <button className="dropdown__item" onClick={() => { setMenuOpen(false); navigate('/settings'); }}>
                  <span className="material-symbols-outlined">settings</span>
                  Settings
                </button>
                <button className="dropdown__item" onClick={() => { setMenuOpen(false); navigate('/help'); }}>
                  <span className="material-symbols-outlined">help</span>
                  Help & Support
                </button>

                <div className="dropdown__separator" />

                <button className="dropdown__item dropdown__item--danger" onClick={() => { setMenuOpen(false); navigate('/login'); }}>
                  <span className="material-symbols-outlined">logout</span>
                  Sign Out
                </button>
              </div>
            )}
          </div>
        </div>
      </header>
    </>
  );
};

export default AppHeader;
