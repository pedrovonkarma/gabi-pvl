import { useState } from "react"
import foto1 from "../assets/foto1.png"
export default function ContainerD(){
    const resposta1 = "FP é para qualquer pessoa que queira ter uma renda extra e que queira empreender no mercado de Papelaria Personalizada. Isso mesmo! Serve para quem está no início absoluto até para quem já tem conhecimentos avançados. Além disso tudo, serve também para quem quer apenas se aventurar no mundo dos personalizados, fazendo peças encantadoras para amigos, parentes e até mesmo para sua própria festa!"
    const resposta2 = "O FP foi criado para ajudar papeleiras a desbloquear a capacidade criativa e possibilitar uma liberdade nunca alcançada antes."
    const resposta3 = "O FP é o melhor lugar onde você pode se desenvolver por completo. Nele você aprende desde o básico, técnicas avançadas de decoração de peças, até estratégia de negócio, posicionamento e crescimento como marca. A maioria das papeleiras começa com coletivas e usando projetos prontos. Ao longo do tempo isso traz um bloqueio e o FP traz a liberdade de não depender mais de projetos prontos e fazer mais do mesmo. O método é simples e qualquer pessoa pode replicar."
    const resposta4 = "O FP proporciona para a papeleira que ela tenha o potencial de elevar o nível de criação e harmonização, com técnicas de fácil entendimento e aplicação. Focamos em um aprendizado de técnica, onde você não precisará de uma máquina para se diferenciar no mercado. Além disso, você pode ganhar muito mais por um produto quando comparado a um brinde."
    const resposta5 = "Assim que acessar o FP, você deve acessar o módulo INFORMATIVO. Recomendamos que inicie os PRIMEIROS PASSOS para que tenha uma noção geral sobre o mundo da papelaria personalizada. Depois, recomendamos que veja todos os EVENTOS GRATUITOS que disponibilizamos. Depois disso, você estará pronta para pôr a MÃO NA MASSA!"
    const [r1, setR1] = useState('')
    const [r2, setR2] = useState('')
    const [r3, setR3] = useState('')
    const [r4, setR4] = useState('')
    const [r5, setR5] = useState('') 
    


    
    return(<div className="fourthCont">
        <img className="mobhide" alt="gabi" src={foto1}/>
        <div className="textboxb">
        <div className="questionBox">
            <div onClick={() => {r1===''? setR1(<p>{resposta1}</p>) : setR1('')}} className="question">
                <h1>Pra quem é o FORMAÇÃO PAPELEIRA?</h1>
                <h2>+</h2>
            </div>
            {r1}
        </div>

        <div className="questionBox">
            <div onClick={() => {r2===''? setR2(<p>{resposta2}</p>) : setR2('')}} className="question">
                <h1>Por que vocês decidiram criar o FORMAÇÃO PAPELEIRA?</h1>
                <h2>+</h2>
            </div>
            {r2}
        </div>

        <div className="questionBox">
            <div onClick={() => {r3===''? setR3(<p>{resposta3}</p>) : setR3('')}} className="question">
                <h1>Por que o método do FORMAÇÃO PAPELEIRA é o melhor?</h1>
                <h2>+</h2>
            </div>
            {r3}
        </div>

        <div className="questionBox">
            <div onClick={() => {r4===''? setR4(<p>{resposta4}</p>) : setR4('')}} className="question">
                <h1>O que as pessoas podem alcançar com o FORMAÇÃO PAPELEIRA?</h1>
                <h2>+</h2>
            </div>
            {r4}
        </div>

        <div className="questionBox">
            <div onClick={() => {r5===''? setR5(<p>{resposta5}</p>) : setR5('')}} className="question">
                <h1>O que elas devem fazer após comprar o FORMAÇÃO PAPELEIRA?</h1>
                <h2>+</h2>
            </div>
            {r5}
        </div>




        </div>
    </div>)
}