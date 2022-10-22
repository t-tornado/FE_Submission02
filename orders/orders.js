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
 * @SEARCHINTERFACE
 */

const SearchInterface = {
  setSearchConfiguration: function (configuration) {
    window.configuration = configuration;
  },
  getSearchConfiguration: function () {
    return window.configuration;
  },
  setSearchResults: function (data) {
    window.searchResults = data;
  },
  getSearchResults: function () {
    return window.searchResults;
  },
};

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
      search: false,
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

  filterOrdersByKeyword: function (keyword, orders) {
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
    OrdersTableInterface.initPaginationConfig(orderResults);
    SearchInterface.setSearchResults(orderResults);
    const paginationConfig = { ...window.pagination, start: 1, search: true };
    this.updatePageOrdersAndPagination(orderResults, paginationConfig);
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
  OrdersTableInterface.initPaginationConfig(orders);
  OrdersTableInterface.createPageOrders(firstPageOrders);
  content.className = ""; // reset content class prop to initiate id style
}

function nextOrdersPage() {
  const currentPaginationConfig = window.pagination;
  let currentOrders;
  if (currentPaginationConfig.search) {
    currentOrders = SearchInterface.getSearchResults();
  } else {
    currentOrders = orders;
  }
  OrdersTableInterface.toNextPage(currentPaginationConfig, currentOrders);
}

function previousOrdersPage() {
  const currentPaginationConfig = window.pagination;
  let currentOrders;
  console.log(currentPaginationConfig.search);
  if (currentPaginationConfig.search) {
    currentOrders = SearchInterface.getSearchResults();
  } else {
    currentOrders = orders;
  }
  OrdersTableInterface.toPreviousPage(currentPaginationConfig, currentOrders);
}

function searchOrders() {
  const input = document.getElementById("order-search");
  const keyword = input.value.trim();
  if (keyword === "") loadFirstPageOrders(orders);
  OrdersTableInterface.filterOrdersByKeyword(keyword, orders);
}

async function loadPage() {
  suspendPageToLoadingState(contentId);
  await (function () {
    setTimeout(() => {
      loadFirstPageOrders(orders);
    }, 2000);
  })();
}

// Load Page
loadPage();
