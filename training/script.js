// let animals = ["animals", "tiger", "dolphin", "snake", "ant"];
// console.log("Hello World");
// let string = ["a", "b", "c"];

// for (let index = 0; index < animals.length; index++) {
//   const element = animals[index];
//   console.log(element);
// }

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

let h1ArrayDom = document.querySelectorAll("h1");

console.log(h1ArrayDom);

// for (let index = 0; index < h1ArrayDom.length; index++) {
//   const element = h1ArrayDom[index].innerText;
//   //   h1ArrayDom[index].setAttribute("style", "background-color:red");

//   if (index % 2 == 0) {
//     h1ArrayDom[index].setAttribute("style", "background-color:red");
//   } else {
//     h1ArrayDom[index].setAttribute("style", "background-color:yellow");
//   }

//   console.log(element);
// }

let animals = ["animals", "tiger", "dolphin", "snake", "ant"];

let divText = document.querySelector("#renderText");

for (let index = 0; index < animals.length; index++) {
  let newH1Dom = document.createElement("h1");
  newH1Dom.innerText = animals[index];
  newH1Dom.setAttribute("style", "text-align:center");
  divText.appendChild(newH1Dom);
}

let fruits = ["orange", "apple", "lemon", "stawberry", "avocado"];

let renderFruitsDom = document.querySelector("#renderFruits");

for (let index = 0; index < fruits.length; index++) {
  let html = `<h1>${fruits[index]}</h1>`;
  console.log(html);

  renderFruitsDom.insertAdjacentHTML("afterbegin", html);
}
