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

interface Raffle {
  id: number;
  nome: string;
}
const { Option } = Select;

export default function Selector(): JSX.Element {
  const [typesOfRaffle, setTypesOfRaffle] = useState<Raffle[]>();
  const { setBackgroundColor } = useContext(ColorContext);
  const { setReflleId, setImage } = useContext(ReflleContext);

  useEffect(() => {
    async function fetchData() {
      const raffle = getLoterias();

      setTypesOfRaffle(await raffle);
    }
    fetchData();
  }, []);

  const handleChange = (value: { value: string; label: React.ReactNode }) => {
    switch (Number(value)) {
      case 0:
        setBackgroundColor('#6BEFA3');
        setReflleId(0);
        setImage(megasena);
        break;
      case 1:
        setBackgroundColor('#8666EF');
        setReflleId(1);
        setImage(quina);
        break;
      case 2:
        setBackgroundColor('#DD7AC6');
        setReflleId(2);
        setImage(lotofacil);
        break;
      case 3:
        setBackgroundColor('#FFAB64');
        setReflleId(3);
        setImage(lotomania);
        break;
      case 4:
        setBackgroundColor('#5AAD7D');
        setReflleId(4);
        setImage(timemania);
        break;
      case 5:
        setBackgroundColor('#BFAF83');
        setReflleId(5);
        setImage(diadesorte);
        break;
      default:
        break;
    }
  };

  return (
    <div>
      {typesOfRaffle && (
        <Select style={{ width: 120 }} onChange={handleChange} id="raffle">
          {typesOfRaffle.map((raffle) => (
            <Option key={raffle.id} value={raffle.id}>
              {raffle.nome.toUpperCase()}
            </Option>
          ))}
        </Select>
      )}
    </div>
  );
}
