import { createTask } from "./lib.js";

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();

  console.log(createTask(event.target.elements));
});
