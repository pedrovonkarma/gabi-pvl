import phones from "../assets/foto20.webp"
export default function OfertaContainer() {

    return (<div className="oferta">
        <h1>PREPAREI UMA CONDIÇÃO ESPECIAL PARA VOCÊ APRENDER TUDO ISSO A PARTIR DE AGORA</h1>
        <div className="offertbox">
            <div className="oferta1"><p>
                - Mockup 3D<br />
                - Garantia de 7 dias<br />
                - Conteúdo 100% digital<br />
                - Aplicação do cenarismo<br />
                - Combinação de kits digitais<br />
                - Desenho do próprio molde de caixa<br />
                - Criação de totem com base circular<br />
                - Criação de totem composto no tubete<br />
                - Trabalho com paleta com mais de 7 cores <br />
                - Personalização entre papel e vinil adesivo<br />
                - 10 aulas extras de nivelamento e dúvidas gerais<br />
                - Desenvolvimento de 3 moldes de caixas e + 2 bônus
            </p></div>
            <div className="oferta2"><img className="phonecollage mobhide" src={phones} alt="phones" /><h2>R$ 197,00 à vista.<br />Dividido em 12x R$ 19,78</h2><button>ENTRAR AGORA</button></div>
        </div>
    </div>)
}