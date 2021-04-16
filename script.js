const input = document.querySelector(".input");
const button = document.querySelector(".button");
const list = document.querySelector(".list");
const filter = document.querySelector(".filter");

button.addEventListener("click", addTodo);
list.addEventListener("click", deleteCheck);
filter.addEventListener("click", filterTodo);

function addTodo(e) {
  if (input.value) {
    e.preventDefault();
    const todo = document.createElement("div");
    todo.classList.add("todo");
    const p = document.createElement("p");
    p.innerText = input.value;
    todo.appendChild(p);
    const complete = document.createElement("button");
    complete.classList.add("complete");
    complete.innerHTML = '<i class="fas fa-check"></i>';
    todo.appendChild(complete);
    const del = document.createElement("button");
    del.classList.add("del");
    del.innerHTML = '<i class="fas fa-trash"></i>';
    todo.appendChild(del);
    list.appendChild(todo);
    input.value = "";
  }
}

function deleteCheck(e) {
  const item = e.target;
  if (item.classList == "del") {
    const todo = item.parentElement;
    todo.classList.add("fall");
    todo.addEventListener("transitionend", function () {
      todo.remove();
    });
  }
  if (item.classList == "complete") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}

function filterTodo(e) {
  const todos = list.childNodes;
  todos.forEach((todo) => {
    switch (e.target.value) {
      case "all":
        todo.style.display = "flex";
        break;
      case "completed":
        if (!todo.classList.contains("completed")) {
          todo.style.display = "none";
        } else {
          todo.style.display = "flex";
        }
        break;
      case "active":
        if (todo.classList.contains("completed")) {
          todo.style.display = "none";
        } else {
          todo.style.display = "flex";
        }
        break;
    }
  });
}
