import styled from "styled-components";

export const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%
  height: fit-content;
  border: 2px solid ${({ theme }) => theme.colors.border_color};
  border-radius: 1rem;
  padding: 1rem;
  gap: 1rem;
  background-color: ${({ theme }) => theme.colors.background_card};
  box-shadow: 0 0 10px ${({ theme }) => theme.colors.shadow};
  color: ${({ theme }) => theme.colors.text};

  div{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }

  img{
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }
`;
