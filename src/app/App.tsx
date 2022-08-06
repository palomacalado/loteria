import { useContext } from 'react';
import PrizeDraw from '../components/prize-draw/prize-draw';
import Selector from '../components/selector/selector';
import ReflleInformation from '../components/reflle-Information/reflle-information';
import { ColorContext } from '../contexts/color-reffle';
import { ReflleContext } from '../contexts/reflle';
import { Background, Content, Image, Numbers } from './styles';

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
