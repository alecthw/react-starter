import { Button, InputNumber, Row, Space } from 'antd';
import { useState } from 'react';

import { useAppDispatch, useAppSelector } from '@/app/hooks';

import {
  decrement,
  increment,
  incrementAsync,
  incrementByAmount,
  incrementIfOdd,
  selectCount,
  selectStatus,
} from './slice';

import styles from './index.module.scss';

export const Counter = () => {
  const dispatch = useAppDispatch();
  const count = useAppSelector(selectCount);
  const status = useAppSelector(selectStatus);
  const [incrementAmount, setIncrementAmount] = useState('2');

  const incrementValue = Number(incrementAmount) || 0;

  return (
    <>
      <Row className={styles.row}>
        <Button size="large" onClick={() => dispatch(decrement())}>
          -
        </Button>
        <span aria-label="Count" className={styles.value}>
          {count}
        </span>
        <Button size="large" onClick={() => dispatch(increment())}>
          +
        </Button>
      </Row>
      <Row className={styles.row}>
        <Space>
          <InputNumber
            size="large"
            min="1"
            max="10"
            value={incrementAmount}
            onChange={(value) => {
              setIncrementAmount(value || '0');
            }}
          />
          <Button
            size="large"
            onClick={() => dispatch(incrementByAmount(incrementValue))}
          >
            Add Amount
          </Button>
          <Button
            size="large"
            disabled={status !== 'idle'}
            onClick={() => dispatch(incrementAsync(incrementValue))}
          >
            Add Async
          </Button>
          <Button
            type="primary"
            size="large"
            onClick={() => dispatch(incrementIfOdd(incrementValue))}
          >
            Add If Odd
          </Button>
        </Space>
      </Row>
    </>
  );
};

export default Counter;
