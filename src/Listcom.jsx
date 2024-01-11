import React, { useState } from "react";
import { MdDelete } from "react-icons/md";

const Listcom=(props)=>{
    const [line,setline]= useState(false);
    const cutit=()=>{
     setline(true);
    }
    return(
<>
<div className="todo_style" >
<span  onClick={cutit}>
<MdDelete  className="deleteicon"/>
</span>
<li style={{textDecoration: line ? "line-through" :"none" }}>{props.text}</li>
</div>
</>
    )
}
export default Listcom;