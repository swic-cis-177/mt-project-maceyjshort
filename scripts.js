import { createTask } from "./lib.js";

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();

  // TODO{macey.short}: 'import' another fxn. that will 'render' a 'new task' using the 'template row.
  createTask(event.target);
});
