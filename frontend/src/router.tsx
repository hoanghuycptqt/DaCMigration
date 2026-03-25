import { createBrowserRouter } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import WizardPage from './pages/wizard/WizardPage';
import MyRequestsPage from './pages/MyRequestsPage';
import RequestDetailPage from './pages/RequestDetailPage';
import RstPreviewPage from './pages/RstPreviewPage';
import AdminDashboardPage from './pages/admin/AdminDashboardPage';
import AllRequestsPage from './pages/admin/AllRequestsPage';
import MonitoringPage from './pages/admin/MonitoringPage';
import StatisticsPage from './pages/admin/StatisticsPage';
import UserManagementPage from './pages/admin/UserManagementPage';
import SystemHealthPage from './pages/admin/SystemHealthPage';

export const router = createBrowserRouter([
  { path: '/login', element: <LoginPage /> },
  { path: '/', element: <HomePage /> },
  { path: '/wizard', element: <WizardPage /> },
  { path: '/requests', element: <MyRequestsPage /> },
  { path: '/requests/:id', element: <RequestDetailPage /> },
  { path: '/requests/:id/preview', element: <RstPreviewPage /> },
  { path: '/admin', element: <AdminDashboardPage /> },
  { path: '/admin/requests', element: <AllRequestsPage /> },
  { path: '/admin/monitoring', element: <MonitoringPage /> },
  { path: '/admin/statistics', element: <StatisticsPage /> },
  { path: '/admin/users', element: <UserManagementPage /> },
  { path: '/admin/health', element: <SystemHealthPage /> },
]);
