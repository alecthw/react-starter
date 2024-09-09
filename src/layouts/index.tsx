import { Divider, Space, Spin } from 'antd';
import { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';

const PageLayout = () => (
  <Space direction="vertical" size="middle" className="w-full text-center">
    <p className="text-4xl font-semibold">React Redux Starter Kit</p>
    <p className="text-lg">React + Redux-Toolkit + React-Router + Antd</p>

    <Space split={<Divider type="vertical" />}>
      <Link to="/" className="text-base font-bold">
        Home
      </Link>
      <Link to="/counter" className="text-base font-bold">
        Counter
      </Link>
      <Link to="/member" className="text-base font-bold">
        Member
      </Link>
    </Space>

    <Space split={<Divider type="vertical" />}>
      <Link to="/echarts" className="text-base font-bold">
        ECharts
      </Link>
      <Link to="/three" className="text-base font-bold">
        three.js
      </Link>
      <Link to="/pixi" className="text-base font-bold">
        pixi.js
      </Link>
    </Space>

    <div className="p-8">
      <Suspense
        fallback={
          <Spin
            className="flex h-full items-center justify-center"
            size="large"
          />
        }
      >
        <Outlet />
      </Suspense>
    </div>
  </Space>
);

export default PageLayout;
