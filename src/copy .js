///reactjs is  libreby of javascript .
//recat js is created by facebook

///////////////// .is react js librery or framework?
// react is not a framework ,react is a js library for building user interfase.

//////////////////// ..about react//////////////////////////////////////////////
//component base approach
//a component is one of the core building block of react.
//in other word we can say that every application you will develop in react wil be mode up of pieces called component.
//component make the taskk of building UIs mush easier.

///////////////// . what is bable//////////////////////////////////////////////////////////
//is is the javascript compiler
//compile jsx into the  regular javascript 


// var React = require("react");//(it is for node js)//ye modual hone chaiye
// var ReactDOM = require("react-dom");//ye dono modual hone chaiye
// ReactDOM.render("kya dikhana h","kaha dikhana h","callback function")
// import React from 'react';
// import ReactDOM from 'react-dom';
// ReactDOM.render(<h1>hello moto!!</h1>,document.getElementById("root"));//inse hm print kr sakte hai

/////////////what is reactDom
//ReactDOM is a package that provides DOM-specific methods that can be used at the top level of a web app to enable an efficient way of managing DOM elements of the web page.
//  ReactDOM provides the developers with an API containing the various methods to manipulate DOM.


//////////////////////////////////render memthod///////////////////////
//it takes only single element
//render a function we can use to define the HTML code within the HTML element. 
// isme div tag use krke hm multiple jsx add kr sakte hai
//we with the help of array we create multiple jsx in render
// ReactDOM.render(<div>
//     <h2>hello bhavana badhai, we are heartful thankyou for your practice.adoreble performance sorry for my bad</h2>
// <p>pls like ans share</p>
// <h2>pls your support is beneficial for me</h2>
// </div>
// ReactDOM.render([
//     <h2>hello bhavana badhai, we are heartful thankyou for your practice.adoreble performance sorry for my bad</h2>,
// <p>pls like and share</p>,
// <h2>pls your support is beneficial for me</h2>,
// ]



///////////////////////what is jsx(javascript extension/xml)/////////////////////////////////
//JSX allows us to write HTML in React.
//JSX makes it easier to write and add HTML in React.
//ReactDOM.render(<h1>hello</h1>,document.getElementById("root"));//it is the jsx expression in react


///pure form of in js these code
// var h1= document.createElement("h1");
// h1.innerHTML= "bhavana badhai";
// document.getElementById("root").appendChild(h1);//appendchild ko hm koi new element add krne k liye krte hai

////////////////////////////////react.fregment///////////////////////////
//react.fregment k use se  jo div me extra layar of div bn jata hai,vo React.Fregment ki help se ht jata hai.
// React Fragment, you can render multiple elements of a component without adding extra div tags.

//import React from "react";
// import ReactDOM from "react-dom";
// ReactDOM.render(
//     <React.Fragment>
//     <h2>hello bhavana badhai, we are heartful thankyou for your practice.adoreble performance sorry for my bad</h2>
// <p>pls like and share</p>
// <h2>pls your support is beneficial for me</h2>
// </React.Fragment>
// ,
// document.getElementById("root"));


//////////////////////jsx expression in react//////////////////////////////////////
//isx expression by {}
//JSX allows us to write HTML elements in JavaScript and place them in the DOM without any createElement() and/or appendChild() methods.
//  JSX converts HTML tags into react elements.
// You are not required to use JSX, but JSX makes it easier to write React applications.

// import React from "react";
// import ReactDOM from "react-dom";
// let fname= "bhavana badhai";
// ReactDOM.render(
// <div>
// <h1>my name is {fname}</h1>
// <h2>the calculation of {2%3}</h2>
// <h3>the rendom number is {Math.random()}</h3>
// </div>
// ,document.getElementById("root"));

///////////////////////////////template litrals////////////////////////////////////////////////
  
//isme hm code ko back tik k ander likhte hai
//emplate literals, you have to make sure every expression inside your back-ticks ( ${expression} ) is going to result in a string.


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

//////////////////////////////jsx attribute in react js////////////////////////////////////////////
//JSX use attributes with the HTML elements same as regular HTML.
// The contenteditable attribute specifies whether the content of an element is editable or not.

// import React from "react";
// import ReactDOM from "react-dom";
// const name = "bhavana bahdhai";
// const img1= "https://images.unsplash.com/photo-1572454591674-2739f30d8c40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zmxvd2VyJTIwYm91cXVldHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60";
// const img2= "https://images.unsplash.com/photo-1533616688419-b7a585564566?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZsb3dlciUyMGJvdXF1ZXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60";
// const img3= "https://images.unsplash.com/photo-1571990306521-cf96e6858f2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fGZsb3dlciUyMGJvdXF1ZXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60";
// const link= "https://unsplash.com/";
// ReactDOM.render(
//   <>
// <h1 contentEditable="true">my real name is {name}</h1>
// <img src={img1} alt="imagees"/>
// <img src={img2} alt="imagees"/>
// <a href={link} target="_unsplash">
// <img src={img3} alt="imagees"/>
// </a>
// </>
// ,document.getElementById("root"));

