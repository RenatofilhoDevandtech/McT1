/** @format */


import styled, { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`

 * {
     margin: 0;
     padding: 0;
     box-sizing:border-box;
     font-family: sans-serif;
 }

`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 20px;

  @media (max-width: 768px) {
    flex-direction: column; 
    text-align: center;
  }

  div {
    display: flex;
    gap: 20px;
    align-items: center;
    
  }

  section {
    display: flex;
  }
.baixeapp {
padding: 10px 20px; 
    border-radius: 20px; 
    font-weight: bold; 
    cursor: pointer; 
    transition: background-color 0.3s ease; 
    @media (max-width: 768px) {
      margin-top: 10px; 
    }

    &:hover {
      background-color: #e7d20e; 
    }

}
  .mequi {
    background-color: #FFC72C;
    padding: 10px 20px; 
    border-radius: 20px; 
    font-weight: bold; 
    cursor: pointer; 
    transition: background-color 0.3s ease; 
    @media (max-width: 768px) {
      margin-top: 10px; 
    }

    &:hover {
      background-color: #e7d20e; 
    }
  }
`;export const HeaderLink = styled.a`
text-decoration: none;
color: black;
font-weight: bold;
transition: color 0.3s ease;

&:hover {
  color: #ffc72c;
}
`;