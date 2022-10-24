import { FooterContainer } from "./footerStyle";
import { useUtils } from "./hooks/utils";

interface FooterInterface{
    id:string
}

export function Foot ({id}:FooterInterface) {

    return (
        <FooterContainer id={id}>
            <h2>Minha experiência com algumas tecnologias:</h2>
            <div className="tech">
                <h3>Html 5</h3>
                <div className="alt" id="tech_html">
                    <p>A primeira linguagem de marcação de texto que conheci, ainda na minha primeira faculdade, foi o LaTeX, uma linguagem usada para escrever textos científicos, especialmente nas áreas de computação e matemática.</p>
                    <p>Quando conheci o Html passei a usá-lo até para escrever listas pessoais em páginas offline, devido à sua praticidade e naturalidade.</p>
                    <p>A versão 5 traz mudanças semânticas, que tornam possível o aumento da acessibilidade às páginas, facilitando a legibilidade da página por qualquer dispositivo (por exemplo, leitores automáticos).</p>
                </div>    
            </div>
            <div className="tech">
                <h3>Css 3</h3>
                <div className="alt" id="tech_css">
                    <p>O Css trabalha junto do Html para criar os estilos de cada item da página. Esses estilos normalmente são estáticos, mas na minha opinião o mais interessante é usá-los para suscitar uma dinamicidade, usando estratégias com o <i>:hover</i>, brincando com as posições, opacidade e display dos elementos na página.</p>
                    <p>Infelizmente, ainda hoje nem todo o estilo pode ser feito com Css, mas a versão 3 ampliou imensamente a gama de possibilidades. Em tempos remotos, até as bordas arredondadas dos elementos precisavam ser feitas manualmente, seja com imagens ou com <i>div</i>'s aninhados.</p>
                    <p>Além disso, a versão 3 também serviu para unificar algumas peculiaridades das linguagens internas dos navegadores de internet, unificando os antigos <i>-webkit</i>, <i>-moz</i> e trouxe animações para minimizar a necessidade de javascript para a criação de elementos dinâmicos nas páginas (como banners rotativos por exemplo).</p>
                </div>    
            </div>
            <div className="tech">
                <h3>Javascript</h3>
                <div className="alt">
                    <p>O javascript é uma linguagem de tipagem dinâmica, o que me fez estranhar um pouco das primeiras vezes que usei, em meados de 2009. Mas, na época, era a única forma de criar elementos dinâmicos na página e, por isso, aprendi a usá-lo para tudo que precisava.</p>
                    <p>Com a vinda do Css3, diminui o uso de javascript para criar estilos dinâmicos. Porém, mais ou menos na mesma época, a técnica de inserir conteúdo dinamicamente em elementos já carregados na página através do javascript (Ajax) se popularizou e comecei a usá-la em praticamente todas as possibilidades.</p>
                    <p>Através do Ajax, diminuímos a quantidade de conteúdo requisitada do servidor e evitamos o carregamento de páginas, tornando as páginas mais rápidas, agradáveis e dinâmicas.</p>
                </div>    
            </div>
            <div className="tech">
                <h3>Php e MySQL</h3>
                <div className="alt">
                    <p>De 2009 a 2013, o Php foi a linguagem que usei para acessar o banco de dados e escrever todas as páginas em que trabalhei. Mesmo as solicitações utilizando técnicas do Ajax acessavam páginas criadas pelo Php para criar conteúdo na página já carregada.</p>
                    <p>A linguagem Php é bem simples e, ao mesmo tempo, robusta para as aplicações da época, visto que é especializada em trabalhar com texto e, portanto, perfeita para a manutenção de páginas web.</p>
                    <p>Além disso, trabalhei também com bancos de dados em MySql, que eram acessados pelo Php como arrays, o que facilitava bastante o trabalho de inserção, alteração, deleção, ordenação e exibição dos dados.</p>
                    <p>Ainda nesse período, aprendi a trabalhar com chaves (primárias e estrangeiras) e usar os diversos tipos de <i>join</i> para associar tabelas diferentes num único select e exibir os dados de forma mais eficiente.</p>
                </div>
            </div>
            <div className="tech">
                <h3>ReactJs e Git</h3>
                <div className="alt">
                    <p>Quando voltei a trabalhar com programação, em 2022, toda a indústria havia mudado. Programadores haviam se especializado em front e back end.</p>
                    <p>O React é uma biblioteca de Javascript front-end usada para acessar API's e auxiliar na criação de uma interface para o usuário da página.</p>
                    <p>Creio que seus maiores diferenciais para o programador (e foram também os maiores desafios no início para mim) são o trabalho através de componentes (no lugar de funções e/ou objetos) e o foco em programação funcional.</p>
                    <p>Por conta da programação funcional, o React supõe que a maioria dos conteúdos na página são estáticos e só atualiza cada componente quando necessário, com a utilização de <i>estados</i>, que, na minha opinião, são a parte mais importante da linguagem.</p>
                    <p>A componentização proposta pelo React, com pouca integração entre os componentes, auxilia bastante na construção de projetos grandes, com equipes de programadores. Além de auxiliar a padronização do código.</p>
                    <p>Além do React, o versionamento da página através da ferramenta Git permite que visualizar e resolver os conflitos nos casos eventuais onde programadores precisem modificar o mesmo código simultaneamente.</p>
                </div>    
            </div>
            <div className="tech">
                <h3>Next.js, Typescript e Styled-components</h3>
                <div className="alt">
                    <p>Junto com o React, usamos o Next.js para renderizar parte das páginas no servidor e garantir que elas sejam exibidas com segurança e confiabilidade mesmo nos navegadores dos usuários sem javascript.</p>
                    <p>Também tenho usado o Typescript, que aumenta a confiabilidade da tipagem do javascript e evita de antemão problemas ao acessar elementos indefinidos, nulos ou ainda não carregados da página. Essa segurança acaba sendo bastante importante ao lidar com o React, já que algumas funções são executadas antes do carregamento de muitos elementos da página.</p>
                    <p>Para estilizar a página, há algumas bibliotecas feitas espeficiamente para otimizar o trabalho com ReactJs (Css-in-js), que inserem automaticamente apenas os estilos dos elementos renderizados, garantindo que o usuário receba o mínimo de código necessário e relaciona cada estilo/classe a um (ou alguns) componentes, evitando sobreposição em projetos muito grandes. Trabalhei com a biblioteca styled-components, cuja sintaxe é bem semelhante ao próprio Css 3.</p>
                </div>    
            </div>

            <div className="contatos">
                <h2>Contatos:</h2>
                <a title="E-mail" rel="noreferrer" target="_blank" className='email link' href="mailto:himehimur@gmail.com"></a>
                <a title="What's app" rel="noreferrer" target="_blank" className='phone link' href="https://api.whatsapp.com/send?phone=5547988462624"></a>
                <a title="LinkedIn" rel="noreferrer" target="_blank" className='linkedin link' href="https://www.linkedin.com/in/hihccf/"></a>
                <a title="GitHub" rel="noreferrer" target="_blank" className='github link' href="https://github.com/Hime-chan"></a>
            </div>
        </FooterContainer>
    )
}

