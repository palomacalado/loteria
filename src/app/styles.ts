import styled from 'styled-components';

export const Image = styled.img`
  src: ${(props) => props.src};
  alt: 'logo da loteria';
  padding 5rem;
  @media only screen and (max-width: 480px) {
    padding:0;
`;

export const Background = styled.div`
  background-color: ${(props) => props.color};
  max-width: 100vw;
  min-width: 100vw;
  min-height: 100vh;
  max-height: 100vh;
  display: flex;
  @media only screen and (max-width: 480px) {
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    align-items: center;
  }
`;
export const Content = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  height: 100vh;
  justify-content: space-evenly;
  @media only screen and (max-width: 480px) {
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
    flex-direction: row;
    height: 50vh;
    justify-content: center;
  }
`;

export const Numbers = styled.div`
  background-color: #ededed;
  -webkit-border-top-left-radius: 100px 500px;
  -webkit-border-bottom-left-radius: 100px 500px;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  @media only screen and (max-width: 480px) {
    -webkit-border-top-right-radius: 700px 300px;
    -webkit-border-top-left-radius: 700px 300px;
    -webkit-border-bottom-left-radius: 0;
    height: 50vh;
    width: 100vw;
  }
`;
