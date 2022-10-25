export class DashboardContentElement {
  #document;

  constructor(selector) {
    this.#document = document.querySelector(selector);
  }

  loadPage() {
    this.#document.className = "loading_container";
    this.#document.innerHTML = `<div class='loader' ></div>`;
  }

  stopLoading() {
    const loader = document.querySelector("div.loader");
    loader.remove();
  }
}
