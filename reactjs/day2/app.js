//creating element in react
const elememt = React.createElement("h1",{},"hello coder army");

//ReactDOM.render(elememt,document.getElementById('root'))  //DONT WRITE LIKE THIS IN REACT 18 AS IT IS DISCARDED IN R18 ONLY WORKS UPTO 17

//USE CREATEROOT FOR REACT18
const reactvoots =ReactDOM.createRoot(document.getElementById('root'));//[REACT ROOT CONTAINER :ME ROOT RK DIYA]
reactvoots.render(elememt);