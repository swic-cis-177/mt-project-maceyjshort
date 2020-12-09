/**
 * Create a task object from the form elements
 * @param {HTMLFormControlsCollections} elements
 * @returns {Object}
 */
export const createTask = (form) =>
  // https://dev.to/codefinity/handling-form-submissions-ii-35d5
  Object.fromEntries(new FormData(form));
console.log(createTask);

export const renderTask = (task) => {
  // TODO{macey.short}: Use some of this code and the HTML templates to render the task.
  // Initialize 'formInfo' as an empty object
  /* const newTaskRow = template.content.cloneNode(true);
      const newTaskTDs = newTaskRow.querySelectorAll("td");

      newTaskTDs[0].arrayContent = id.class;
      newTaskTDs[1].arrayContent = id.dueDate;
      newTaskTDs[2].arrayContent = id.goalDueDate;
      newTaskTDs[3].arrayContent = id.task;*/
};
