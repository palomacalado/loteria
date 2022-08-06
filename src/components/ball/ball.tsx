import { useContext } from 'react';
import styled from 'styled-components';
import { BallContext } from '../../contexts/balls';

const UniqueBall = styled.div`
  border-radius: 50%;
  background: white;
  width: 60px;
  height: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  position: relative;
`;
const Balls = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  align: center;
  width: 80%;
`;
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
