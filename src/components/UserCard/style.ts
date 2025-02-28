import styled from "styled-components";

export const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%
  height: fit-content;
  border: 2px solid black;
  border-radius: 1rem;
  padding: 1rem;
  gap: 1rem;
  background-color: #f0f0f0;
  box-shadow: 0 0 10px rgb(0, 0, 0);

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
