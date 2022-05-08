import keyboard_layout from "./keyboard-layout";
const BODY = document.body;

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

BODY.append(keyboard_body);
