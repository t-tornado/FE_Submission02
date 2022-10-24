import { HTMLDocumentRef } from "../../core-modules/index.js";

export class TextElement extends HTMLDocumentRef {
  constructor(querySelector) {
    super(querySelector);
  }

  updateText(text) {
    this._document.textContent = text;
  }
}
