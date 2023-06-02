import { useState } from "react"
export default function ContainerD() {
    const resposta1 = 'Aprenda como trabalhar com a mistura de kits digitais sem perder a identidade visual, a trabalhar com uma paleta grande de cores sem perder a combinação entre elas e a desenvolver seus próprios moldes de caixa do zero, além de mockups 3D e montagem.';
    const resposta2 = 'Chega de depender somente da compra de moldes de outras papeleiras. Chega de se desesperar por não ter aquele molde que tanto queria. Agora você vai aprender a desenhar do zero e vamos começar pelo formato cilíndrico. O modelo que faz tanto sucesso no nosso perfil, que é tão pedido entre nossas clientes e é uma grande substituta do cofrinho e latinha.';
    const resposta3 = 'Uma releitura da milk, com um toque de inovação Decora Papel. A base como você já conhece e o topo como um novo lugar para se estar. Um grande lugar para explorarmos totens e grandes ousadias criativas.';
    const resposta4 = 'Agora você vai saber resolver aquela preocupação das clientes de quererem uma caixa que não tenha a necessidade de lotar de doces. Tudo pensando na economia. Dois tubetes em uma base quadradinha é a solução para quem não quer abrir mão de personalizados, mas quer enxugar os docinhos.';
    const resposta5 = 'A fase criativa do seu trabalho vai ficar muito mais fácil e com uma experiência mais gostosa ao desenhar as representações reais e em proporções reais das caixas. Não só pela facilidade de fazer as combinações de cores e elementos, mas também por a sua cliente entender mais do que está aprovando e ter expectativa atendida.';
    const resposta6 = 'Você vai ver como a montagem dos personalizados com bastante elementos não é um bicho de sete cabeças. Você vai dominar sequências de montagem para deixar seu trabalho mais rápido e conseguir pegar mais pedidos na semana, independente do tempo disponível que tenha.';
    const resposta7 = 'Contar histórias com os elementos sobrepostos é o futuro da papelaria personalizada. Os personalizados não precisam ter somente uma tagzinha de uma personagem. Agora eles podem trazer um conceito artístico de vários elementos se compondo para registrar uma cena, para despertar emoções e aguçarem a curiosidade de quem está na festa.';
    const resposta8 = 'Mesmo que você vá começar agora e tenha muitas dúvidas iniciais, no módulo de aulas extras você encontrará várias aulas para perder o medo e dominar tudo. E não somente para quem pode estar no início, mas dentro de 10 aulas, você também vai encontrar conteúdos como: como precificar uma peça que ainda nem tenho, como usar todo o potencial da sua impressora, como fazer berço para caixas de doce e até como configurar sua Sil para o corte.';
    const [r1, setR1] = useState('')
    const [r2, setR2] = useState('')
    const [r3, setR3] = useState('')
    const [r4, setR4] = useState('')
    const [r5, setR5] = useState('')
    const [r6, setR6] = useState('')
    const [r7, setR7] = useState('')
    const [r8, setR8] = useState('')




    return (<div className="fourthCont">
        <div className="textboxb">
            <div className="questionBox">
                FOTO
                <div onClick={() => { r1 === '' ? setR1(<p>{resposta1}</p>) : setR1('') }} className="question">
                    <h1>Clique para ler</h1>
                    <h2>+</h2>
                </div>
                {r1}
            </div>
            <div className="questionBox">
                FOTO
                <div onClick={() => { r2 === '' ? setR2(<p>{resposta2}</p>) : setR2('') }} className="question">
                    <h1>Clique para ler</h1>
                    <h2>+</h2>
                </div>
                {r2}
            </div>

            <div className="questionBox">
                FOTO
                <div onClick={() => { r3 === '' ? setR3(<p>{resposta3}</p>) : setR3('') }} className="question">
                    <h1>Clique para ler</h1>
                    <h2>+</h2>
                </div>
                {r3}
            </div>

            <div className="questionBox">
                FOTO
                <div onClick={() => { r4 === '' ? setR4(<p>{resposta4}</p>) : setR4('') }} className="question">
                    <h1>Clique para ler</h1>
                    <h2>+</h2>
                </div>
                {r4}
            </div>

            <div className="questionBox">FOTO
                <div onClick={() => { r5 === '' ? setR5(<p>{resposta5}</p>) : setR5('') }} className="question">
                    <h1>Clique para ler</h1>
                    <h2>+</h2>
                </div>
                {r5}
            </div>

            <div className="questionBox">FOTO
                <div onClick={() => { r6 === '' ? setR6(<p>{resposta6}</p>) : setR6('') }} className="question">
                    <h1>Clique para ler</h1>
                    <h2>+</h2>
                </div>
                {r6}
            </div>

            <div className="questionBox">FOTO
                <div onClick={() => { r7 === '' ? setR7(<p>{resposta7}</p>) : setR7('') }} className="question">
                    <h1>Clique para ler</h1>
                    <h2>+</h2>
                </div>
                {r7}
            </div>

            <div className="questionBox">FOTO
                <div onClick={() => { r8 === '' ? setR8(<p>{resposta8}</p>) : setR8('') }} className="question">
                    <h1>Clique para ler</h1>
                    <h2>+</h2>
                </div>
                {r8}
            </div>




        </div>
        <button>QUERO COMPRAR AGORA</button>
    </div>)
}