import { HomeOutlined } from '@ant-design/icons';
import { Button, Card, Space, Table, Tooltip } from 'antd';
import { FormattedMessage } from 'react-intl';
import {
  useLocation,
  useMatch,
  useNavigate,
  useParams,
  useSearchParams,
} from 'react-router-dom';

import { useGetMembersQuery } from './api';

import styles from './index.module.scss';

const Member = () => {
  const { data: members } = useGetMembersQuery(undefined, {
    pollingInterval: 15 * 1000,
  });

  const navigate = useNavigate();
  const location = useLocation();

  const { name } = useParams();
  const match = useMatch('/member/:name');

  const [searchParams] = useSearchParams();
  const nameFromQuery = searchParams.get('name');

  const columns = [
    { title: 'ID', dataIndex: 'id' },
    { title: <FormattedMessage id="ESAMPLE.NAME" />, dataIndex: 'name' },
    { title: <FormattedMessage id="ESAMPLE.TEL" />, dataIndex: 'tel' },
  ];

  return (
    <Space direction="vertical" className={styles.content}>
      <h2>Member</h2>
      <Table rowKey="id" columns={columns} dataSource={members} />
      <Card
        title="Router Navigate Example"
        extra={
          <Tooltip placement="rightBottom" title="Back to Home">
            <Button
              type="primary"
              shape="circle"
              icon={<HomeOutlined />}
              onClick={() => {
                navigate('/home');
              }}
            />
          </Tooltip>
        }
      >
        <Space direction="vertical" className={styles.navCards}>
          <Card title="query: useSearchParams">
            <code>{`const [searchParams] = useSearchParams()`}</code>
            <p>{`name: ${nameFromQuery}`}</p>
          </Card>
          <Card title="params: useParams">
            <code>{`const { name } = useParams()`}</code>
            <p>{`name: ${name}`}</p>
          </Card>
          <Card title="params: useMatch">
            <code>{`const match = useMatch('/member/:name')`}</code>
            <p>{JSON.stringify(match)}</p>
          </Card>
          <Card title="query & state: useLocation">
            <code>{`const location = useLocation()`}</code>
            <p>{JSON.stringify(location)}</p>
          </Card>
        </Space>
      </Card>
    </Space>
  );
};

export default Member;
