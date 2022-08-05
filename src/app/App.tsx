import styled from 'styled-components';
import Ball from '../components/ball/ball';
import Selector from '../components/selector/selector';

const Background = styled.div`
  background-color: #6befa3;
  width: 100vw;
  height: 100vh;
`;

function App(): JSX.Element {
  return (
    <Background>
      <Selector />
      <Ball number={3} />
    </Background>
  );
}

export default App;
