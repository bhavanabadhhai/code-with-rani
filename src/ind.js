// /////////challange 1///////////////////////////////////////
// import React from "react";
// import ReactDOM from "react-dom";
// ReactDOM.render(
//     <React.Fragment>
//     <h1>hello every one i hope all is well</h1>
// <p>pls give me the suggest 5 subscription foe webseries</p>
// <ul>
//     <li>AMAZON</li>
//   <li>disney+hotstar</li>
//   <li>BRAAVE</li>
//   <li>crome</li>
//   <li>mozrella</li>
// </ul>
// </React.Fragment>
// ,
// document.getElementById("root"));
////////////challange 2
// import React from "react";
// import ReactDOM from "react-dom";
// let fname= "bhavana ";
// let lname = " badhaiiiiii";
// ReactDOM.render(
// <div>
// <h1>my name is {`${fname} ${lname}`}</h1>
// <h2>the calculation of {50%30}</h2>
// <h3>the rendom number is {Math.random()}</h3>
// </div>
// ,document.getElementById("root"));
  /////////////////////////challange2////////////////////
// import React from "react";
// import ReactDOM from "react-dom";
// const name= "rani cutu motu";
// const date = new Date().toLocaleDateString();
// const time = new Date().toLocaleTimeString();
// ReactDOM.render(
//     <>
// <h1>ny name is {name}</h1>
// <p>the current  date is = {date}</p>
// <p>the current time is = {time}</p>
// </>
// ,document.getElementById("root"));

// import  React from "react";
// import ReactDOM from "react-dom";
// const name= "rani";
// const img1= "https://picsum.photos/200/300";
// const img2= "https://picsum.photos/250/300";
// const img3= "https://picsum.photos/300/300";
// const img4= "https://picsum.photos/350/300";
// const links= "https://www.thapatechnical.com";
// ReactDOM.render(
//   <>
//     <h1 contentEditable="true">hello i  am {name}</h1>
// <img src={img1} alt="randomimage"/>
// <img src={img2} alt="randomimage"/>
// <img src={img3} alt="randomimage"/>
// <a href={links} target="_thapa">
// <img src={img4} alt="randomimage"/
// </a>
//   </>
//   ,document.getElementById("root")
// );
/////we now design with css
// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
// const name = "bhavana bahdhai";//it is entenal css
// const img1= "https://images.unsplash.com/photo-1572454591674-2739f30d8c40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zmxvd2VyJTIwYm91cXVldHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60";
// const img2= "https://images.unsplash.com/photo-1533616688419-b7a585564566?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZsb3dlciUyMGJvdXF1ZXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60";
// const img3= "https://images.unsplash.com/photo-1571990306521-cf96e6858f2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fGZsb3dlciUyMGJvdXF1ZXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60";
// const link= "https://unsplash.com/";
// ReactDOM.render(
//   //it in inline css
// <>
// <h1 className="heading">my real name is {name}</h1>
// <div className="imgdiv">
// <img src={img1} alt="imagees"/>
// <img src={img2} alt="imagees"/>
// <a href={link} target="_unsplash">
// <img src={img3} alt="imagees"/>
// </a>
// </div>
// </>
// // ,document.getElementById("root"));
// import  React from "react";
// import ReactDom from "react-dom";
// import "./index.css";
// const naam= "rani";
// const img1="https://images.unsplash.com/photo-1621146027714-e8921770f8d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80";
// const img2="https://plus.unsplash.com/premium_photo-1687879820677-d965e81d3270?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1939&q=80";
// const img3="https://images.unsplash.com/photo-1591081658714-f576fb7ea3ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80";
// const heading={
//   color:"rosybrown",
//   textTransform:"capitalize",
// textAlign:"center",
// };
// ReactDom.render(
// <>
// {/* <h1 style={{color:"rosybrown",textTransform:"capitalize",textAlign:"center"}}>hello verygoodmoring friend i am {naam},how are you everyone ,i hope everyone doing well ok! ,a lot of love </h1> */}
// <h1 className="heading">hello goodmorning my name is {naam} </h1>
// <div className="imgdiv">
// <img src={img1} alt="img1"/>
// <img  src={img2} alt="img2"/>
// <img src={img3} alt="img3"/>
// </div>
// </>
// ,document.getElementById("root"));

////////////////////////////////////miniproject 1////////////////////
// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";


// let curdate= new Date(2023,9,23,20);
// curdate=curdate.getHours();
// const css= { };
// let  greeting="";
// if(curdate>=1 && curdate <12){
//   greeting= "Good Morning";
//   css.color="green";
// }
// else if(curdate >=12 && curdate<19){
//   greeting ="Good Afternoon";
//   css.color= "yellow";
// }
// else{
//   greeting="Good Night";
//   css.color="darkblue";
// }
// ReactDOM.render(<>
// <h1 className="pro">hello sir,<span style={css}>{greeting} </span></h1>
// </>,document.getElementById("root"));

// import React from "react";
// import  ReactDOM  from "react-dom";
// import "./index.css";
// let currentdate= new Date(20);
// currentdate=currentdate.getHours();
// const cssstyle={};
// let greeting="";
// if(currentdate>=1 && currentdate<12){
// greeting="GOOD MORNING";
// cssstyle.color= "pink";
// }
// else if(currentdate >=12 && currentdate<19){
//     greeting ="Good Afternoon";
//     cssstyle.color= "yellow";
//   }
//   else{
//     greeting="Good Night";
//     cssstyle.color="darkblue";
//   }

// ReactDOM.render(<h1 className="pro">hello <span style={cssstyle}>{greeting}</span></h1>,document.getElementById("root"));
// import React from "react";
// import ReactDOM from "react-dom";

// import App from "./App";
// ReactDOM.render(
// <>
// <App></App>
// </>
// ,document.getElementById("root"));





///////////////////////////project 5//////////////////////////
// import React from "react";
// import ReactDOM  from "react-dom";
// import App from "./App";
// ReactDOM.render(
// <App></App>
// ,document.getElementById("root"));



////////////////mini project 2(netflix )////////////////////////////////
// import React from "react";
// import  ReactDOM  from "react-dom";
// import "./index.css";
// import App from  "./App";
// import Card from "./Card";
// import Sdata from "./Sdata";
// ReactDOM.render(

//   <>
// <h1 className="heading_style">List Of Top 5 Netflix Series in 2020</h1>
//   <Card
//     key= {Sdata[0].id}
//     imgsrc={Sdata[0].imgsrc}
//     tittle={Sdata[0].tittle}
//     sname={Sdata[0].sname}
//     link={Sdata[0].link}
//   />
//    <Card
//      key={Sdata[1].id}
//     imgsrc={Sdata[1].imgsrc}
//     tittle={Sdata[1].tittle}
//     sname={Sdata[1].sname}
//     link={Sdata[1].link}
//   />
//    <Card
//     key={Sdata[2].id}
//     imgsrc={Sdata[2].imgsrc}
//     tittle={Sdata[2].tittle}
//     sname={Sdata[2].sname}
//     link={Sdata[2].link}
//   />
//    <Card
//    key= {Sdata[3].id}
//     imgsrc={Sdata[3].imgsrc}
//     tittle={Sdata[3].tittle}
//     sname={Sdata[3].sname}
//     link={Sdata[3].link}
//   />
//    <Card
//     key={Sdata[4].id}
//     imgsrc={Sdata[4].imgsrc}
//     tittle={Sdata[4].tittle}
//     sname={Sdata[4].sname}
//     link={Sdata[4].link}
//   />
//     </>
// ,document.getElementById("root"));

