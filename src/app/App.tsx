import { useContext } from 'react';
import styled from 'styled-components';
import Ball from '../components/ball/ball';
import Selector from '../components/selector/selector';
import { ColorContext } from '../contexts/color-reffle';

const Background = styled.div`
  background-color: ${(props) => props.color};
  width: 100vw;
  height: 100vh;
`;

function App(): JSX.Element {
  const { backgroundColor } = useContext(ColorContext);

  return (
    <Background color={backgroundColor}>
      <Selector />
      <Ball number={3} />
    </Background>
  );
}

export default App;
