import { Container, PixiComponent, Sprite, Stage, Text } from '@pixi/react';
import { BlurFilter, Graphics } from 'pixi.js';
import { useMemo } from 'react';

import BunnyPng from './assets/bunny.png';

interface RectangleProps {
  x: number;
  y: number;
  width: number;
  height: number;
  color: number;
}

const Rectangle = PixiComponent<RectangleProps, Graphics>('Rectangle', {
  create: () => new Graphics(),
  applyProps: (ins, _, props) => {
    const { color, x, y, width, height } = props;
    ins.clear();
    ins.beginFill(color);
    ins.drawRect(x, y, width, height);
    ins.endFill();
  },
});

const Pixi = () => {
  const blurFilter = useMemo(() => new BlurFilter(4), []);

  return (
    <Stage
      className="mx-auto"
      width={800}
      height={600}
      options={{ background: 0xeef1f5 }}
    >
      <Sprite image={BunnyPng} x={400} y={270} anchor={{ x: 0.5, y: 0.5 }} />

      <Container x={400} y={330}>
        <Text
          text="Hello World"
          anchor={{ x: 0.5, y: 0.5 }}
          filters={[blurFilter]}
        />
      </Container>

      <Rectangle x={700} y={500} width={100} height={100} color={0xff0000} />
    </Stage>
  );
};

export default Pixi;
