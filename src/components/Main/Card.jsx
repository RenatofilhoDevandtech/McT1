/** @format */
import * as S from "./Main_style";

// eslint-disable-next-line react/prop-types
export default function Card({ imagem, texto }) {
  return (
    <S.Card>
      <img src={imagem} alt="img" />
      <h2>{texto}</h2>
      <button> Eu Quero </button>
    </S.Card>
  );
}