import { useContext, useEffect, useState } from 'react';
import { Select } from 'antd';
import { ColorContext } from '../../contexts/color-reffle';
import { getLoterias } from '../../services/requests/get-loterias';

interface Raffle {
  id: number;
  nome: string;
}
const { Option } = Select;

export default function Selector(): JSX.Element {
  const [typesOfRaffle, setTypesOfRaffle] = useState<Raffle[]>();
  const { setBackgroundColor } = useContext(ColorContext);

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
        break;
      case 1:
        setBackgroundColor('#8666EF');
        break;
      case 2:
        setBackgroundColor('#DD7AC6');
        break;
      case 3:
        setBackgroundColor('#FFAB64');
        break;
      case 4:
        setBackgroundColor('#5AAD7D');
        break;
      case 5:
        setBackgroundColor('#BFAF83');
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <Select style={{ width: 120 }} onChange={handleChange} id="raffle">
        {typesOfRaffle &&
          typesOfRaffle.map((raffle) => (
            <Option key={raffle.id} value={raffle.id}>
              {raffle.nome.toUpperCase()}
            </Option>
          ))}
      </Select>
    </div>
  );
}
