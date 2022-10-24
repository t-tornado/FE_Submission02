import { HTMLDocumentRef } from "../../core-modules/index.js";

export class ContainerElement extends HTMLDocumentRef {
  constructor(querySelector) {
    super(querySelector);
  }

  updateStyle(style) {
    for (const styleProperty in style) {
      this._document.style[styleProperty] = style[styleProperty];
    }
  }
}
