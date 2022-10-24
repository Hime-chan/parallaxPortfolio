import { headerH2Initial } from "./context/utils";
import { HeaderContainer, TypingBar } from "./headerStyle";
import { useUtils } from "./hooks/utils";

interface HeaderInterface{
    id:string
}

export function Header ({id}:HeaderInterface) {
    const { headerH1,headerH2class } =useUtils(); 
    return (
        <HeaderContainer id={id}>
            <h1>
                <span className="content">{ headerH1 }</span>
                <TypingBar>|</TypingBar>
            </h1>
            <div className="h2"> {
}
                <div className="content" ><>
                    {   Array.prototype.map.call(
                        headerH2Initial,
                        (char,indice) => {
                            return (<span key={"H2"+indice} className={headerH2class[indice]}>{char}</span>)
                        }
                    )}
                </></div>{
                }
            </div>
        </HeaderContainer>
    )
}

