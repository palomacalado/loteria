import { useContext } from 'react';
import styled from 'styled-components';
import PrizeDraw from '../components/prize-draw/prize-draw';
import Selector from '../components/selector/selector';
import { ColorContext } from '../contexts/color-reffle';
import { ReflleContext } from '../contexts/reflle';

const Background = styled.div`
  background-color: ${(props) => props.color};
  width: 100vw;
  height: 100vh;
`;
const Image = styled.img`
  src: ${(props) => props.src};
`;

function App(): JSX.Element {
  const { backgroundColor } = useContext(ColorContext);
  const { image } = useContext(ReflleContext);

  return (
    <Background color={backgroundColor}>
      <div>
        <Selector />
      </div>
      <Image src={image} />
      <div>
        <PrizeDraw />
      </div>
    </Background>
  );
}

export default App;
