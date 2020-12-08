/**
 * Create a task object from the form elements
 * @param {HTMLFormControlsCollections} elements
 * @returns {Object}
 */
export const createTask = (elements) =>
  // Filter out all elements that don't have ids
  Array.from(elements)
    .filter(({ id }) => id)
    .reduce(
      (formInfo, { id, value }) => ({
        ...formInfo,
        [id]: value,
      }),
      // Initialize 'formInfo' as an empty object
      /* const newTaskRow = template.content.cloneNode(true);
      const newTaskTDs = newTaskRow.querySelectorAll("td");

      newTaskTDs[0].arrayContent = id.class;
      newTaskTDs[1].arrayContent = id.dueDate;
      newTaskTDs[2].arrayContent = id.goalDueDate;
      newTaskTDs[3].arrayContent = id.task;*/
      {}
    );
