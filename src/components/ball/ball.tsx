import { useContext } from 'react';
import { BallContext } from '../../contexts/balls';
import { UniqueBall, Balls } from './styles';

export default function Ball(): JSX.Element {
  const { ball } = useContext(BallContext);

  return (
    <Balls>
      {ball.map((number) => {
        return <UniqueBall key={number}>{number}</UniqueBall>;
      })}
    </Balls>
  );
}
