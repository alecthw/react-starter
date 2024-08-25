import { Button, Card, Input, Space } from 'antd';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import antdLogo from './assets/antd.svg';
import reactLogo from './assets/react.svg';
import reduxLogo from './assets/redux.svg';
import tailwindLogo from './assets/tailwind.svg';
import viteLogo from '/vite.svg';

const Home = () => {
  const [name, setName] = useState('China');

  const navigate = useNavigate();

  return (
    <div className="mx-auto w-1/3">
      <Space>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="h-24 p-6" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="h-24 p-6" alt="React logo" />
        </a>
        <a href="https://redux-toolkit.js.org" target="_blank" rel="noreferrer">
          <img src={reduxLogo} className="h-24 p-6" alt="Redux logo" />
        </a>
        <a href="https://ant.design" target="_blank" rel="noreferrer">
          <img src={antdLogo} className="h-24 p-6" alt="Antd logo" />
        </a>
        <a href="https://tailwindcss.com" target="_blank" rel="noreferrer">
          <img src={tailwindLogo} className="h-24 p-6" alt="Tailwind logo" />
        </a>
      </Space>
      <p className="text-2xl font-semibold">
        Vite + React + Antd + TailwindCSS
      </p>
      <p className="text-lg font-semibold">
        Other libs: React-Router, React-Intl
      </p>
      <div className="p-8">
        <p>
          Edit <code>src/**</code> and save to test HMR
        </p>
      </div>
      <p className="text-gray-400">
        Click on the Vite, React and Antd logos to learn more
      </p>
      <Card title="Router Navigate with Parameters Example" className="mt-16">
        <Space direction="vertical">
          <div>
            <Input
              className="w-60"
              placeholder="Name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <Space>
            <Button
              size="large"
              onClick={() => {
                navigate(`/member?name=${name}`);
              }}
            >
              query
            </Button>
            <Button
              size="large"
              onClick={() => {
                navigate(`/member/${name}`);
              }}
            >
              param
            </Button>
            <Button
              size="large"
              onClick={() => {
                navigate('/member', { state: { name } });
              }}
            >
              state
            </Button>
          </Space>
        </Space>
      </Card>
    </div>
  );
};

export default Home;
