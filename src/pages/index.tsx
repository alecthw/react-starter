import { FC, lazy } from 'react';
import { Navigate, RouteObject, useRoutes } from 'react-router-dom';

import Layout from '@/layouts';

import ECharts from './echarts';
import Home from './home';
import NoMatch from './NoMatch';
import Pixi from './pixi';
import Three from './three';

const Counter = lazy(
  () => import(/* webpackChunkName: "counter" */ './counter'),
);

const Member = lazy(() => import(/* webpackChunkName: "member" */ './member'));

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
    path: '/echarts',
    element: <ECharts />,
  },
  {
    path: '/three',
    element: <Three />,
  },
  {
    path: '/pixi',
    element: <Pixi />,
  },
  {
    path: '*',
    element: <NoMatch />,
  },
];

const RouteIndex: FC = () => {
  return useRoutes(routes);
};

export default RouteIndex;
