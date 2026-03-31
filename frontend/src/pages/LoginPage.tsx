import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/ui/Button';
import boschLogo from '../assets/bosch-logo.svg';
import './LoginPage.css';

const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="login-page">
      <div className="login-card">
        <img src={boschLogo} alt="Bosch" className="login-card__logo" />
        <h1 className="login-card__title">DaC Migration Portal</h1>
        <p className="login-card__subtitle">
          Migrate engineering artifacts to Doc-as-Code repositories
        </p>
        <Button
          variant="primary"
          size="lg"
          className="login-card__button"
          onClick={() => navigate('/')}
        >
          Sign in with Bosch ID
        </Button>
      </div>
    </div>
  );
};

export default LoginPage;
