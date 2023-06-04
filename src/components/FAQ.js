import { useState } from "react"
export default function FAQ(){
    const resposta1 = "Absolutamente não! O foco é ensinar toda a técnica de deixar seus personalizados super produzidos independente se corta na mão ou na tesoura. Uma tesoura não define fazer personalizados criativos ou não.";
    const resposta2 = "Toda a dinâmica do curso é considerando que a papeleira não conheça nada do nicho de papelaria personalizada para festa infantil, nada sobre máquinas que auxiliam o trabalho e nada sobre a técnica de criação das peças. Isso quer dizer que independente do nível de expertise que a papeleira tem, o foco da formação é formá-las no método Decora de criar e desenhar.";
    const resposta3 = "Totalmente! Como o curso tem todo o passo a passo para ensiná-las do zero. Você verá que criatividade é algo que pode ser desenvolvido em qualquer pessoa que tenha um método para isso.";
    const resposta4 = "As visualizações são ilimitadas, mas monitoramos atividades suspeitas. A compra do curso dá direito a 12 meses (1 ano) de acesso.";
    const resposta5 = "Sim. Você pode assistir de qualquer dispositivo com internet.";
    const resposta6 = "Sim, temos um garantia incondicional de 7 dias, a partir da compensação do pagamento. Basta mandar um e-mail que devolvemos todo o valor pago, sem justificativas e nem burocracias.";
    const resposta7 = "Não, o acesso ao curso é individual. Não pode haver acesso simultâneo e os dados do aluno são anexados ao vídeo podendo identificar possíveis compartilhamentos indevidos.";
    const [r1, setR1] = useState('')
    const [r2, setR2] = useState('')
    const [r3, setR3] = useState('')
    const [r4, setR4] = useState('')
    const [r5, setR5] = useState('') 
    const [r6, setR6] = useState('') 
    const [r7, setR7] = useState('') 
    


    
    return(<div className="FAQ">
        <h1>Perguntas frequentes:</h1>
        <div className="textboxb">
        <div className="questionBox2">
            <div onClick={() => {r1===''? setR1(<p>{resposta1}</p>) : setR1('')}} className="question2">
                <h1>Preciso ter máquina de corte para fazer o curso?</h1>  
                <h2>+</h2>
            </div>
            {r1}
        </div>

        <div className="questionBox2">
            <div onClick={() => {r2===''? setR2(<p>{resposta2}</p>) : setR2('')}} className="question2">
                <h1>Nunca fiz personalizados, consigo aprender igual?</h1>
<h2>+</h2>
            </div>
            {r2}
        </div>

        <div className="questionBox2">
            <div onClick={() => {r3===''? setR3(<p>{resposta3}</p>) : setR3('')}} className="question2">
                <h1>Não sou criativa, conseguirei ter bons resultados?</h1>
                <h2>+</h2>
            </div>
            {r3}
        </div>

        <div className="questionBox2">
            <div onClick={() => {r4===''? setR4(<p>{resposta4}</p>) : setR4('')}} className="question2">
                <h1>Quantas vezes posso assistir às aulas e por quanto tempo terei acesso?</h1>
                <h2>+</h2>
            </div>
            {r4}
        </div>

        <div className="questionBox2">
            <div onClick={() => {r5===''? setR5(<p>{resposta5}</p>) : setR5('')}} className="question2">
                <h1>Posso assistir em celulares ou tablets?</h1>
                <h2>+</h2>
            </div>
            {r5}
        </div>

        <div className="questionBox2">
            <div onClick={() => {r6===''? setR6(<p>{resposta6}</p>) : setR6('')}} className="question2">
                <h1>Posso desistir da compra?</h1>
                <h2>+</h2>
            </div>
            {r6}
        </div>

        <div className="questionBox2">
            <div onClick={() => {r7===''? setR7(<p>{resposta7}</p>) : setR7('')}} className="question2">
                <h1>Posso comprar e dividir o acesso com outra pessoa?</h1>
                <h2>+</h2>
            </div>
            {r7}
        </div>
        </div>
    </div>)
}