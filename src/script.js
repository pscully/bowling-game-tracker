// HELPER FUNCTIONS

function createEl(el) {
  return document.createElement(el);
}

function getEl(id) {
  return document.getElementById(id);
}

function createForm(id, buttonText, callback) {
  const form = createEl("div");
  const input = createEl("input");
  const button = createEl("button");
  form.id = id;
  input.id = "input-" + id;
  button.id = "button-" + id;
  button.textContent = buttonText;
  form.appendChild(input);
  form.appendChild(button);

  return form;
}

function hide(el) {
  return el.classList.add("hide");
}

function show(el) {
  return el.classList.remove("hide");
}

// END HELPER FUNCTIONS