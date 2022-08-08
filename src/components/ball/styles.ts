import styled from 'styled-components';

export const UniqueBall = styled.li`
  border-radius: 50%;
  background: white;
  -webkit-box-shadow: 9px 7px 5px rgba(50, 50, 50, 0.77);
  -moz-box-shadow: 9px 7px 5px rgba(50, 50, 50, 0.77);
  box-shadow: 9px 7px 5px rgba(50, 50, 50, 0.77);
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
export const Balls = styled.ul`
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
