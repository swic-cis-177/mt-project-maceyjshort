const form = document.querySelector("form");

form.addEventListener("submit", function () {
  event.preventDefault();

  console.log(event);
});

//Can't figure this out, I have a document.write() violation
