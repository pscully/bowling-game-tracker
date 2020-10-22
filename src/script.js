// HELPER FUNCTIONS

function createEl(el) {
  return document.createElement(el);
}

function getEl(id) {
  return document.getElementById(id);
}

function createForm(id, buttonText, placeholder) {
  const form = createEl("div");
  const input = createEl("input");
  const button = createEl("button");
  form.id = id;
  input.id = "input-" + id;
  button.id = "button-" + id;
  input.placeholder = placeholder;
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

// The View (View)

class View {
  constructor() {
    this.app = getEl("lane");
    this.heading = createEl("h1");
    this.addBowler = createForm("add-bowler", "Start Game", "Enter Your Name");
    this.addShot = createForm("roll-ball", "Roll The Ball", "How many pins?");
    this.total = createEl("div");
    this.total.id = "total";
    hide(this.addShot);
  }

  buildView = () => {
    this.heading.textContent = "Welcome to Bowling!";
    this.app.appendChild(this.heading);
    this.app.appendChild(this.addBowler);
    this.app.appendChild(this.addShot);
    this.app.appendChild(this.total);
  };
}

// The Lane (Controller)

class Lane {
  constructor(view, string) {
    this.view = view;
    this.string = string;
    this.strings = [];

    this.view.buildView();
  }
}

const app = new Lane(new View(), new String());
