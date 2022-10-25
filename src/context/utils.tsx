import * as React from 'react';

export type UtilsType = {
  controleHeader:number[];
    parallaxH1: (controle:number)=> void;
    headerH1: string;
    parallaxH2: (controle:number)=> void;
    setheader2: ((newClass:string)=>void)[];
    headerH2class: string[];
  controleMain:boolean[];
    parallaxMain: (controle:number,divCount:number)=> void; 
    mainDivCount:number;
    lifetimeDivClass: string[];
}

export const headerH2Initial="Claudia Cavalcante Fonseca: Programadora, doutoranda em álgebra (USP), mestre em álgebra (UFAL), professora de matemática (IFC), alagoana, desenhista, otaku, frugívora, ateia.";


export const UtilsContext = React.createContext<UtilsType | null>(null);

export const UtilsProvider: React.FC<React.PropsWithChildren> = ({ children }) => {

  //Header constants and variables
  const [controleHeader, setcontroleHeader] = React.useState<number[]>([100]);
  const headerH1Initial="Hih.portfolio;";
  const [headerH1, setheader1] = React.useState<string>(headerH1Initial);
  var headerH2class:string[] = [];
  var setheader2: ((newClass:string)=>void)[] = [];
  function NewheaderH2class(indice:number){
    [headerH2class[indice], setheader2[indice]] = React.useState<string>('in');
  }
  headerH2Initial.split('').forEach((char,indice)=>{NewheaderH2class(indice)});
  const PesoLetraH1=100/(headerH1Initial.length);

//Main constants and variables
  const mainDivCount=4;
  //const mainDivCount=document.getElementById('main').childNodes.length;
  const arrayZeroToDivCount=Array.from({length: mainDivCount}, (v, k) => k);
  const lifetimeDivTemp = arrayZeroToDivCount.map((index) => "out"+(index%2==0?"Even":"Odd"));
  const [lifetimeDivClass, setlifetimeDivClass] = React.useState<string[]>(lifetimeDivTemp);
  const [controleMain, setcontroleMain] = React.useState<boolean[]>(arrayZeroToDivCount.map((index) => false));

//Header functions
    function parallaxH1(controle:number){
      if ((controle==100)||(controle!=controleHeader[0])){
        setheader1(headerH1Initial.substring(0,2*(controle/PesoLetraH1)+1));
        setcontroleHeader({...controleHeader,0:controle});  
      }  
    }

    function parallaxH2(controle:number){
      function setH2class(indice:number, classeatual:string){setheader2[indice](classeatual);}

      if ((controle==100)||(controle!=controleHeader[1])){
        var classeatual:string = "";
        var controle_base=90;
        if (((controle>controle_base)&&(controleHeader[1]<=controle_base))||controle==100) {classeatual="in";}
        else if ((controle<=controle_base)&&(controleHeader[1]>controle_base)) {classeatual="out";}
        
        if (classeatual!=""){
          headerH2Initial.split('').forEach(
            (char,indice)=>{setTimeout(()=>setH2class(indice, classeatual),50*Math.random());}//setheader2[indice](classeatual)
          );}
        controleHeader[1]=controle;
        setcontroleHeader({...controleHeader,1:controle});
      } 
    }

    //Main functions
    function parallaxMain(controle:number,currentDiv:number){
      if ((!controleMain[currentDiv])&&(controle>0)) {
        console.log("entrando");
        console.log("O div"+currentDiv+"está com o controle"+controle);
        let arrayTemp2=[...controleMain];
        arrayTemp2[currentDiv]=true;
        setcontroleMain([...arrayTemp2]);
        let arrayTemp=[...lifetimeDivClass];
        arrayTemp[currentDiv]="in"+(currentDiv%2==0?"Even":"Odd");
        setlifetimeDivClass([...arrayTemp]);
      }
      else if ((controleMain[currentDiv])&&(controle<=0)){
        console.log("saindo");
        console.log("O div"+currentDiv+"está com o controle"+controle);
        let arrayTemp2=[...controleMain];
        arrayTemp2[currentDiv]=false;
        setcontroleMain([...arrayTemp2]);
        let arrayTemp=[...lifetimeDivClass];
        arrayTemp[currentDiv]="out"+(currentDiv%2==0?"Even":"Odd");
        setlifetimeDivClass([...arrayTemp]);
      }

    }

  return (
    <UtilsContext.Provider 
      value={{
        headerH1, 
        headerH2class, 
        controleMain,
        parallaxMain, 
        parallaxH1, 
        parallaxH2, 
        mainDivCount,
        controleHeader, 
        lifetimeDivClass,
        setheader2
      }}
    >
      {children}
    </UtilsContext.Provider>
  );
};
