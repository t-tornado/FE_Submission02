import { HTMLDocumentRef } from "../../core-modules/index.js";

export class FormContainer extends HTMLDocumentRef {
  constructor(selector) {
    super(selector);
  }

  clearContent() {
    this._document.innerHTML = "";
  }

  appendElement(element) {
    this._document.innerHTML += element;
  }

  insertElement(element) {
    this._document.innerHTML = element;
  }

  updateClassName(className) {
    this._document.className = className;
  }
}
