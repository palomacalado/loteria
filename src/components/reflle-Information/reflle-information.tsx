import React, { useContext, useEffect, useState } from 'react';
import { ReflleContext } from '../../contexts/reflle';
import { getConcursos } from '../../services/requests/get-concursos';
import { Information } from './styles';

function ReflleInformation() {
  const { contestId } = useContext(ReflleContext);
  const [date, setDate] = useState<string>();
  const [finalDate, setFinalDate] = useState<string>();

  function formateDate(initialDate: string) {
    // eslint-disable-next-line prefer-const
    let [year, month, day] = initialDate.split('-');

    day = day.slice(0, 2);

    setFinalDate(`${day}/${month}/${year}`);
  }

  useEffect(() => {
    getConcursos(contestId).then((response) => setDate(response.data));
    if (date) formateDate(date);
  }, [contestId]);
  return (
    <Information>
      CONCURSO <br />
      <b>
        {contestId} - {finalDate}
      </b>
    </Information>
  );
}

export default ReflleInformation;
