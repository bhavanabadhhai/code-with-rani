// import React, { useState } from "react";
 

// const Click=()=>{
//     const state = useState();
//   console.log(state);
// let [count,setcount] = useState(50);

// const Incom=()=>{
//     setcount( count + 101);
//     // console.log("clicked" + count++);
// }
// return (
//     <>
// <h1> {count}</h1>
// <button onClick={Incom}>click here</button>
//     </>
// );
// };
// export default Click;




///////////////////////////////////2 proj//////////////////////

// import React, { useState } from "react";
// const Click=()=>{
//     const newtime = new Date().toLocaleTimeString();
//   const [ctime,setCtime]= useState(newtime);
//   const update=()=>{
//     newtime= new Date.toLocaleTimeString();
//     setCtime(newtime);
//   }
//     return (
// <>
//     <h1> {ctime}</h1>
//     <button onClick={update}> get time</button>
// </>
//     )
// }
// export default Click;

////////////////3 project///////////////////////////
// import React, { useState } from "react";
// const Click=()=>{
//     const newtime= new Date().toLocaleTimeString();
//     const [ctime,setCtime]= useState(newtime);
//     const upd=()=>{
//         newtime= new Date().toLocaleTimeString();
//         setCtime(newtime) ;
//     }
//     return (
//        <>
//         <h1>{ctime}</h1>
//         <button onClick={upd}>click here</button>
//        </>
//     );
// }
// export default  Click;


/////////////////////////// autometic digital clock//////////
// import React, { useState } from "react";
// const Click=()=>{
//     let  newtime= new Date().toLocaleTimeString();
//     const [ctime,setctime]= useState(newtime);
//     const update =()=>{
//         newtime= new Date().toLocaleTimeString();
//         setctime(newtime);
//     }
//     setInterval(update,1000)
//     return (
//         <>
//             <h1>{ctime}</h1>
//             {/* <button onClick={update}>please click</button> */}
//         </>
//     );
// }
// export default Click;

///////////////////////hanling event///////////////////////////
// import React, { useState } from "react";
// const Click = ()=>{
//     const gold = "#FFD700";
//   const [bg,setbg]= useState(gold);
//     const [neme,setneme]= useState("click me");

//     const  bgchange=()=>{
//         // console.log("click");
// let newbg= "#34495e";
// setbg(newbg);
// setneme("ohh!!😱");
//     }
//     const  bgback=()=>{
        
// setbg(gold);
// setneme("hurray!!❤️❤️");
//     }
//     return (
// <>
//     <div style={{backgroundColor:bg}}>
//        <button onMouseEnter={bgchange} onMouseLeave={bgback}>{neme}</button>
//     </div>
// </>
//     )
// }
// export default Click;


/////////////////////////
// import React, { useState } from "react";
// const Click =()=>{
//     const blue = "#0000ff";
//     const [bg,setbg]= useState(blue);
// const [namu,setnamu] = useState("click me");

// const  bgchange=()=>{
//     let newbg= "gray";
//     setbg(newbg);
//     setnamu("huuay!!  i am win!!😍😍");
// }

// const  bgback=()=>{
    
//     setbg(blue);
//     setnamu("ohh yr!!🤯🤯🤯");
// }
// return (
//     <div style={{backgroundColor:bg}}>
//         <button  onMouseEnter={bgchange} onMouseLeave={bgback}>{namu}</button>
//     </div>
// )
// }
// export default Click;

//////////////////////////////////login form  forms//////////////


// import React, { useState } from "react"; 
// const  Click=()=>{
// const [name,setname]= useState("");
// const [lastname,setlastname]=useState();
// const [fullname,setfullname]= useState();
// const [lastnamenew,setlastnamenew]= useState("badhai");

// const onsubmits=(event)=>{
//  event.preventDefault();
//     setfullname(name);
//     setlastnamenew(lastname);
// }
//     const inputevent =(event)=>{
//         console.log(event.target.value);
//         setname(event.target.value);
//     }
//     const inputeventTo=(event)=>{
//         setlastname(event.target.value);

//     }
//     return (
//         <>
//         <div className="main">
//         <form onSubmit={onsubmits}>
//         <div className="rani">
//             <h1>hellow world {fullname}{lastnamenew}</h1>
            
//             <input 
//             type="text" 
//             placeholder="enter the name" 
//             onChange={inputevent}
//             value={name}
//             />
//             <br/>
//             <input 
//             type="text" 
//             placeholder="enter the last name" 
//             onChange={inputeventTo}
//             value={lastname}
//             />
//             <button type="submit"> submit pls 👍</button>
            
//             </div>
//             </form>
//             </div>
//         </>
//     )
// }
// export default Click;



