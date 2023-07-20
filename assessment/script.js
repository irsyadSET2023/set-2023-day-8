console.log("hello world");

let screenDom = document.querySelector(".screen");

let cardsDom = document.querySelector(".cards");

let arrChores = getChores() || [];

let indexChores;

let chorses = [
  "1.Water Garden Plants",
  "2.Bring Food",
  "3.Buy Grocery",
  "4.Watch Fireship",
];

console.log(screenDom);

function loopChores() {
  for (let index = 0; index < arrChores.length; index++) {
    // cardsDom.insertAdjacentHTML(
    //   "beforeend",
    //   `<div class="card">
    //     ${index + 1}.${arrChores[index]}
    //   </div>`
    // );

    cardsDom.insertAdjacentHTML(
      "beforeend",
      `<div class="card" id="task${index + 1}">
          <h3>${index + 1}.${arrChores[index]}</h3>
          <button onclick="edit('task${
            index + 1
          }')"><i class="bi bi-pencil"></i></button>
          <button onclick="deleteTask('task${
            index + 1
          }')"><i class="bi bi-archive"></i></button>
        </div>`
    );
  }
  console.log(indexChores);
}

function addTask() {
  indexChores = arrChores.length;
  let input = screenDom.value;
  if (input === "") return;

  indexChores += 1;
  arrChores.push(input);
  storeChores(arrChores);
  console.log(input);
  // let newCardDom = `<div class="card">${indexChores}.${input}</div>`;

  let newCardDom = `<div class="card" id="task${indexChores}">
          <h3>${indexChores}.${input}</h3>
          <button onclick="edit('task${indexChores}')"><i class="bi bi-pencil"></i></button>
          <button onclick="deleteTask('task${indexChores}')"><i class="bi bi-archive"></i></button>
        </div>`;

  cardsDom.insertAdjacentHTML("beforeend", newCardDom);
  screenDom.value = "";
}

function removeTask() {
  let childArr = cardsDom.children;
  console.log(cardsDom.children[0]);
  console.log(typeof childArr[0]);

  if (!childArr) return;

  arrChores.pop();
  localStorage.setItem("chorses", arrChores);

  cardsDom.removeChild(childArr[childArr.length - 1]);
}

window.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
});

function storeChores(newArray) {
  localStorage.setItem("chorses", newArray);
}

function getChores() {
  let storedChorse = localStorage.getItem("chorses");
  if (!storedChorse) return;
  return storedChorse.split(",");
}

function edit(task) {
  console.log(task);
  let existingTask = document.querySelector(`#${task} h3`);
  console.log(existingTask);
  let editTask = prompt(`Edit ${task}`);
  let existingTaskText = existingTask.innerText.replace(/\b\d+\./g, "");
  console.log(existingTaskText);
  let newarrChores = arrChores.map((item) =>
    item == existingTaskText ? editTask : item
  );
  console.log(newarrChores);
  localStorage.setItem("chorses", newarrChores);
  existingTask.innerText = `${task.replace("task", "")}.${editTask}`;
}

function deleteTask(task) {
  let existingTask = document.querySelector(`#${task}`);
  cardsDom.removeChild(existingTask);
  let existingTaskText = existingTask.innerText.replace(/\b\d+\./g, "");
  let indexExistingTaskText = arrChores.indexOf(existingTaskText);
  arrChores.splice(indexExistingTaskText, 1);
  localStorage.setItem("chorses", arrChores);
}

window.addEventListener("load", function () {
  loopChores();
});
