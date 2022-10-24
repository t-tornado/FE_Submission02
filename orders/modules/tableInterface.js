import { SearchInterface } from "./searchInterface.js";
import { Configuration } from "./configuration.js";

class OrdersComponentsAPI {
  static #id = "orders-table";

  static #getTableBodyElement = () => {
    return document.querySelector(`#${this.#id}>tbody`);
  };

  static #clearTableOrders = () => {
    const tableBody = this.#getTableBodyElement();
    tableBody.innerHTML = "";
  };

  static createPageOrders = (orders) => {
    const tableBody = OrdersComponentsAPI.#getTableBodyElement();
    let bodyHTML = "";
    console.log(orders);
    orders.forEach((order) => {
      const userFriendlyDate = new Date(order.created_at).toDateString();
      const price = `${order.currency} ${order.total}`;
      const orderHTML = `
            <tr>
            <td>${order.product.name}</td>
            <td>${userFriendlyDate}</td>
            <td>${price}</td>
            <td class="${order.status.toLowerCase()}" >${order.status}</td>
            </tr>
            `;
      bodyHTML += orderHTML;
    });
    tableBody.innerHTML = bodyHTML;
  };

  static #updatePageOrdersAndPagination = (pageOrders, updatedPagination) => {
    OrdersComponentsAPI.#clearTableOrders();
    OrdersComponentsAPI.createPageOrders(pageOrders);
    OrdersComponentsAPI.#setPaginationIndexElements(updatedPagination);
    Configuration.setPaginationConfiguration(updatedPagination);
  };

  static #setPaginationIndexElements = (paginationConfig) => {
    const startElement = document.getElementById("pagination-start");
    startElement.innerText = paginationConfig.start;
    const endElement = document.getElementById("pagination-end");
    endElement.innerText = paginationConfig.end;
  };

  static setupOrdersPagination = (totalOrdersLength) => {
    const itemsPerPage = 50;
    var pagination = {
      itemsLength: totalOrdersLength,
      itemsPerPage,
      start: totalOrdersLength > 0 ? 1 : totalOrdersLength,
      end: Math.ceil(totalOrdersLength / itemsPerPage),
      search: false,
    };
    Configuration.setPaginationConfiguration(pagination);
    this.#setPaginationIndexElements(pagination);
  };

  static updateOrdersPagination = (update) => {
    const updatedPagination = {
      ...Configuration.getPaginationConfiguration(),
      ...update,
    };
    console.log(updatedPagination);
    Configuration.setPaginationConfiguration(updatedPagination);
    this.#setPaginationIndexElements(updatedPagination);
  };

  static toNextPage = (orders, updatedPagination) => {
    OrdersComponentsAPI.#updatePageOrdersAndPagination(
      orders,
      updatedPagination
    );
  };

  static toPreviousPage = (orders, updatedPagination) => {
    OrdersComponentsAPI.#updatePageOrdersAndPagination(
      orders,
      updatedPagination
    );
  };

  static filterOrdersByKeyword = (keyword, orders) => {
    // const current
  };
}

export { OrdersComponentsAPI };
