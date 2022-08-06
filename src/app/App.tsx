import { useContext } from 'react';
import styled from 'styled-components';
import PrizeDraw from '../components/prize-draw/prize-draw';
import ReflleInformation from '../components/reflle-Information/reflle-information';
import Selector from '../components/selector/selector';
import { ColorContext } from '../contexts/color-reffle';
import { ReflleContext } from '../contexts/reflle';

const Image = styled.img`
  src: ${(props) => props.src};
  alt: 'logo da loteria';
  padding: 5rem;
`;

const Background = styled.div`
  background-color: ${(props) => props.color};
  max-width: 100vw;
  min-width: 100vw;
  min-height: 100vh;
  max-height: 100vh;
  display: flex;
`;
const Content = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  heigth: 100vh;
  justify-content: space-evenly;
`;

const Numbers = styled.div`
  background-color: #ededed;
  -webkit-border-top-left-radius: 100px 500px;
  -webkit-border-bottom-left-radius: 100px 500px;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  min-width: 60%;
`;
function App(): JSX.Element {
  const { image } = useContext(ReflleContext);
  const { backgroundColor } = useContext(ColorContext);
  return (
    <Background color={backgroundColor}>
      <Content>
        <Selector />
        <Image src={image} />
        <ReflleInformation />
      </Content>
      <Numbers>
        <PrizeDraw />
      </Numbers>
    </Background>
  );
}

export default App;