/////////////////// second type of form easy way//////////////////////////
// import  React,{useState}  from "react";
// const click=()=>{
// const [fullname,setfullname]= useState({
//     fname:"",
//     lname:"",
//     email:"",
//     phone:"",
// });
// const inputevent=(event)=>{
//     console.log(event.target.value);
//     console.log(event.target.name);

//     // const value=event.target.value;
//     // const name=event.target.name;
//  const{value,name}= event.target;

//     setfullname((prevalue)=>{
//         // console.log(prevalue);
// if(name==='fname'){
//     return {
//         fname: value,
//         lname: prevalue.lname,
//         email:prevalue.email,
//         phone: prevalue.phone,
//     }
// }
// else if(name==='lname'){
//     return {
//         fname: prevalue.fname,
//         lname: value,
//         email:prevalue.email,
//         phone: prevalue.phone,
//     }
// }
// else if(name==='email'){
//     return {
//         fname: prevalue.fname,
//         lname: prevalue.lname,
//         email:value,
//         phone: prevalue.phone,
//     }
// }
// else if(name==='phone'){
//     return {
//         fname: prevalue.fname,
//         lname:prevalue.lname,
//         email:prevalue.email,
//         phone: value,
//     }
// }
//     });
// };
// const onsubmits= (event)=>{
//     event.preventDefault();
//     alert("form submit ho gya hai !");
// }
//     return (
// <>
// <div className="main">
//         <form onSubmit={onsubmits}>  
//                <div className="rani">
//             <h1>hellow world {fullname.fname}{fullname.lname}</h1>
//             <p>{fullname.email}</p>
//             <p>{fullname.phone}</p>
//             <input 
//             type="text" 
//             placeholder="enter the name" 
//             onChange={inputevent}
//             name="fname"
//             // value={fullname.fname}
//             />
//             <br/>
//             <input 
//             type="text" 
//             placeholder="enter the last name" 
//             onChange={inputevent}
//             name="lname"
//             // value={fullname.lname}
//             />
//             <input 
//             type="email" 
//             placeholder="enter the email" 
//             onChange={inputevent}
//             name="email"
//             value={fullname.email}
//             />
//             <input 
//             type="phonenumber" 
//             placeholder="enter the number" 
//             onChange={inputevent}
//             name="phone"
//             value={fullname.phone}
//             />
//             <button type="submit"> submit pls 👍</button>
            
//             </div>
//             </form>
//             </div>
// </>
//     );
// }
// export default click;


//////////////////////////again login form with the help of spered operator//////////
import  React,{useState}  from "react";
const click=()=>{
const [fullname,setfullname]= useState({
    fname:"",
    lname:"",
    email:"",
    phone:"",
});
const inputevent=(event)=>{
    console.log(event.target.value);
    console.log(event.target.name);

    // const value=event.target.value;
    // const name=event.target.name;
 const{value,name}= event.target;

    setfullname((prevalue)=>{
        console.log(prevalue);

      return {
        ...prevalue,
       [name]:value,
      }  
// if(name==='fname'){
//     return {
//         fname: value,
//         lname: prevalue.lname,
//         email:prevalue.email,
//         phone: prevalue.phone,
//     }
// }
// else if(name==='lname'){
//     return {
//         fname: prevalue.fname,
//         lname: value,
//         email:prevalue.email,
//         phone: prevalue.phone,
//     }
// }
// else if(name==='email'){
//     return {
//         fname: prevalue.fname,
//         lname: prevalue.lname,
//         email:value,
//         phone: prevalue.phone,
//     }
// }
// else if(name==='phone'){
//     return {
//         fname: prevalue.fname,
//         lname:prevalue.lname,
//         email:prevalue.email,
//         phone: value,
//     }
// }
    });
};
const onsubmits= (event)=>{
    event.preventDefault();
    alert("form submit ho gya hai !");
}
    return (
<>
<div className="main">
        <form onSubmit={onsubmits}>  
               <div className="rani">
            <h1>hellow world {fullname.fname}{fullname.lname}</h1>
            <p>{fullname.email}</p>
            <p>{fullname.phone}</p>
            <input 
            type="text" 
            placeholder="enter the name" 
            onChange={inputevent}
            name="fname"
            // value={fullname.fname}
            />
            <br/>
            <input 
            type="text" 
            placeholder="enter the last name" 
            onChange={inputevent}
            name="lname"
            // value={fullname.lname}
            />
            <input 
            type="email" 
            placeholder="enter the email" 
            onChange={inputevent}
            name="email"
            value={fullname.email}
            />
            <input 
            type="phonenumber" 
            placeholder="enter the number" 
            onChange={inputevent}
            name="phone"
            value={fullname.phone}
            />
            <button type="submit"> submit pls 👍</button>
            
            </div>
            </form>
            </div>
</>
    );
}
export default click;