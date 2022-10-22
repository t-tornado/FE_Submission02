const contentId = "content";
//
const orders = [
  {
    name: "Item 1",
    date: "20th October, 2021",
    price: "$ 60.10",
    status: "Processing",
  },
  {
    name: "Item 2",
    date: "20th October, 2021",
    price: "$ 60.10",
    status: "Processing",
  },
  {
    name: "Item 3",
    date: "20th October, 2021",
    price: "$ 60.10",
    status: "Shipped",
  },
  {
    name: "Item 4",
    date: "20th October, 2021",
    price: "$ 60.10",
    status: "Delivered",
  },
  {
    name: "Item 5",
    date: "20th October, 2021",
    price: "$ 60.10",
    status: "Shipped",
  },
  {
    name: "Item 6",
    date: "20th October, 2021",
    price: "$ 60.10",
    status: "Processing",
  },
  {
    name: "Item 7",
    date: "20th October, 2021",
    price: "$ 60.10",
    status: "Processing",
  },
  {
    name: "Item 8",
    date: "20th October, 2021",
    price: "$ 60.10",
    status: "Shipped",
  },
  {
    name: "Item 9",
    date: "20th October, 2021",
    price: "$ 60.10",
    status: "Delivered",
  },
  {
    name: "Item 10",
    date: "20th October, 2021",
    price: "$ 60.10",
    status: "Shipped",
  },
  {
    name: "Item 11",
    date: "20th October, 2021",
    price: "$ 60.10",
    status: "Processing",
  },
  {
    name: "Item 12",
    date: "20th October, 2021",
    price: "$ 60.10",
    status: "Processing",
  },
  {
    name: "Item 13",
    date: "20th October, 2021",
    price: "$ 60.10",
    status: "Shipped",
  },
  {
    name: "Item 14",
    date: "20th October, 2021",
    price: "$ 60.10",
    status: "Delivered",
  },
  {
    name: "Item 15",
    date: "20th October, 2021",
    price: "$ 60.10",
    status: "Shipped",
  },
  {
    name: "Item 16",
    date: "20th October, 2021",
    price: "$ 60.10",
    status: "Processing",
  },
  {
    name: "Item 17",
    date: "20th October, 2021",
    price: "$ 60.10",
    status: "Processing",
  },
  {
    name: "Item 18",
    date: "20th October, 2021",
    price: "$ 60.10",
    status: "Shipped",
  },
  {
    name: "Item 19",
    date: "20th October, 2021",
    price: "$ 60.10",
    status: "Delivered",
  },
  {
    name: "Item 20",
    date: "20th October, 2021",
    price: "$ 60.10",
    status: "Shipped",
  },
  {
    name: "Item 21",
    date: "20th October, 2021",
    price: "$ 60.10",
    status: "Processing",
  },
  {
    name: "Item 22",
    date: "20th October, 2021",
    price: "$ 60.10",
    status: "Processing",
  },
  {
    name: "Item 23",
    date: "20th October, 2021",
    price: "$ 60.10",
    status: "Shipped",
  },
  {
    name: "Item 24",
    date: "20th October, 2021",
    price: "$ 60.10",
    status: "Delivered",
  },
  {
    name: "Item 25",
    date: "20th October, 2021",
    price: "$ 60.10",
    status: "Shipped",
  },
  {
    name: "Item 26",
    date: "20th October, 2021",
    price: "$ 60.10",
    status: "Processing",
  },
  {
    name: "Item 27",
    date: "20th October, 2021",
    price: "$ 60.10",
    status: "Processing",
  },
  {
    name: "Item 28",
    date: "20th October, 2021",
    price: "$ 60.10",
    status: "Shipped",
  },
  {
    name: "Item 29",
    date: "20th October, 2021",
    price: "$ 60.10",
    status: "Delivered",
  },
  {
    name: "Item 30",
    date: "20th October, 2021",
    price: "$ 60.10",
    status: "Shipped",
  },
  {
    name: "Item 31",
    date: "20th October, 2021",
    price: "$ 60.10",
    status: "Processing",
  },
  {
    name: "Item 32",
    date: "20th October, 2021",
    price: "$ 60.10",
    status: "Processing",
  },
  {
    name: "Item 33",
    date: "20th October, 2021",
    price: "$ 60.10",
    status: "Shipped",
  },
  {
    name: "Item 34",
    date: "20th October, 2021",
    price: "$ 60.10",
    status: "Delivered",
  },
  {
    name: "Item 35",
    date: "20th October, 2021",
    price: "$ 60.10",
    status: "Shipped",
  },
];

