import { FC, lazy } from 'react';

import Layout from '@/layouts';
import { Navigate, RouteObject, useRoutes } from 'react-router-dom';
import Home from './home';
import NoMatch from './NoMatch';

const Counter = lazy(
  () => import(/* webpackChunkName: "counter" */ './counter'),
);

const Member = lazy(() => import(/* webpackChunkName: "member" */ './member'));

const Three = lazy(() => import(/* webpackChunkName: "three" */ './three'));

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Navigate to="/home" />,
      },
      {
        path: '/home',
        element: <Home />,
      },
      {
        path: '/counter',
        element: <Counter />,
      },
      {
        path: '/member',
        element: <Member />,
      },
      {
        path: '/member/:name',
        element: <Member />,
      },
    ],
  },
  {
    path: '/three',
    element: <Three />,
  },
  { path: '*', element: <NoMatch /> },
];

const RouteIndex: FC = () => {
  return useRoutes(routes);
};

export default RouteIndex;
