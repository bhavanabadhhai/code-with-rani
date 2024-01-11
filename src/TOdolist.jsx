// / yaha ka aadha code todolist.jsxme hai

// / import  React from "react";
// const Todolist=(props)=>{
   
// return (
// <>
// <div className="todo_style">
// <i 
// className="fa fa-item"
//  aria-hidden="ture" 
//  onClick={()=>{
// props.onselect(props.id)}}></i>
// <li>{props.text}</li>;
// </div>
// </>
// )

// }
// export default Todolist;

/////////////////increment decrement project////////////////

// import React, { useState } from "react";
// import { IoIosAddCircle } from "react-icons/io";
// import { MdDelete } from "react-icons/md";

// const Todolist  =()=>{

//     const [num,setnum]= useState(9);
//     const incNum=()=>{
//          setnum(num+1);
//     }
//     const decNum=()=>{
//         if(num>0){
//         setnum(num-1);
//         }
//         else{
//             alert("sorry nhi ho payenga");
//             setnum(0);
//         }
//     }
//     return (
// <>
//     <div className="main_div">
//         <div className="center_div">
//             <h1>{num}</h1>
//             <div className="btn_div">
//                 <button onClick={incNum}>
             
//                 <IoIosAddCircle />
//                 </button>
//                 <button onClick={decNum}>
                
//                 <MdDelete />
//                 </button>

//             </div>
//         </div>
//     </div>
// </>
//     )
// }
// export default Todolist;
/////////////////////////////////////////new project //////////////
import React, { useState } from "react";
// import  Button  from "@material-ui/core/Button";
// import AddIcon from '@material-ui/icons/Add';
import { IoIosRadioButtonOn } from "react-icons/io";
import { IoMdAdd } from "react-icons/io";
import Listcom  from "./Listcom";


const Todolist=()=>{
  const [item,setitem]= useState("buy an apple");
  const [newitem,setnewitem]= useState([]);
  const itemEvent=(event)=>{
setitem(event.target.value);
  }
  const listofitem=()=>{
    setnewitem((prevalue)=>{
     return [...prevalue,item];
    })
  }
    return(
        <>
            <div className="main_div">
              <div className="center_div">
                  <br/>
                    <h1>ToDo List</h1>
                  <br/> 
                  <input  type="text" value={item} placeholder="add an items" onChange={itemEvent} />
                  <IoIosRadioButtonOn className="newBtn"  onClick={listofitem}>
                  <IoMdAdd />
                  </IoIosRadioButtonOn>
                  
                 
                  <br/>
                  <ol>
                    
                    {newitem.map((val,index)=>{
                      return <Listcom  key={index} text={val}></Listcom>
                    })}
                  </ol>
                  <br/>
              </div>
            </div>
        </>
    )
    
}
 export default Todolist;