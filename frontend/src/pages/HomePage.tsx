import React from 'react';
import { useNavigate } from 'react-router-dom';
import AppShell from '../components/layout/AppShell';
import Badge from '../components/ui/Badge';
import NotificationBanner from '../components/feedback/NotificationBanner';
import { MIGRATION_TYPES } from '../data/migrations';
import './HomePage.css';

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const formatOrder = (order: number) => String(order).padStart(2, '0');

  return (
    <AppShell>
      <div className="home-page">
        {/* Page Header */}
        <div className="home-page__header">
          <h1 className="home-page__title">Start a Migration</h1>
          <p className="home-page__subtitle">
            Initiate a new data migration workflow following the standardized engineering pipeline.
          </p>
        </div>

        {/* Info Banner */}
        <NotificationBanner variant="info" className="home-page__banner">
          Recommended order: SW Architecture → Requirements → DSD → TestSpec
        </NotificationBanner>

        {/* Migration Cards Grid */}
        <div className="migration-grid">
          {MIGRATION_TYPES.map((type) => (
            <div
              key={type.id}
              className="migration-card"
              onClick={() => navigate(`/wizard?type=${type.id}`)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && navigate(`/wizard?type=${type.id}`)}
            >
              {/* Step Number */}
              <div className="migration-card__order-label">
                {formatOrder(type.order)}
              </div>

              {/* Icon */}
              <div className="migration-card__icon">
                <span className="material-symbols-outlined">{type.icon}</span>
              </div>

              {/* Title + Badge */}
              <div className="migration-card__title-row">
                <h3 className="migration-card__title">{type.title}</h3>
                <Badge variant={type.badge === 'Automated' ? 'primary' : 'neutral'}>
                  {type.badge}
                </Badge>
              </div>

              {/* Source */}
              <p className="migration-card__source">{type.source}</p>

              {/* Description */}
              <p className="migration-card__desc">{type.subtitle}</p>

              {/* Action Button */}
              <button
                className="btn btn--gradient-sm migration-card__btn"
                onClick={(e) => {
                  e.stopPropagation();
                  navigate(`/wizard?type=${type.id}`);
                }}
              >
                Select Mode
              </button>
            </div>
          ))}
        </div>
      </div>
    </AppShell>
  );
};

export default HomePage;
