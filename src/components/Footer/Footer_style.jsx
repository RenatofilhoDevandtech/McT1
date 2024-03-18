/** @format */
import styled from "styled-components";

export const Rodape = styled.footer`
  background-color: white;
  color: #0e0d0c;
  padding: 5px;

  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    display: flex;
    gap: 20px; 
    justify-content: center;
    align-items: center;
    flex-wrap: wrap; 
    margin-top: 5px; 
  }

  section {
    display: flex;
    gap: 10px; 
    justify-content: center;
    align-items: center;
    margin-top: 5px; 
  }

  @media (min-width: 768px) {
    flex-direction: row; 
    justify-content: space-between; 
    padding: 20px 50px; 
  }
`;
