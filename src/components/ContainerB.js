import ImageTemplate from "./ImageTemplate";
import foto3 from "../assets/foto3.webp";
import foto4 from "../assets/foto4.webp";
import foto5 from "../assets/foto5.webp";

export default function ContainerB(){

    return(<div className="modCont">
        <p>SÃO 3 MOLDES EXCLUSIVOS QUE VOCÊ SÓ ENCONTRA AQUI</p>
        <div className="mobgamb" style={{display: 'flex', width: '100%', justifyContent: 'center'}}>
        <ImageTemplate classN="imageContainer2" img={foto3} name="Caixa cubetes"/>
        <ImageTemplate classN="imageContainer2" img={foto4} name="Caixa cilindriquinha"/>
        <ImageTemplate classN="imageContainer2" img={foto5} name="Caixa curva"/>
        </div>
        </div>)
}