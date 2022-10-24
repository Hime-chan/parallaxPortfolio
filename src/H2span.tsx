import { useParallax } from "react-scroll-parallax";

export function H2span({children} : any){
    const { ref } = useParallax<HTMLDivElement>({ speed: 10 });
    return <span ref={ref}></span>
}