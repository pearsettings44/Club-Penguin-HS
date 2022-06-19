import { createHTMLelement } from "./createElements";
import { maindiv } from "../index";
/* Creates a store button */
function renderStoreButton() {
  const buttonContainer = createHTMLelement("div", "btnContainer", "", "");
  const button = createHTMLelement(
    "button",
    "storebutton",
    "",
    "VIEW ALL PRODUCTS"
  );
  buttonContainer.appendChild(button);
  /* Append to the DOM */
  maindiv.appendChild(buttonContainer);
}

export { renderStoreButton };
