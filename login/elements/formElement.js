import { HTMLDocumentRef } from "../../core-modules/index.js";

export class FormElement {
  #formUsername;
  #formPassword;
  #submitButton;

  constructor(usernameSelector, passwordSelector, submitButtonSelector) {
    const passwordElement = new HTMLDocumentRef(passwordSelector);
    const usernameElement = new HTMLDocumentRef(usernameSelector);
    const submitButtonElement = new HTMLDocumentRef(submitButtonSelector);
    this.#formPassword = passwordElement._document;
    this.#formUsername = usernameElement._document;
    this.#submitButton = submitButtonElement._document;
  }

  getFormValues() {
    const username = this.#formUsername.value;
    const password = this.#formPassword.value;
    return {
      username,
      password,
    };
  }

  hideElements() {
    this.#formPassword.className = "hide";
    this.#formUsername.className = "hide";
    this.#submitButton.className = "hide";
  }

  revealElements() {
    this.#formPassword.className = "";
    this.#formUsername.className = "";
    this.#submitButton.className = "";
  }

  validateForm() {
    return this.#formPassword.value && this.#formUsername.value ? true : false;
  }
}
