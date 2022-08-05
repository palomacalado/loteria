import { useEffect, useState } from 'react';
import { getLoterias } from '../../services/requests/get-loterias';

interface Sort {
  id: number;
  nome: string;
}

export default function Selector(): JSX.Element {
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
              {loteria.nome.toUpperCase()}
            </option>
          ))}
      </select>
    </div>
  );
}
