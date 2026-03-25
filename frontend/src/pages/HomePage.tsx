import React from 'react';
import { useNavigate } from 'react-router-dom';
import AppShell from '../components/layout/AppShell';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import NotificationBanner from '../components/feedback/NotificationBanner';
import { MIGRATION_TYPES } from '../data/migrations';
import './HomePage.css';

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <AppShell>
      <h1 className="page-title">Start a Migration</h1>

      <NotificationBanner variant="info" className="home-banner">
        Recommended order: SW Architecture → Requirements → DSD → TestSpec
      </NotificationBanner>

      <div className="migration-grid">
        {MIGRATION_TYPES.map((type) => (
          <Card
            key={type.id}
            className="migration-card"
            onClick={() => navigate(`/wizard?type=${type.id}`)}
          >
            <div className="migration-card__header">
              <span className="migration-card__order">{type.order}</span>
              <Badge variant={type.badge === 'Automated' ? 'success' : 'primary'}>
                {type.badge}
              </Badge>
            </div>
            <h3 className="migration-card__title">{type.title}</h3>
            <p className="migration-card__subtitle">{type.subtitle}</p>
            <p className="migration-card__desc">{type.description}</p>
          </Card>
        ))}
      </div>

      <div className="home-link">
        <a href="/requests" onClick={(e) => { e.preventDefault(); navigate('/requests'); }}>
          View My Requests →
        </a>
      </div>
    </AppShell>
  );
};

export default HomePage;
