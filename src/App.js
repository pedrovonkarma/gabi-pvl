import BonusContainer from "./components/BonusContainer";
import ContainerA from "./components/ContainerA"
import ContainerB from "./components/ContainerB";
import ContainerC from "./components/ContainerC";
import ContainerD from "./components/ContainerD";
import ContainerE from "./components/ContainerE";
import OfertaContainer from "./components/OfertaContainer";
import PrintsContainer from "./components/PrintsContainer";
import {BsWhatsapp} from "react-icons/bs"
import GlobalStyle from "./Reset";
function App() {
  return (
    <>
    <GlobalStyle/>
    <button onClick={() => window.open("https://api.whatsapp.com/send?phone=5518997294290&text=Estou%20na%20p%C3%A1gina%20do%20Forma%C3%A7%C3%A3o%20Papeleira%20e%20estou%20com%20uma%20d%C3%BAvida%2C%20voc%C3%AA%20pode%20me%20ajudar%3F")} className="wppButton"><BsWhatsapp color='#FFFFFF' fontSize={'50px'} /></button>
    <ContainerA/>
    <ContainerB/>
    <ContainerC/>
    <ContainerD/>
    <ContainerE/>
    <PrintsContainer/>
    <BonusContainer/>
    <OfertaContainer/>
    </>
  );
}

export default App;
