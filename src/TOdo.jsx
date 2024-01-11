////////////////////////yaha ka adha code todolist.jsx me hai
// import React, { useState } from "react";
// import  TOdolist from "./TOdolist"
// const TOdo=()=>{
//     const[inputlist,setinputlist]= useState("");
//     const [item, setitem]= useState([]);

//     const itemevent=(event)=>{
//         setinputlist(event.target.value);
//     }
//     const listitem=()=>{
//         setitem((olditem)=>{
//             return [...olditem,inputlist];
//         });
//         setinputlist('');
//     }
//     const deleteitem=(id)=>{
//         console.log("deleted");
//     }
//     setitem((olditem)=>{
//         return olditem.filter((arrElem,index)=>{
//             return index !== id;
//         })
//     })
//     return (
// <>
//     <div className="main_div">
//          <div className="center">
//             <br/>
//             <h1>ToDO LIST</h1>
//             <br/>
//             <input type="text" placeholder="Add  a items"  value={inputlist} onChange={itemevent} />
//             <button onClick={listitem}>+</button>
//             <ol>
//                 {/* <li>{inputlist}</li> */}
                
//                    {item.map((itemval,index)=>{
//                          return <TOdolist
//                          key={index}
//                           id={index}
//                            text={itemval} 
//                            onselect={deleteitem}

//                            />
                          
//                     })}
                
//             </ol>
//          </div>
//     </div>
// </>
//     );
// }
// export default TOdo;


///////////////////////////increment decrement project/////////////////////
// import  React from "react"; 
// import  ReactDOM  from "react-dom";
// import  TOdolist from "./TOdolist";
// ReactDOM.render(<>
{/* <TOdolist></TOdolist> */}
// </>,document.getElementById("root"));
// export default TOdo;