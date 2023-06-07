import foto2 from '../assets/foto4.webp'

export default function ContainerThird() {

    return (<div className="containerThird">
        <h1>O QUE É O FORA DA CAIXA 2?</h1>
        <div className='secondCont'><div className='mobMod'><p>O workshop Fora da Caixa, em sua segunda edição, é seu aprendizado seguro de técnicas estratégicas e em alta no mercado da papelaria personalizada, onde, sem ele, somente as mais experientes do mercado conseguiriam aplicar.</p>
            <p>Você vai dominar todo o passo a passo para criar cenários, contando histórias, nas personalizações das caixas e terá base para criar os próprios moldes de caixa com diferentes tamanhos e formatos.</p>
            <p>Esse workshop possui didática clara e passo a passo simples de ser aplicado, para que você tenha total entendimento durante as aulas e facilidade maior ao praticar tudo o que aprender.</p>
            <p>O melhor de tudo é que você pode praticar e ganhar dinheiro com isso de dentro da sua própria casa e ainda ser referência no mercado por fazer peças criativas.</p>
        </div><img className='foto2' src={foto2} alt='foto' /></div><button onClick={() => window.open("https://pay.kiwify.com.br/ZznJHKj")}>QUERO ASSISTIR ÀS AULAS AGORA</button>

    </div>)
}