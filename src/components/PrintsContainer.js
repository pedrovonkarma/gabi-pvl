import cell1 from "../assets/prints/cell1.png"
import cell2 from "../assets/prints/cell2.png"

export default function PrintsContainer(){

    return(<div className="prints">
        <h1>Confira o que as alunas dizem sobre os métodos:</h1>
        <div className="sectiona"><img src={cell1} alt="print"/><img src={cell2} alt="print"/></div>
        <button onClick={() => window.open("https://pay.kiwify.com.br/06X8PHS")}>QUERO TER ESSES RESULTADOS</button>
    </div>)
}