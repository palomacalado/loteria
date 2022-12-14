/* eslint-disable no-unused-expressions */
import { useContext, useEffect, useState } from 'react';
import { Select } from 'antd';
import { ColorContext } from '../../contexts/color-reffle';
import { getLoterias } from '../../services/requests/get-loterias';
import { ReflleContext } from '../../contexts/reflle';

import megasena from '../../assets/megasena.png';
import diadesorte from '../../assets/diadesorte.png';
import lotofacil from '../../assets/lotofacil.png';

import lotomania from '../../assets/lotomania.png';
import quina from '../../assets/quina.png';
import timemania from '../../assets/timemania.png';
import { Content } from './styles';

import megasenamobile from '../../assets/senamobile.png';
import diamobile from '../../assets/diamobile.png';
import lotomobile from '../../assets/lotomobile.png';
import maniamobile from '../../assets/maniamobile.png';
import quinamobile from '../../assets/quinamobile.png';
import timemobile from '../../assets/timemobile.png';

interface Raffle {
  id: number;
  nome: string;
}
const { Option } = Select;

export default function Selector(): JSX.Element {
  const [typesOfRaffle, setTypesOfRaffle] = useState<Raffle[]>();
  const { setBackgroundColor } = useContext(ColorContext);
  const { setReflleId, setImage } = useContext(ReflleContext);
  const screenWidth = window.screen.width;

  useEffect(() => {
    async function fetchData() {
      const raffle = await getLoterias();

      setTypesOfRaffle(raffle);
    }
    fetchData();
  }, []);

  const handleChange = (value: { value: string; label: React.ReactNode }) => {
    switch (Number(value)) {
      case 0:
        setBackgroundColor('#6BEFA3');
        setReflleId(0);
        screenWidth > 600 ? setImage(megasena) : setImage(megasenamobile);
        break;
      case 1:
        setBackgroundColor('#8666EF');
        setReflleId(1);
        screenWidth > 600 ? setImage(quina) : setImage(quinamobile);
        break;
      case 2:
        setBackgroundColor('#DD7AC6');
        setReflleId(2);
        screenWidth > 600 ? setImage(lotofacil) : setImage(lotomobile);
        break;
      case 3:
        setBackgroundColor('#FFAB64');
        setReflleId(3);
        screenWidth > 600 ? setImage(lotomania) : setImage(maniamobile);
        break;
      case 4:
        setBackgroundColor('#5AAD7D');
        setReflleId(4);
        screenWidth > 600 ? setImage(timemania) : setImage(timemobile);
        break;
      case 5:
        setBackgroundColor('#BFAF83');
        setReflleId(5);
        screenWidth > 600 ? setImage(diadesorte) : setImage(diamobile);
        break;
      default:
        break;
    }
  };

  return (
    <Content>
      {typesOfRaffle && (
        <Select
          defaultValue={{ value: '0', label: 'MEGA-SENA' }}
          style={{ width: 170 }}
          onChange={handleChange}
          id="raflle"
        >
          {typesOfRaffle.map((raffle) => (
            <Option key={raffle.id} value={raffle.id}>
              {raffle.nome.toUpperCase()}
            </Option>
          ))}
        </Select>
      )}
    </Content>
  );
}
