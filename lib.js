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
      {}
    );
