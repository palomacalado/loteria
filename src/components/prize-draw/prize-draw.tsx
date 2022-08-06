import { useContext, useEffect } from 'react';
import { BallContext } from '../../contexts/balls';
import { ReflleContext } from '../../contexts/reflle';
import { getConcursos } from '../../services/requests/get-concursos';
import { getLoteriasConcursos } from '../../services/requests/get-loterias-concursos';
import Ball from '../ball/ball';

export default function PrizeDraw(): JSX.Element {
  const { reflleId } = useContext(ReflleContext);
  const { contestId, setContestId } = useContext(ReflleContext);
  const { setBall } = useContext(BallContext);

  useEffect(() => {
    getLoteriasConcursos().then((response) => {
      response.map((contest: { loteriaId: number; concursoId: string }) => {
        if (contest.loteriaId === reflleId) {
          setContestId(contest.concursoId);
        }
        return 0;
      });

      getConcursos(contestId).then((data) => {
        let index = 0;
        const reflleNumbers = [];
        const allIndex = [0];
        for (let i = 0; i < 6; i += 1) {
          index = Math.ceil(Math.random() * data.numeros.length + 1);
          while (allIndex.indexOf(index) >= 0) {
            index = Math.ceil(Math.random() * data.numeros.length + 1);
          }
          allIndex.push(index);
        }
        for (let i = 1; i < 7; i += 1) {
          reflleNumbers.push(allIndex[i]);
        }
        setBall(reflleNumbers);
      });
    });
  }, [contestId, reflleId, setBall, setContestId]);

  return <Ball key={reflleId} />;
}
