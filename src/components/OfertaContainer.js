export default function OfertaContainer() {

    return (<div className="oferta">
        <h1>Preparei uma oferta especial para você se matricular agora… é limitado!<br /><br />Aprenda como você pode estar no conforto da sua casa e ganhar dinheiro por apenas 12x R$77,11</h1>
        <button onClick={() => window.open("https://pay.kiwify.com.br/06X8PHS")} className="offertbuttonnew">ENTRAR AGORA</button>
        <div className="offertbox">
            {/* <div className="offertbutton">
                <h3>De R$ 768,00 por
                    12x de R$ 49,90 ou R$ 497,00 à vista. <br />
                    (esse valor com desconto é por tempo limitado)<br /><br />

                    PAGAMENTO 100% SEGURO | ACESSO IMEDIATO
                </h3><button onClick={() => window.open("https://pay.kiwify.com.br/06X8PHS")}>ENTRAR AGORA</button>
            </div> */}
            <div className="offertcard"><h2>FORMAÇÃO PAPELEIRA</h2><p>
                - Mural de avisos<br />
                - Semana gratuita - Topos únicos e criativos<br />
                - Semana do topo perfeito<br />
                - Como transformar seus personalizados em super produções<br />
                - Aulão criativo<br />
                - Aulas de precificação e vendas<br />
                - Manual da papelaria de sucesso<br />
                - Mundo do papel<br />
                - Silhouettando<br />




            </p></div>
            <div className="offertcard"><h2>FORMAÇÃO PAPELEIRA</h2><p>
                - Imprimindo e usando a Sil<br />
                - Tags e adesivos <br />
                - Topos únicos e lacradores<br />
                - Personalizados<br />
                - Letras 3D<br />
                - Começando uma canal de vendas<br />
                - Começando a vender <br />
                - Fotografando seu produto + reels<br />
                - Liga da Criatividade temática<br />
                - Tira dúvida<br />
                - Bônus<br />
            </p></div>

        </div>

    </div>)
}