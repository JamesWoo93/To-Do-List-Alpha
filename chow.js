// declaring input element from html
const inputField = document.getElementById("input-field");
// declaring output div from html
const outputDiv = document.getElementById("output-tasks-div");

// display add tasks container
function displayAddTasksContainer() {
  let addTasksContainer = document.getElementById("add-tasks-html");
  addTasksContainer.style.display = "block";
}

// hide add tasks container
function hideAnimation() {
  let addTasksContainer = document.getElementById("add-tasks-html");
  addTasksContainer.classList.add("slide-up-animation");
  setTimeout(() => {
    addTasksContainer.style.display = "none";
  }, 500);
  setTimeout(() => {
    addTasksContainer.classList.remove("slide-up-animation");
  }, 600);
}

// add tasks function
function toAddTasks() {
  if (inputField.value === "") {
    alert("Add a task");
  } else {
    let paragraph = document.createElement("p");
    paragraph.classList.add("added-tasks-style");
    paragraph.innerText = inputField.value;
    let span = document.createElement("span");
    let span2 = document.createElement("span");
    span.classList.add("x-mark-span");
    span2.classList.add("empty-circle");
    span2.innerText = "\u25cb";
    span.innerText = "\u00d7";
    outputDiv.appendChild(paragraph);
    paragraph.appendChild(span);
    paragraph.appendChild(span2);
    inputField.value = "";
  }
}

addEventListener("keypress", (event) => {
  if (event.key == "Enter") {
    if (inputField.value === "") {
      alert("Add a task");
    } else {
      let paragraph = document.createElement("p");
      paragraph.classList.add("added-tasks-style");
      paragraph.innerText = inputField.value;
      let span = document.createElement("span");
      let span2 = document.createElement("span");
      span.classList.add("x-mark-span");
      span2.classList.add("empty-circle");
      span2.innerText = "\u25cb";
      span.innerText = "\u00d7";
      outputDiv.appendChild(paragraph);
      paragraph.appendChild(span);
      paragraph.appendChild(span2);
      inputField.value = "";
    }
  }
});

// to remove tasks || to mark tasks
outputDiv.addEventListener("click", function (e) {
  if (
    e.target.tagName === "SPAN" &&
    e.target.classList.contains("x-mark-span")
  ) {
    e.target.parentElement.remove();
  } else if (e.target.tagName === "P") {
    e.target.classList.toggle("added-tasks-checked");
  } else if (
    e.target.tagName === "SPAN" &&
    e.target.classList.contains("empty-circle")
  ) {
    let paragraph = e.target.parentElement;
    paragraph.classList.toggle("added-tasks-checked");
  }
});

// to hide scrollbar and display none the "curtains"
const body = document.body;
const curtains = document.getElementById("opening-curtain");
body.classList.add("hide-scrollbar");
setTimeout(() => {
  body.classList.remove("hide-scrollbar");
  curtains.style.display = "none";
}, 3000);
