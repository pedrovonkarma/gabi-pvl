import logo from "../assets/logo.png"
import foto1 from "../assets/foto1.webp"
export default function ContainerA(){

    return(
    <div className="firstCont">
    <div className="headCont">
        
            <img src={logo} alt="logo"/>
            <p>Aprenda a desenhar e personalizar seus próprios<br/> moldes de caixa, para vender muito.</p>
            <h2>Um workshop para você começar a fazer os próprios personalizados, e os mais criativos em menos de 30 dias, mesmo que você nunca tenha trabalhado com isso.</h2>
            <button onClick={() => window.open("#")}>APRENDA A PARTIR DE AGORA</button>
        
    </div>
    <img className="foto2" src={foto1} alt="foto"/>
    </div>)
}