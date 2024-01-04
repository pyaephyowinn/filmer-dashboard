import { createBrowserRouter } from 'react-router-dom';
import Login from '../pages/auth/Login';
import DashboardLayout from '../components/layouts/DashboardLayout';

export const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/d',
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <div>Dashboard</div>,
      },
    ],
  },
]);
