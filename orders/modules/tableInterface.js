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
    console.log(pageOrders);
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
      start: 1,
      end: Math.ceil(totalOrdersLength / itemsPerPage),
      search: false,
    };
    Configuration.setPaginationConfiguration(pagination);
    this.#setPaginationIndexElements(pagination);
  };

  static toNextPage = (orders, updatedPagination) => {
    OrdersComponentsAPI.#updatePageOrdersAndPagination(
      orders,
      updatedPagination
    );
  };

  static toPreviousPage = (currentPaginationConfig, orders) => {
    const { start } = currentPaginationConfig;
    if (start === 1) return;
    const updatedPagination = {
      ...currentPaginationConfig,
      start: start - 1,
    };
    OrdersComponentsAPI.#updatePageOrdersAndPagination(
      orders,
      updatedPagination
    );
  };

  static filterOrdersByKeyword = (keyword, orders) => {
    // const current
    const orderResults = orders.filter((order) => {
      const $keyword = keyword.toLowerCase();
      const matchOrderName = order.name.toLowerCase().startsWith($keyword);
      const matchOrderPrice = order.price.toLowerCase().startsWith($keyword);
      const matchOrderStatus = order.status.toLowerCase().startsWith($keyword);
      const matchOrderDate = order.date.toLowerCase().startsWith($keyword);
      if (
        matchOrderDate ||
        matchOrderName ||
        matchOrderPrice ||
        matchOrderStatus
      )
        return true;
    });
    OrdersComponentsAPI.setupOrdersPagination(orderResults);
    SearchInterface.setSearchResults(orderResults);
    const pagination = Configuration.getPaginationConfiguration();
    const paginationConfig = { ...pagination, start: 1, search: true };
    OrdersComponentsAPI.#updatePageOrdersAndPagination(
      orderResults,
      paginationConfig
    );
  };
}

export { OrdersComponentsAPI };
