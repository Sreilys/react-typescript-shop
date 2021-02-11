import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  border: 1px solid #ccc;
  height: 100%;
  button {
    color: white;
    background-color: orange;
    padding: 10px;
    margin: 10px;
    &:hover {
      color: black;
      background-color: #ccc;
    }
  }
  img {
    max-height: 250px;
    object-fit: cover;
    border-radius: 20px 20px 0 0;
  }
  div {
    font-family: Arial, Helvetica, sans-serif;
    padding: 1rem;
    height: 100%;
  }
`;
