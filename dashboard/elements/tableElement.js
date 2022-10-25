class TableElement {
  #document;

  constructor(selector) {
    this.#document = document.querySelector(selector);
  }

  createPageOrders = (data) => {
    const tableBody = this.#document;
    let bodyHTML = "";
    data.forEach((order) => {
      const { product, units, revenue } = order;
      const price = Math.round(revenue / units);
      const orderHTML = `
              <tr>
              <td>${product.name}</td>
              <td>${price}</td>
              <td>${units}</td>
              <td>${revenue}</td>
              </tr>
              `;
      bodyHTML += orderHTML;
    });
    tableBody.innerHTML = bodyHTML;
  };
}

export { TableElement };
