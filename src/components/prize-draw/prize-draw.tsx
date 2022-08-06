import { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { BallContext } from '../../contexts/balls';
import { ReflleContext } from '../../contexts/reflle';
import { getConcursos } from '../../services/requests/get-concursos';
import { getLoteriasConcursos } from '../../services/requests/get-loterias-concursos';
import Ball from '../ball/ball';

const Organization = styled.div`
  width: 60%;
  heigth 30%
`;

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
        const allIndex = [];

        for (let i = 0; i < numbersOfBalls; i += 1) {
          index = Math.ceil(Math.random() * data.numeros.length);
          while (allIndex.indexOf(index) >= 0) {
            index = Math.ceil(Math.random() * data.numeros.length);
          }
          allIndex.push(index);
          console.log(allIndex);
        }
        for (let i = 0; i < numbersOfBalls; i += 1) {
          reflleNumbers.push(data.numeros[allIndex[i]]);
        }
        setBall(reflleNumbers);
      });
    });
  }, [contestId, reflleId, setBall, setContestId]);

  return (
    <Organization>
      <Ball key={reflleId} />
    </Organization>
  );
}
