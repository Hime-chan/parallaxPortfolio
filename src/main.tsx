//import { Parallax } from "react-scroll-parallax";
import { useUtils } from "./hooks/utils";
import { Great, TimelineContainer } from "./mainStyles";

interface MainInterface{
        id:string
    }
    
export function Main ({id}:MainInterface) {
    const { lifetimeDivClass } =useUtils();     
    return (
        <>
          <TimelineContainer id="mainId">
            <div className={"lifetime1 "+lifetimeDivClass[0]}><h3>Ciência da computação de 2007 a 2009</h3>
                <p>Em 2007, com 18/19 anos, iniciei o curso de ciência da computação na Universidade Federal de Alagoas (UFAL), onde tive meu primeiro contato com a programação. Nos anos de faculdade, aprendi a trabalhar com C e C++ (C era meu favorito).</p>
                <p>Minhas disciplinas favoritas eram programação procedural (ou "Programação 1"), matemática discreta, teoria e paradigmas de linguagem de programação (ou "TPLP"), linguagens formais e autômatos e circuitos digitais.</p>
                <p>Meu histórico escolar pode ser visto <a href="historicoUFAL.pdf" target="_blank" rel='noreferrer'>aqui</a>.</p>
                <p>Infelizmente, precisei me mudar para Santa Catarina no meio do curso (terminei apenas os dois primeiros anos e acabei não tendo contato com algumas disciplinas bem importantes, como banco de dados, inteligência artificial, sistemas operacionais e computação gráfica).</p>
            </div>
            <div className={"lifetime2 "+lifetimeDivClass[1]}><h3>Programadora web de 2009 a 2013</h3>
                <p>Já em Santa Catarina, comecei a trabalhar de programadora na empresa <a href="http://infodigitalle.com.br" target="_blank" rel='noreferrer'>Info Digitalle</a>, a única empresa de software da cidade onde morava.</p>
                <p>Nesta época, comecei a trabalhar integralmente com programação web, usando as linguagens de programação Javascript e Php e as linguagens de marcação de texto e estilização Html, Css.</p>
                <p>E como não existiam subdivisões no trabalho de programador web, eu fazia do front-end ao back-end e também o atendimento ao cliente.</p>
                <p>O trabalho era presencial. Minha rotina consistia em receber imagens em .psd com o layout do site e programar toda a estrutura funcional do site, seu banco de dados, o painel administrativo para o cliente, as páginas em Php e as partes dinâmicas em Javascript. Não cheguei a usar JQuery, já que para as nossas necessidades seria uma solução exagerada e a eficiência e limpeza do código se mantia melhor com códigos próprios. No último anos de trabalho, aprendi a usar técnicas de Ajax para evitar o (re)carregamento de páginas.</p>
                <p>A manutenção das páginas e adição de novas funcionalidades também cabia a mim. Havia cerca de 30 a 50 websites, nos quais os clientes cadastravam notícias, a agenda das sessões e outros eventos no município, a legislatura atual, a mesa diretora e fotos do município. </p>
                <p>Como não havia uma equipe de programação trabalhando nos projetos, não havia a necessidade de usar softwares de controles de versão.</p>
            </div>            
            <div className={"lifetime3 "+lifetimeDivClass[2]}><h3>Graduação, mestrado e doutorado em matemática de 2010 a 2021</h3>
                <p>Enquanto trabalhava como programadora, decidi completar uma graduação. Como o curso de Ciência da Computação só era oferecido nos períodos matutino e vespertino (tempo integral), não consegui conciliar os estudos e o trabalho e fiz Licenciatura em Matemática (o único curso oferecido em instituição federal em período noturno na região onde morava na época).</p>
                <p>Cursei <a rel='noreferrer' href="historicoIFC.pdf" target="_blank">Licenciatura em Matemática no Instituto Federal Catarinense (IFC- Campus Rio do Sul)</a> e, durante o curso, fiz alguns pequenos projetos em programação para serem usados na sala de aula.</p>
                <div className='projectLinks'>
                        [ Futuramente adicionarei alguns dos meus projetos antigos aqui ]
                </div>                
                <p>Esse novo contato com matemática me fez decidir me aprofundar mais no conhecimento científico-matemático. Terminando a licenciatura, fiz <a href="historicoUFAL_mestrado.pdf" target="_blank" rel='noreferrer'>mestrado na Universidade Federal de Alagoas</a> na área de matemática pura, subárea de álgebra, especificamente, representações de álgebras.</p>
                <p>Terminando o mestrado, iniciei o meu <a href="historicoUSP.pdf" target="_blank" rel='noreferrer'>doutorado na USP</a>, também na subárea de representações algébricas.</p>
                <p>Por conta da pandemia, as aulas foram pausadas e não consegui concluir minha tese. Assim, pedi trancamento de matrícula até dezembro deste ano e comecei a trabalhar como professora.</p>
                <p>Fui professora substituta no Instituto Federal Catarinense - Campus Rio do Sul (o mesmo lugar que fiz minha graduação) por 18 meses, onde ministrei as disciplinas de Cálculo 1 e 3, Geometria analítica, Álgebra linear I e II, Álgebra (abstrata), Pré-cálculo e matemática para o ensino médio; nas turmas de Bacharaleado em Ciência da computação, Licenciatura em Matemática, Licenciatura em Física, Mecatrônica, Técnico em agropecuária, técnico em informática e técnico em agroecologia.</p>
                <p>Infelizmente, cheguei a uma conclusão que eu já esperava: Não me sinto confortável em sala de aula. Especialmente na condição de professora substituta, que não permite (principalmente pela alta carga horária dentro da sala de aula e diversidade de disciplinas) nenhuma dedicação à pesquisa.</p>
                <p>Assim, decidi voltar à minha antiga paixão de programar.</p>
            </div>            
            <div className={"lifetime4 "+lifetimeDivClass[3]}><h3>O retorno à programação em 2022</h3>
                <p>Desde setembro deste ano, decidi me dedicar a aprender as novas tendências de mercado. Relembrei o que sabia de programação funcional e aprendi um pouco de ferramentas que eu nunca havia usado: <Great>ReactJs</Great>, <Great>Next.js</Great> e <Great>Typescript</Great>.</p>
                <p>Aprendi a trabalhar com a biblioteca <Great>styled-components</Great> para estilizar minhas páginas, a usar o <Great>GitHub</Great> para gerenciar versões e releases e o <Great>Visual Studio Code</Great> para programar (já que até então eu usava o Notepad++).</p>
                <p>Como treinamento, entrei em uma equipe com um amigo, <a target="_blank" rel='noreferrer' href="https://github.com/xnd-dev">Alexandre Barbosa</a>, e com o apoio do meu primo, <a target="_blank" rel='noreferrer' href="https://github.com/Derecky">Derecky Costa</a>, fizemos um pequeno projeto.</p>
                <div className='projectLinks'>
                        <a href="https://exercicio-donutsshop.vercel.app" target="_blank" rel='noreferrer'><img src="donuts_logo.png"/></a>
                </div>                
            </div>            
        </TimelineContainer>
        </>
    )
}

