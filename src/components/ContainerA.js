
import logo from "../assets/logo.png"

export default function ContainerA(){

    return(<div className="headCont">
        
            <img src={logo} alt="logo"/>
            <p>Ensino mulheres a ganhar de R$2.000,00 a R$5.000,00 mil reais por mês trabalhando de casa com papelaria personalizada.</p>
            <div className="video-responsive">
    <iframe
      width="640"
      height="360"
      src={`https://www.youtube.com/embed/zJtGYcXbZs8`}
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    />
  </div>
            <button onClick={() => window.open("https://pay.kiwify.com.br/06X8PHS")}>ENTRAR AGORA PARA A FORMAÇÃO PAPELEIRA</button>
        
    </div>)
}