import styled from "styled-components";

export const HomeContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};

  input {
    width: 20%;
    height: 2rem;
    border: none;
    border-radius: 0.5rem;
    background-color: ${({ theme }) => theme.colors.background_card};
    color: ${({ theme }) => theme.colors.text};
    font-size: 1rem;
    font-weight: bold;
    padding: 0 1rem;
    margin-bottom: 2rem;
    transition: all 0.3s ease-in-out;
    border: 2px solid ${({ theme }) => theme.colors.border_color};

    &:focus {
      outline: none;
      box-shadow: 0 0 10px ${({ theme }) => theme.colors.shadow};
    }
  }

  button {
    width: 20%;
    height: 2rem;
    border: none;
    border-radius: 0.5rem;
    background-color: ${({ theme }) => theme.colors.text};
    color: ${({ theme }) => theme.colors.background};
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    margin-top: 2rem;
    transition: all 0.3s ease-in-out;

    &:hover {
      background-color: ${({ theme }) => theme.colors.background};
      color: ${({ theme }) => theme.colors.text};
      box-shadow: 0 0 10px ${({ theme }) => theme.colors.shadow};
    }
  }
`;
