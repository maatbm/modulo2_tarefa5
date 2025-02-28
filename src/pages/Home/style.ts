import styled from "styled-components";

export const HomeContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  button {
    width: 20%;
    height: 2rem;
    border: none;
    border-radius: 0.5rem;
    background-color: #000;
    color: #fff;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    margin-top: 2rem;
    transition: all 0.3s ease-in-out;

    &:hover {
      background-color: #fff;
      color: #000;
    }
  }
`;
