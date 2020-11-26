import styled from "styled-components";
import { shade } from "polished";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: 80px;
  justify-content: space-around;
  .ClassContainer {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  button {
    width: 120px;
    height: 38px;
    border-radius: 10px;
    background-color: #4f8263;
    color: #fff;
    border: 0;
    transition: background-color 0.2s;
    box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.3);

    &:hover {
      background: ${shade(0.2, "#4f8263")};
    }
  }
`;

export const CardBody = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 380px;
  height: 350px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.5);

  h2 {
    font-size: 72px;
    font-weight: bold;
  }

  h4 {
    font-size: 24px;
    font-weight: bold;
  }

  svg {
    height: 126px;
    width: 126px;
  }
`;

export const CardFull = styled.div`
  & {
    margin-right: 50px;
    margin-top: 150px;
  }
`;
