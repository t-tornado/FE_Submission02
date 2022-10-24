export class HTMLDocumentRef {
  _document;

  constructor(querySelector) {
    this._document = document.querySelector(querySelector);
  }
}
