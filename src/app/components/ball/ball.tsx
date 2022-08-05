import styled from 'styled-components';

const UniqueBall = styled.div`
  border-radius: 50%;
  background: white;
  width: 60px;
  height: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 24px;
`;
export default function Ball({ number }: any): JSX.Element {
  return <UniqueBall>{number}</UniqueBall>;
}
