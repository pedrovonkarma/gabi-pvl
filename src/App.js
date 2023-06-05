import ContainerA from "./components/ContainerA"
import ContainerC from "./components/ContainerC";
import GlobalStyle from "./Reset";
import ContainerThird from "./components/ContainerThird";
import ContainerE from "./components/ContainerE";
import ContainerD from "./components/ContainerD";
import ContainerTexto from "./components/ContainerTexto";
import ContainerTextodois from "./components/ContainerTextodois";
import OfertaContainer from "./components/OfertaContainer";
import ContainerTextoTres from "./components/ContainerTextoTres";
import FAQ from "./components/FAQ";
import ContainerB from "./components/ContainerB";
import Footer from "./components/Footer";
function App() {
  return (
    <>
    <GlobalStyle/>
    {/* <button onClick={() => window.open("https://api.whatsapp.com/send?phone=5518997294290&text=Estou%20na%20p%C3%A1gina%20do%20Forma%C3%A7%C3%A3o%20Papeleira%20e%20estou%20com%20uma%20d%C3%BAvida%2C%20voc%C3%AA%20pode%20me%20ajudar%3F")} className="wppButton"><BsWhatsapp color='#FFFFFF' fontSize={'50px'} /></button> */}
    <ContainerA/>
    <ContainerC/>
    <ContainerThird/>
    <ContainerE/>
    <ContainerB/>
    <ContainerD/>
    <ContainerTexto/>
    <ContainerTextodois/>
    <OfertaContainer/>
    <ContainerTextoTres/>
    <FAQ/>
    <Footer/>
    </>
  );
}

export default App;
