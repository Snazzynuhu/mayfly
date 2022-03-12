import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  text-align: center;
  position: relative;
  padding: 3rem 0;
  margin-top: 5rem;
  .heading {
    font-size: 2rem;
    text-transform: capitalize;
  }
  .heading span {
    color: var(--secondary-color);
  }

  .underline {
    width: 8.5rem;
    height: 0.3rem;
    border-radius: 1rem;
    background-color: var(--primary-color2);
    text-align: center;
    margin: 0.3rem auto 1rem;
  }
`;
export const Content = styled.div`
  padding: 0 2rem;
  p {
    margin-bottom: 1rem;
    font-size: 1.3rem;
  }
`;
