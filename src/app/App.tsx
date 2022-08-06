import { useContext } from 'react';
import styled from 'styled-components';
import PrizeDraw from '../components/prize-draw/prize-draw';
import Selector from '../components/selector/selector';
import { ColorContext } from '../contexts/color-reffle';
import logo from '../assets/logo.png';

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
      <img src={logo} alt="logo da mega sena" />
      <div>
        <PrizeDraw />
      </div>
    </Background>
  );
}

export default App;
