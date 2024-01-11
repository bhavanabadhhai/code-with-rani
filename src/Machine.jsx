/////////////////////////////project 6 (slot machine)////////////////////////////////////

import React from "react";

const Slotm = (props)=>{
    // let a="😍";
    // let b= "😍";
    // let c="😍";
    // let {a,b,c}= props;(constructor)
    let a= props.a;
    let b= props.b;
    let c=props.c;

    if((props.a===props.b)&&(b===props.c)){
        return(
            <>
            <div className="slot_inner">
            <h1>{a}{b}{c}</h1>
            <h1>this is matching🎰</h1>
            <hr/>
            </div>
            </>
        )
    }
    else{
        return (
            <>
            <div className="slot_inner">
            <h1>{a}{b}{c}</h1>
            <h1>this is not matching</h1>
            <hr/>
            </div>
            </>
        ) 
    }
}
const Machine = ()=>{
  return ( <>
    <h1 className="Heading_style">🎰 welcome to <span style={{fontWeight:"bold"}}>slot machine Game</span>🎰</h1>
    
    <div className="slotMachine">
    <Slotm a='🤯' b='🤯' c='🤯'/>
    <Slotm a= "😘" b="😘" c="😘"/>
    <Slotm a="🍩" b="❤️"c="🍩" />
    </div>
  </>
  )
};
export default Machine;
// export {Slotm};