/**
 * @TABLEINTERFACE
 */

const OrdersTableInterface = {
  id: "orders-table",

  getTableBodyElement: function () {
    return document.querySelector(`#${OrdersTableInterface.id}>tbody`);
  },

  clearTableOrders: function () {
    const tableBody = this.getTableBodyElement();
    tableBody.innerHTML = "";
  },

  createPageOrders: function (orders) {
    const tableBody = this.getTableBodyElement();
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
  },

  toNextPage: function (currentPaginationConfig, orders) {
    const { start, end } = currentPaginationConfig;
    const updatedPagination = {
      ...currentPaginationConfig,
      start: start < end ? start + 1 : end,
    };
    this.updatePageOrdersAndPagination(orders, updatedPagination);
  },

  toPreviousPage: function (currentPaginationConfig, orders) {
    const { start } = currentPaginationConfig;
    if (start === 1) return;
    const updatedPagination = {
      ...currentPaginationConfig,
      start: start - 1,
    };
    this.updatePageOrdersAndPagination(orders, updatedPagination);
  },

  updatePageOrdersAndPagination: function (orders, updatedPagination) {
    const { start: newStart, itemsPerPage } = updatedPagination;
    const pageOrders = orders.slice(
      newStart * itemsPerPage - itemsPerPage,
      newStart * itemsPerPage
    );
    OrdersTableInterface.clearTableOrders();
    this.createPageOrders(pageOrders);
    this.setPaginationIndexes(updatedPagination);
    this.setPaginationConfiguration(updatedPagination);
  },

  setPaginationConfiguration: function (paginationConfig) {
    window.pagination = paginationConfig;
  },

  initPaginationConfig: function (orders) {
    const itemsPerPage = 10;
    var pagination = {
      itemsLength: orders.length,
      itemsPerPage,
      start: 1,
      end: Math.ceil(orders.length / itemsPerPage),
    };
    this.setPaginationConfiguration(pagination);
    this.setPaginationIndexes(pagination);
  },

  setPaginationIndexes: function (paginationConfig) {
    const startElement = document.getElementById("pagination-start");
    startElement.innerText = paginationConfig.start;
    const endElement = document.getElementById("pagination-end");
    endElement.innerText = paginationConfig.end;
  },
};

/**
 *
 * @PAGEMETHODS
 */

function suspendPageToLoadingState(contentId) {
  const content = document.getElementById(contentId);
  content.className = "hide";
}

function loadFirstPageOrders(orders) {
  const content = document.getElementById("content");
  const firstPageOrders = orders.slice(0, 10);
  OrdersTableInterface.createPageOrders(firstPageOrders);
  content.className = ""; // reset content class prop to initiate id style
}

function nextOrdersPage() {
  const currentPaginationConfig = window.pagination;
  OrdersTableInterface.toNextPage(currentPaginationConfig, orders);
}

function previousOrdersPage() {
  const currentPaginationConfig = window.pagination;
  OrdersTableInterface.toPreviousPage(currentPaginationConfig, orders);
}

async function loadPage() {
  suspendPageToLoadingState(contentId);
  await (function () {
    setTimeout(() => {
      OrdersTableInterface.initPaginationConfig(orders);
      loadFirstPageOrders(orders);
    }, 2000);
  })();
}

// Load Page
loadPage();
