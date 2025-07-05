//day2
///hello to react

//create elememt throught js
//const Header1 = document.createElement('h1');
//Header1.innerHTML="hello coder army";
//Header1.style.backgroundColor="black";
//Header1.style.fontSize="30px";
//Header1.style.color="blue";

//creating another elemnt
//const Header2 = document.createElement('h1');
//Header2.innerHTML="sumit pokhriyal";
//Header2.style.backgroundColor="black";
//Header2.style.fontSize="30px";
//Header2.style.color="white";

//const root =document.querySelector('#root');
//root.append(Header1);
//root.append(Header2);

//[react: is a object]
//[reactdom:bhi object h]

const react = {
  createElement: function (tag, style, children) {
    const element = document.createElement(tag);

if(typeof children === 'object'){
for(let val of children){
    element.append(val)
}
}
else
    element.innerHTML = children;
    for (let key in style) {
      element.style[key] = style[key];
    }

    return element;
  },
};
//function react call
const Header1 = react.createElement(
  "h1",
  {
    fontSize: "30px", // ✅ CamelCase
    backgroundColor: "blue", // ✅ CamelCase
    color: "white",
  },
  "hello coder army"
);

const Header2 = react.createElement(
  "h1",
  {
    fontSize: "30px", // ✅ CamelCase
    backgroundColor: "black", // ✅ CamelCase
    color: "white",
  },
  "hello sumit army"
);

//ul list create and call for it
const li1=react.createElement('li',{},"HTML");
const li2=react.createElement('li',{},"CSS");
const li3=react.createElement('li',{},"JS");
const ul = react.createElement("ul", {
  fontSize: "30px", // ✅ CamelCase
  backgroundColor: "blue",
  color: "white",
}, [li1,li2,li3]);

//now i want to render manually ni using function

//const root =document.querySelector('#root');
//root.append(Header1);
//root.append(Header2);[YE OLD WAY TO RENDER DOM]

const renderDOM = {
  render: function (elememt, root) {
    root.append(elememt);
  },
};

//render call
renderDOM.render(Header1, document.querySelector("#root"));
renderDOM.render(Header2, document.querySelector("#root"));
renderDOM.render(ul, document.querySelector("#root"));
