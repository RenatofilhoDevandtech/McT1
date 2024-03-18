/** @format */
import bigmac from "../../assets/bigmac.svg";
import sorvete from "../../assets/sorvete.svg";
import batata from "../../assets/batata.svg";
import sofa from "../../assets/sofa.svg";
import loja from "../../assets/loja.svg";
import juntos from "../../assets/juntos.svg";
import elio from "../../assets/elio.jpg";
import mcflurry from "../../assets/mcflurry.png";
import meumequi from "../../assets/meumequi.jpg";
import * as S from "./Main_style";
import Card from "./Card";
import { useState } from "react";

function Main() {
  const [displayedImage, setDisplayedImage] = useState(bigmac);

  const handleImageClick = (imageSrc) => {
    if (imageSrc === sorvete || imageSrc === batata || imageSrc === bigmac) {
      setDisplayedImage(imageSrc);
    }
  };

  return (
    <main>
      <S.Section>
        <div>
          <img id="bigmac-image" src={displayedImage} alt="" onClick={() => handleImageClick(bigmac)} />
          <h1>
        BATEU AQUELA <span className="red-text">#FOME</span> 
        DE <span className="red-text">MÉQUI</span>?
          </h1>
        </div>

        <figure>
          <img className="bigmac" src={bigmac} alt="" onClick={() => handleImageClick(bigmac)} />
          <img className="bigmac" src={batata} alt="" onClick={() => handleImageClick(batata)} />
          <img className="bigmac" src={sorvete} alt="" onClick={() => handleImageClick(sorvete)} />
        </figure>
      
        <S.InfoDiv>
        <p> 
        peça seu Méquie pelo McDelivery ou Peça e Retire 
        <button>Clique Aqui </button>
        </p>
        </S.InfoDiv>
        

      </S.Section>

      <S.Sectionpromocao>
        <h2 className="promoname">Promoção</h2>
        <S.DivCard>
          <Card imagem={sofa} texto={"Que tal um #MéquiNoSofá?"} />
          <Card imagem={loja} texto={"venha conhecer nossa nova loja"} />
          <Card imagem={juntos} texto={"Confira as medidas que o Méqui adotou!"} />
        </S.DivCard>
        <S.DivCard>
          <Card imagem={elio} texto={"Explorando o Universo com Elio no McLanche Feliz."} />
          <Card imagem={meumequi} texto={"Meu Méqui"} />
          <Card imagem={mcflurry} texto={"Atenção! Se olhar pro McFlurry não vai ter mais jeito, vai ter que provar."} />
        </S.DivCard>
      </S.Sectionpromocao>
    </main>
  );
}

export default Main;
