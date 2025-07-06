//creating element in react
//style ko mai as object dunga kyunki usme multiple cheeze hongi

//mid wala PROPERTIES OR ATTRIBUE K LIYE HAI
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

const div1=React.createElement("div",{},[elememt,elememt2])






//ReactDOM.render(elememt,document.getElementById('root'))  //DONT WRITE LIKE THIS IN REACT 18 AS IT IS DISCARDED IN R18 ONLY WORKS UPTO 17

//USE CREATEROOT FOR REACT18
const reactvoots =ReactDOM.createRoot(document.getElementById('root'));//[REACT ROOT CONTAINER :ME ROOT RK DIYA]
//reactvoots.render(elememt);
//reactvoots.render(elememt2);
reactvoots.render(div1);