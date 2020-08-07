import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;

  svg:hover {
    color: #02c76b !important;
    transition: 500ms;
  }

  svg {
    transition: 500ms;
    margin: 0 2vw;
  }

  .off {
    color: #ffffff75 !important;
  }

  .off:hover {
    color: #ffffff75 !important;
  }
`;

export const About = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  img {
    @media (min-width: 1280px) {
      max-width: 65%;
    }

    @media (max-width: 1280px) {
      max-width: 65%;
    }

    @media (max-width: 650px) {
      max-width: 90%;
    }

    align-self: center;
  }

  p {
    color: white;
    font-family: 'Itim', cursive;
    font-size: 22px;
  }
`;
