import { useContext, useEffect, useState } from 'react';
import { Select } from 'antd';
import { ColorContext } from '../../contexts/color-reffle';
import { getLoterias } from '../../services/requests/get-loterias';
import { ReflleContext } from '../../contexts/reflle';

interface Raffle {
  id: number;
  nome: string;
}
const { Option } = Select;

export default function Selector(): JSX.Element {
  const [typesOfRaffle, setTypesOfRaffle] = useState<Raffle[]>();
  const { setBackgroundColor } = useContext(ColorContext);
  const { setReflleId } = useContext(ReflleContext);

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
        break;
      case 1:
        setBackgroundColor('#8666EF');
        setReflleId(1);
        break;
      case 2:
        setBackgroundColor('#DD7AC6');
        setReflleId(2);
        break;
      case 3:
        setBackgroundColor('#FFAB64');
        setReflleId(3);
        break;
      case 4:
        setBackgroundColor('#5AAD7D');
        setReflleId(4);
        break;
      case 5:
        setBackgroundColor('#BFAF83');
        setReflleId(5);
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
