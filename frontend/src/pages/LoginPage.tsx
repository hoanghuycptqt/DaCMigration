import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/ui/Button';
import './LoginPage.css';

const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-card__logo" />
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
      <footer className="login-page__footer">
        © Robert Bosch GmbH
      </footer>
    </div>
  );
};

export default LoginPage;
