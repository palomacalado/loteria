import { useContext, useEffect } from 'react';
import { BallContext } from '../../contexts/balls';
import { ReflleContext } from '../../contexts/reflle';
import { getConcursos } from '../../services/requests/get-concursos';
import { getLoteriasConcursos } from '../../services/requests/get-loterias-concursos';
import Ball from '../ball/ball';
import { Organization } from './styles';

export default function PrizeDraw(): JSX.Element {
  const { reflleId } = useContext(ReflleContext);
  const { contestId, setContestId } = useContext(ReflleContext);
  const { setBall } = useContext(BallContext);
  let numbersOfBalls = 6;

  switch (contestId) {
    case '5534':
      numbersOfBalls = 5;
      break;
    case '2200':
      numbersOfBalls = 15;
      break;
    case '1622':
      numbersOfBalls = 7;
      break;
    case '440':
      numbersOfBalls = 7;
      break;
    case '2167':
      numbersOfBalls = 20;
      break;

    default:
      numbersOfBalls = 6;
      break;
  }

  function sortNumbers(list: number[]) {
    let index = 0;
    const reflleNumbers = [];
    const allIndex = [];

    while (allIndex.length !== numbersOfBalls) {
      index = Math.ceil(Math.random() * list.length - 1);

      while (allIndex.indexOf(index) >= 0) {
        index = Math.ceil(Math.random() * list.length - 1);
      }
      allIndex.push(index);
    }
    for (let i = 0; i < numbersOfBalls; i += 1) {
      reflleNumbers.push(list[allIndex[i]]);
    }

    return setBall(reflleNumbers);
  }

  useEffect(() => {
    async function fetchData() {
      const lotteriesContests = await getLoteriasConcursos();

      lotteriesContests.map(
        (contest: { loteriaId: number; concursoId: string }) => {
          if (contest.loteriaId === reflleId) {
            setContestId(contest.concursoId);
          }
          return 0;
        },
      );
      const contests = await getConcursos(contestId);

      sortNumbers(contests.numeros);
    }
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [contestId, reflleId, setBall, setContestId]);

  return (
    <Organization>
      <Ball key={reflleId} />
    </Organization>
  );
}
