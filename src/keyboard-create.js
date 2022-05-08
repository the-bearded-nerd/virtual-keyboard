import keyboard_layout from "./keyboard-layout";
const BODY = document.body;
let mouseClickedKey;
let container = document.createElement("div");
container.classList.add("container");

let inputField = document.createElement("textarea");
inputField.classList.add("keyboard--textarea", "textarea");
inputField.setAttribute("rows", 5);
inputField.setAttribute("cols", 50);

let keyboard_body = document.createElement("div");
keyboard_body.classList.add("keyboard--body", "keyboard");
for (let row of keyboard_layout.ROWS) {
  let new_row = document.createElement("div");
  new_row.classList.add("keyboard--row", "row");
  for (let key of row) {
    let new_key = document.createElement("div");
    new_key.classList.add("keyboard--key", "key", key.code);
    let rus_part = document.createElement("span");
    rus_part.classList.add("rus", "hidden");
    for (let variant in key.rus) {
      let new_variant = document.createElement("span");
      new_variant.classList.add(variant, "hidden");
      new_variant.textContent = key.rus[variant];
      rus_part.append(new_variant);
    }
    let eng_part = document.createElement("span");
    eng_part.classList.add("eng");
    for (let variant in key.eng) {
      let new_variant = document.createElement("span");
      new_variant.classList.add(variant, "hidden");
      if (variant == "lower") {
        new_variant.classList.remove("hidden");
      }
      new_variant.textContent = key.eng[variant];
      eng_part.append(new_variant);
    }
    new_key.append(rus_part);
    new_key.append(eng_part);
    new_row.append(new_key);
  }
  keyboard_body.append(new_row);
}
container.append(inputField);
container.append(keyboard_body);
BODY.append(container);

function mouseDownHandler(e) {
  mouseClickedKey = e.target.closest(".key");
  if (mouseClickedKey) {
    mouseClickedKey.classList.add("active");
    let keyValue = mouseClickedKey.querySelectorAll(":not(.hidden)")[1]
      .textContent;
    if (keyValue.length === 1) {
      if (inputField.selectionStart || inputField.selectionEnd == "0") {
        let startPos = inputField.selectionStart;
        let endPos = inputField.selectionEnd;
        inputField.value =
          inputField.value.substring(0, startPos) +
          keyValue +
          inputField.value.substring(endPos, inputField.value.length);
      } else {
        inputField.value += myValue;
      }
    } else {
      switch (keyValue) {
        case "Enter":
          inputField.textContent += "\n";
          break;
        case "Tab":
          inputField.textContent += "    ";
          break;
        case "Backspace":
          inputField.textContent = inputField.textContent.slice(0, -1);
      }
    }
    e.preventDefault();
  }
}
function mouseUpHandler(e) {
  if (mouseClickedKey) {
    mouseClickedKey.classList.remove("active");
    mouseClickedKey = null;
  }
}

function keyDownHandler(e) {
  e.preventDefault();
  let current_elem = document.getElementsByClassName(e.code)[0];
  console.log(e.code);
  current_elem.classList.add("active");
}

function keyUpHandler(e) {
  e.preventDefault();
  let current_elem = document.getElementsByClassName(e.code)[0];
  current_elem.classList.remove("active");
}

BODY.addEventListener("mousedown", mouseDownHandler);
BODY.addEventListener("mouseup", mouseUpHandler);
BODY.addEventListener("keydown", keyDownHandler);
BODY.addEventListener("keyup", keyUpHandler);
