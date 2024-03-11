import { createBrowserRouter } from 'react-router-dom';
import Login from '../pages/auth/Login';
import DashboardLayout from '../components/layouts/DashboardLayout';
import RootLayout from '../components/layouts/RootLayout';
import { FilmList, CreateFilm, EditFilm } from '@/pages/films';
import { CreatePhoto, PhotosList } from '@/pages/photos';
import { CategoriesList, CreateCategory } from '@/pages/categories';
import EditCategory from '@/pages/categories/Edit';
import { Settings } from '@/pages/settings';
import { DashboardRoute } from './constant';

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
        path: DashboardRoute,
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
              {
                path: ':filmId/edit',
                element: <EditFilm />,
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
              {
                path: ':categoryId/edit',
                element: <EditCategory />,
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
