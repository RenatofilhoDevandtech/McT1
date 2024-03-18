/** @format */
import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  align-items: center;
  background-color: #ffc72c;
  padding: 20px;

  div {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  h1 {
    font-size: 4rem;
    color: white;
  }

  img {
    width: 20vw;
    height: auto;
  }

  .bigmac {
    width: 10vw;
    max-width: 100px;
    height: auto;
  }

  .red-text {
    color: red;
  }
`;

export const InfoDiv = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
  text-align: center; /* Centraliza o texto e o botão */

  p {
    font-size: 16px;
    margin-bottom: 10px;
    color: #0c0b0b; /* Cor do texto */
  }

  button {
    background-color: white; /* Cor de fundo branca */
    color: #0c0b0b; /* Cor do texto preto */
    border: none;
    padding: 10px 20px;
    border-radius: 20px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  button:hover {
    background-color: #f0f0f0; /* Cor de fundo ao passar o mouse */
  }
`;

export const Card = styled.div`
  width: 50vw;
  max-width: 300px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 10px;

  img {
    width: 100%;
    height: auto;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
  }

  h2 {
    background-color: white;
    color: black;
    width: 100%;
    padding: 20px;
    text-align: center;
    margin: 0;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
  }

  button {
    font-size: 1rem;
    color: #0c0b0b;
    background-color: #e7d20e;
    border: none;
    padding: 10px 20px;
    border-radius: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  button:hover {
    background-color: #ecc20a;
  }
`;

export const Sectionpromocao = styled.section`
  background-color: #d49d05;
  padding: 20px;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;

  .promoname {
    font-size: 4rem;
    color: white;
    padding: 20px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const DivCard = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  gap: 5px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;
