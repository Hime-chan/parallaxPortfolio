import { CardContainer } from "./cardStyle";


interface CardProps {
    bolha?: boolean;
    height?: string;
    width?: string;
    top?: string;
    left?: string;

    borderColor?: string;
    color?:string;
    children?: any;
}

    
export function Card ({ bolha, height, width, top, left, borderColor,color, children }: CardProps) {
    
    return (
        <>
            <CardContainer bolha={bolha} top={top} left={left} borderColor={borderColor} color={color} height={height} width={width} >
            {children}
            </CardContainer> 
        </>
    )
}