///////////////////////////////// css style in react js////////////////////////////////////////////////////
/////we now design with css
// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
// const name = "bhavana bahdhai";
// const img1= "https://images.unsplash.com/photo-1572454591674-2739f30d8c40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zmxvd2VyJTIwYm91cXVldHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60";
// const img2= "https://images.unsplash.com/photo-1533616688419-b7a585564566?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZsb3dlciUyMGJvdXF1ZXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60";
// const img3= "https://images.unsplash.com/photo-1571990306521-cf96e6858f2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fGZsb3dlciUyMGJvdXF1ZXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60";
// const link= "https://unsplash.com/";
// ReactDOM.render(
//   <>
// <h1 className="heading">my real name is {name}</h1>
// <div className="imgdiv">
// <img src={img1} alt="imagees"/>
// <img src={img2} alt="imagees"/>
// <a href={link} target="_unsplash">
// <img src={img3} alt="imagees"/>
// </a>
// </div>
// </>
// ,document.getElementById("root"));

///add google font in react //
///inline css in react js



//////////////////////////////////react component/////////////////////
// Components are like functions that return HTML elements.
//recat me hm khudka element create kr sakte h


// import React from "react";
// import ReactDOM from "react-dom";

// import App from "./App";
// ReactDOM.render(
// <>
// <App></App>
// </>
// ,document.getElementById("root"));

////////////////////import and export module////////////////////////////////////

// import React from "react";
// import ReactDOM  from "react-dom";
// import names,{myName} from "./App";


// ReactDOM.render(
// <>
// <h1>hello</h1>
// <ul>
//   <li>rahi</li>
//   <li>rani</li>
//   <li>riya</li>
//   <li>{names}</li>
//   <li>{myName()}</li>

// </ul>

// </>

// ,document.getElementById("root"));

////////////////////props in react///////////////////////////////
//props stand for (properties)
//react props  are like function argument in javascript and attribute in html.
//isme hm khudka costom element bna sakte hai

////////////////////arraymap and fat arrow function////////////////////////////////////
//arry.map(function(currentvalue,index,arr)thisval)

//1] the  map() method crwates a new array with the result of calling
//  a fnction for every array element.
// 2] the map ()method calls the provide unction once foe each element in an array ,in oeder.

// 3] SYNTEX=  array.map(function(currentValue,index,arr),thisValue)

// Argument = discription
//currentValue= requred. the value of the current element 
//index optional.= the array index of the current element 
//  arr optional = the array object the current element belongs to.


//ex.  const oldarr=['rani','keshorav','badhai'];
//console.log(oldarr[0]);

// const newarr= oldarr.map(function(cvalue){
//     retrun cvalue +"anita";
// });
// console.log(newarr);

//for example
// const studentdata=[
//     {id:1, name: "rani", degree:"b.tech"},
//     {id:2, name: "riya", degree:"b.farma"},
//     {id:3, name: "tanuj", degree:"schooling"},
//   ];
//   const newdata= studentdata.map((currentval)=>{
// return `my name is ${currentval.name}.my degree is ${currentval.degree} my pruf is ${currentval.id} `
//   }
//   );
//   console.log(newdata);


///////////////////////react developer tool(error handling)//////////////////////

//key = keys help react identify which iteam have changed (Added/removed/re-orderd).
//      to give a unique identify to every element inside the array,a key is required.



////////////////////////if else condition//////////////////////////
//////////////////////////////ternary operator///////////////////////////
//condition: an expression whose value is used as a condition .

//expif true : an expresion whicjh is evaluate if the condion evaualte to a truly.
//value (one which equal or can be converted to true.)

/////////////////usestate/////////////////////////
//usestate ik array return krta h
//useState is React Hook that allows you to add state to a functional component.
//use state is return 2 values{stateobject, update function}
// it means jb hm ik state to call kre to dusri state apne aap calll ho jani chaiye



///////////array distructuring ///////////
// it used for  array ko chhote chote component me batne k liye taki hm use easily use kr sake
//Destructuring is a convenient way of creating new variables by extracting some values from data stored in objects or arrays


///////////////handeling event//////////////////////////////////////
//////////////////controlled component/////////////
//in a controll component form data is handle by a react component the alternative is uncontrooled component where from data is handle by the DOM itself.


//////////////////Spread Operator//////////////////////////
// The JavaScript spread operator (...) allows us to quickly
//  copy all or part of an existing array or object into another array or object

//  const fullname= [" rani","badhai"];
//  const biodata= [1,...fullname,26,"male"];
//  console.log(fullname);
//  console.log(biodata);


// var  shoot= ['call duty',"cowboy"," resident peopele"];
// var [first,...remaining]= shoot;
// console.log(first);
// console.log(remaining);

// const fullname={
//     fname:"vinod",
//     lname:"thapa",
// };
// const biodata={
//     id:1,
//     ...fullname,age:26,
//     gender:MediaList,
// }
// console.log(fullname);
// console.log(biodata);