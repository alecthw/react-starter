import { Button, Card, Input, Space } from 'antd';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import antdLogo from './assets/antd.svg';
import reactLogo from './assets/react.svg';
import reduxLogo from './assets/redux.svg';
import viteLogo from '/vite.svg';

import styles from './index.module.scss';

const Home = () => {
  const [name, setName] = useState('China');

  const navigate = useNavigate();

  return (
    <div className={styles.content}>
      <Space>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className={styles.logo} alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className={styles.logo} alt="React logo" />
        </a>
        <a href="https://redux-toolkit.js.org" target="_blank" rel="noreferrer">
          <img src={reduxLogo} className={styles.logo} alt="Redux logo" />
        </a>
        <a href="https://ant.design" target="_blank" rel="noreferrer">
          <img src={antdLogo} className={styles.logo} alt="Antd logo" />
        </a>
      </Space>
      <h1>Vite + React + Redux + Antd</h1>
      <h3>Other libs: React-Router, React-Intl</h3>
      <div className={styles.manual}>
        <p>
          Edit <code>src/**</code> and save to test HMR
        </p>
      </div>
      <p className={styles.readDocs}>
        Click on the Vite, React and Antd logos to learn more
      </p>
      <Card
        className={styles.navCard}
        title="Router Navigate with Parameters Example"
      >
        <Space direction="vertical">
          <div>
            <Input
              className={styles.nameInput}
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
