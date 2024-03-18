/** @format */

import logo from "../../assets/logo.svg";
import googlestore from "../../assets/googlestore.svg";
import appstore from "../../assets/appstore.svg";
import * as S from "./Footer_style.jsx";


function Footer (){
return(
    <>
    <S.Rodape>
      <img src={logo} alt="" />
      <p>© McDonald’s 2024 <span> Esta página é apenas para fins de estudo.</span> </p>
      <section>
        <div>
          <img src={googlestore} alt="" />
        </div>
        <div>
          <img src={appstore} alt="" />
        </div>
      </section>
    </S.Rodape>
    
    </>


);


}

export default Footer;