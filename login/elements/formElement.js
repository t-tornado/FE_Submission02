import { HTMLDocumentRef } from "../../core-modules/index.js";

export class FormElement {
  #formUsername;
  #formPassword;

  constructor(usernameSelector, passwordSelector) {
    const passwordElement = new HTMLDocumentRef(passwordSelector);
    const usernameElement = new HTMLDocumentRef(usernameSelector);
    this.#formPassword = passwordElement._document;
    this.#formUsername = usernameElement._document;
  }

  getFormValues() {
    const username = this.#formUsername.value;
    const password = this.#formPassword.value;
    return {
      username,
      password,
    };
  }

  validateForm() {
    return this.#formPassword.value && this.#formUsername.value ? true : false;
  }
}
