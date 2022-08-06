import styled from 'styled-components';

export const UniqueBall = styled.div`
  border-radius: 50%;
  background: white;
  width: 60px;
  height: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  position: relative;
  margin: 5px;
`;
export const Balls = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  align: center;
  width: 80%;
  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;
