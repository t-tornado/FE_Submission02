export class HTMLDocumentRef {
  _document;

  constructor(querySelector) {
    this._document = document.querySelector(querySelector);
  }

  removeElement(selector) {
    const element = document.querySelector(selector);
    if (element) element.remove();
  }
}
