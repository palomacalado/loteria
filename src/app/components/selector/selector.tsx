import { Select } from 'antd';
import { useEffect, useState } from 'react';
import { getLoterias } from '../../../services/requests/get-loterias';

const { Option } = Select;

interface Sort {
  id: number;
  nome: string;
}

export default function Selector(): JSX.Element {
  const handleChange = (value: string): void => {
    console.log(`selected ${value}`);
  };

  const [typesOfSort, setTypesOfSort] = useState<Sort[]>();

  useEffect(() => {
    async function fetchData() {
      const loterias = getLoterias();

      setTypesOfSort(await loterias);
    }
    fetchData();
  }, []);

  return (
    <div>
      <select defaultValue="mega-sena" style={{ width: 120 }}>
        {typesOfSort &&
          typesOfSort.map((loteria) => (
            <option key={loteria.id} value={loteria.id}>
              {loteria.nome.charAt(0).toUpperCase() + loteria.nome.substring(1)}
            </option>
          ))}
      </select>
    </div>
  );
}
