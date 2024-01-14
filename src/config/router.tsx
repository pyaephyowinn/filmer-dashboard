import { createBrowserRouter } from 'react-router-dom';
import Login from '../pages/auth/Login';
import DashboardLayout from '../components/layouts/DashboardLayout';
import RootLayout from '../components/layouts/RootLayout';
import { FilmList, CreateFilm } from '@/pages/films';
import { PhotosList, CreatePhoto } from '@/pages/photos';
import { CategoriesList, CreateCategory } from '@/pages/categories';
import { Settings } from '@/pages/settings';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '',
        element: <Login />,
      },
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
                element: <FilmList />,
              },
              {
                path: 'new',
                element: <CreateFilm />,
              },
            ],
          },
          {
            path: 'photos',
            children: [
              {
                index: true,
                element: <PhotosList />,
              },
              {
                path: 'new',
                element: <CreatePhoto />,
              },
            ],
          },
          {
            path: 'categories',
            children: [
              {
                index: true,
                element: <CategoriesList />,
              },
              {
                path: 'new',
                element: <CreateCategory />,
              },
            ],
          },
          {
            path: 'settings',
            element: <Settings />,
          },
        ],
      },
    ],
  },
]);
