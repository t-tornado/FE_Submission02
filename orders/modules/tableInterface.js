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
      const orderHTML = `
            <tr>
            <td>${order.name}</td>
            <td>${order.date}</td>
            <td>${order.price}</td>
            <td class="${order.status.toLowerCase()}" >${order.status}</td>
            </tr>
            `;
      bodyHTML += orderHTML;
    });
    tableBody.innerHTML = bodyHTML;
  };

  static #updatePageOrdersAndPagination = (orders, updatedPagination) => {
    const { start: newStart, itemsPerPage } = updatedPagination;
    const pageOrders = orders.slice(
      newStart * itemsPerPage - itemsPerPage,
      newStart * itemsPerPage
    );
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

  static setupOrdersPagination = (orders) => {
    const itemsPerPage = 10;
    var pagination = {
      itemsLength: orders.length,
      itemsPerPage,
      start: 1,
      end: Math.ceil(orders.length / itemsPerPage),
      search: false,
    };
    Configuration.setPaginationConfiguration(pagination);
    this.#setPaginationIndexElements(pagination);
  };

  static toNextPage = (currentPaginationConfig, orders) => {
    const { start, end } = currentPaginationConfig;
    const updatedPagination = {
      ...currentPaginationConfig,
      start: start < end ? start + 1 : end,
    };
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
