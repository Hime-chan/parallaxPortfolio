import type { NextPage } from 'next';
import React, { useEffect, useRef } from 'react';
import { BodyContainer,DivBody, Footer } from '../styles/indexStyle';
import { Bubble } from '../src/bubble';
import { Header } from '../src/header';
import { Main } from '../src/main';
import { useUtils } from '../src/hooks/utils';
import { ParallaxProvider } from 'react-scroll-parallax';
import { Foot } from '../src/footer';

const Home: NextPage = () => {
  useEffect(() => {document.title = "const MyNewDeveloper={...Claudia};"});
  const { parallaxMain, parallaxH1, parallaxH2,mainDivCount } =useUtils();
  const parallaxHeader =[
    (controle:number)=>{parallaxH1(controle);}, 
    (controle:number)=>{parallaxH2(controle);}
  ];

  const arrayZeroToDivCount=Array.from({length: mainDivCount}, (v, k) => k);
  const parallaxMainVec = arrayZeroToDivCount.map((index) => ((controle:number)=>{parallaxMain(controle,index);}));
  //const parallaxMainVec =temp;
  
  function parallaxComponentExecute (
    element: ChildNode, 
    index:number, 
    scrollTop:number, 
    scrollBottom:number,
    parallaxComponent:((controle:number)=>void)[]
    ){
    const elementTop=(element as HTMLElement).offsetTop;
    const elementBottom=elementTop+(element as HTMLElement).offsetHeight;
    const DistTop=Math.min(Math.max((elementBottom-scrollTop)/2,0),100);
    const DistBottom=Math.min(Math.max((scrollBottom-elementTop)/2,0),100);

    const newControle:number = Math.min(DistTop,DistBottom);
    if (parallaxComponent[index]!=undefined) {
      parallaxComponent[index](newControle);
    }
  }  

  const headerElement=useRef(null);

  function scrolling(target: HTMLDivElement) {
    const scrollTop=((target.scrollTop<200)?(2*target.scrollTop):(target.scrollTop+200));
    const scrollBottom=target.scrollTop+target.offsetHeight-100;
    
    document.getElementById('headerId')?.childNodes.forEach(
      (element, index) => {parallaxComponentExecute(element, index, scrollTop, scrollBottom,parallaxHeader);}
    );
    document.getElementById('mainId')?.childNodes.forEach(
      (element, index) => {parallaxComponentExecute(element, index, scrollTop, scrollBottom,parallaxMainVec);}
    );
  }

  const [scrollEl, setScrollElement] = React.useState<HTMLElement>(null as any);
  const ref = React.useRef<HTMLElement>(scrollEl);
  React.useEffect(() => {setScrollElement(ref.current);});

  return (
    <BodyContainer>
      <DivBody>
        <div className='DivScroll' ref={ref as any}
          onScrollCapture={(e)=>scrolling(e.currentTarget)} 
          onScroll={(e)=>scrolling(e.currentTarget)} 
        >
{/* @ts-ignore */}
          <ParallaxProvider scrollContainer={scrollEl}>
            <Bubble>
                <Header id="headerId"/>
                <Main id="mainId"/>
                <Foot id="footId" />
           </Bubble>
        </ParallaxProvider></div>
      </DivBody>
    </BodyContainer>
  )
}

export default Home
