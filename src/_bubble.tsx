import { BubbleContainer } from "./_bubbleStyle";

export function Bubble ({ children }: any) {
    
    return (
        <BubbleContainer>{children}
            <div className="bubble1"></div>
        </BubbleContainer> 
    )
}

