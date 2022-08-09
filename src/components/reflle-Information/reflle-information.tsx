import { useContext, useEffect, useState } from 'react';
import { ReflleContext } from '../../contexts/reflle';
import { getConcursos } from '../../services/requests/get-concursos';
import { Information } from './styles';

function ReflleInformation() {
  const { contestId } = useContext(ReflleContext);
  const [date, setDate] = useState<string>();
  const [finalDate, setFinalDate] = useState<string>('01/01/2000');
  const screenWidth = window.screen.width;

  function formateDate(initialDate: string) {
    // eslint-disable-next-line prefer-const
    let [year, month, day] = initialDate.split('-');

    day = day.slice(0, 2);

    setFinalDate(`${day}/${month}/${year}`);
  }

  useEffect(() => {
    async function fetchData() {
      const contests = await getConcursos(contestId);
      setDate(contests.data);
      if (date) formateDate(date);
    }
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [contestId]);

  return screenWidth > 600 ? (
    <Information>
      CONCURSO <br />
      <b>
        {contestId} - {finalDate}
      </b>
    </Information>
  ) : (
    <Information>CONCURSO Nº {contestId}</Information>
  );
}

export default ReflleInformation;
