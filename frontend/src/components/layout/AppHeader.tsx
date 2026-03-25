import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CURRENT_USER } from '../../data/users';
import './AppHeader.css';

interface AppHeaderProps {
  readonly className?: string;
}

export const AppHeader: React.FC<AppHeaderProps> = ({ className = '' }) => {
  const navigate = useNavigate();

  return (
    <header className={`app-header ${className}`}>
      <div className="app-header__left" onClick={() => navigate('/')} role="button" tabIndex={0}>
        <div className="app-header__logo" />
        <span className="app-header__title">DaC Migration Portal</span>
      </div>
      <div className="app-header__right">
        <span className="app-header__user-name">{CURRENT_USER.name}</span>
        <span className={`app-header__role-badge app-header__role-badge--${CURRENT_USER.role.toLowerCase()}`}>
          {CURRENT_USER.role}
        </span>
        <button className="app-header__logout" onClick={() => navigate('/login')}>
          Logout
        </button>
      </div>
    </header>
  );
};

export default AppHeader;
