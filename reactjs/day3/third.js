
import React from "react";
import ReactDOM from "react-dom/client";

const elememt = React.createElement("h1",{id:"first",className:"rahul",style:{
    fontSize:"30px",
    backgroundColor:"green",
    color:"pink"
}},"hello coder army");
const elememt2 = React.createElement("h1",{id:"first",className:"rahul",style:{
    fontSize:"30px",
    backgroundColor:"green",
    color:"pink"
}},"Maja aya mujhe");



//JSX://JSX:javascript jaisa code direct js ke andar likh sakte ho


const name="sumit"
const object={
    name:"sumit",
    age:23,
    salary:60
}

//REACT ELEMENT
const newelement=(
    <>
    <h1 id="first" className="sumit">hello coder army {name} his salary is :{object.salary}</h1>
    <h1 style={{backgroundColor:"black",color:"pink"}}>sumit pokhriyal</h1>
    </>

) //html directly js me jsx ka part)
//USE CREATEROOT FOR REACT18

//REACT COMPONENT
function greet(){
    return <h1>aur bhai kesse hooo</h1>
}

const meet = ()=>{
    return <h2>mera sab accha hai</h2>
}

const compo=greet();
const compo1=meet();

const compo3=<>
{compo} {compo1}
</>

const reactvoots =ReactDOM.createRoot(document.getElementById('root'));//[REACT ROOT CONTAINER :ME ROOT RK DIYA]
reactvoots.render(compo3);

//const div1=React.createElement("div",{},[elememt,elememt2])
//ReactDOM.render(elememt,document.getElementById('root'))  //DONT WRITE LIKE THIS IN REACT 18 AS IT IS DISCARDED IN R18 ONLY WORKS UPTO 17


//reactvoots.render(elememt);
//reactvoots.render(elememt2);

