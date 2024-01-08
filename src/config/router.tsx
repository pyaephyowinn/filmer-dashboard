import { createBrowserRouter } from 'react-router-dom';
import Login from '../pages/auth/Login';
import DashboardLayout from '../components/layouts/DashboardLayout';
import RootLayout from '../components/layouts/RootLayout';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: 'login',
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
          {
            path: 'films',
            children: [
              {
                index: true,
                element: <div>Videos</div>,
              },
              {
                path: ':videoId',
                element: <div>Video Detail</div>,
              },
            ],
          },
          {
            path: 'photos',
            children: [
              {
                index: true,
                element: <div>Images</div>,
              },
              {
                path: ':imageId',
                element: <div>Image Detail</div>,
              },
            ],
          },
          {
            path: 'categories',
            element: <>Categories</>,
          },
          {
            path: 'settings',
            element: <div>Settings</div>,
          },
        ],
      },
    ],
  },
]);
