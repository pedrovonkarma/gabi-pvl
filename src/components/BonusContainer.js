import a from "../assets/bonus/1.png"
import b from "../assets/bonus/2.png"
import c from "../assets/bonus/3.png"
import d from "../assets/bonus/4.png"
import e from "../assets/bonus/5.png"

export default function BonusContainer(){

    return(
    <div className="bonusCont">
        <h1>COMPRANDO AGORA VOCÊ AINDA LEVA DE BÔNUS:</h1>
    <div className="bonusbox">
        
        <div className="bonuscard"><img src={a} alt="bonus"/><p>Cupom de 10% de desconto para comprar TODOS OS PRODUTOS DECORA PAPEL. <br/><br/>(ENQUANTO ESTIVER COM A FORMAÇÃO PAPELEIRA ATIVA)</p></div>
        {/* <div className="bonuscard"><img src={b} alt="bonus"/><p>Acesso ao Workshop: <br/>FORA DA CAIXA para as 20 primeiras pessoas que comprar.</p></div> */}
        <div className="bonuscard"><img src={c} alt="bonus"/><p>2 encontros ao vivo para as 20 primeiras pessoas que comprar. <br/><br/>Encontro 1 - Como criar um catálogo que cria desejo e aumente as suas vendas.<br/><br/>Encontro 2 - Como lidar com as “desculpas” dos seus clientes e fechar mais vendas.
</p></div></div><div className="bonusbox">
        <div className="bonuscard"><img src={d} alt="bonus"/><p>Criação de personalizados - 2 temas de festa infantil em alta. (PARA TODOS ALUNAS QUE ESTÃO ATIVAS)<br/><br/>AULA 1 - Criação de topo e caixinhas: Wandinha Adams.<br/><br/>AULA 2 - Criação de topo e caixinhas: Mario.
</p></div>
        <div className="bonuscard"><img src={e} alt="bonus"/><p>TRÁFEGO PAGO.<br/>AULA 1 - Como entender o básico dos anúncios online. <br/><br/>AULA 2 - Aumentando suas vendas na sua cidade com anúncios online.<br/><br/>AULA 3 - Como entender e melhorar os seus resultados.
</p></div></div>
    </div>)
}