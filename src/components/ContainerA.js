
import logo from "../assets/logo.png"

export default function ContainerA(){

    return(<div className="headCont">
        
            <img src={logo} alt="logo"/>
            <p>Aprenda a desenhar e personalizar seus próprios moldes de caixa, para vender muito.</p>
            <h2>Um workshop para você começar a fazer os próprios personalizados, e os mais criativos em menos de 30 dias, mesmo que você nunca tenha trabalhado com isso.</h2>
            <button onClick={() => window.open("#")}>APRENDA A PARTIR DE AGORA</button>
        
    </div>)
}