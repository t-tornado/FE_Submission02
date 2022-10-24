import { getOrders } from "./api.js";
import { Configuration } from "./configuration.js";
import { SearchInterface } from "./searchInterface.js";
import { OrdersComponentsAPI } from "./tableInterface.js";

async function nextOrdersPage() {
  const currentPaginationConfig = Configuration.getPaginationConfiguration();
  const { start, end } = currentPaginationConfig;
  const updatedPagination = {
    ...currentPaginationConfig,
    start: start < end ? start + 1 : end,
  };
  const { orders } = await getOrders(updatedPagination.start);
  OrdersComponentsAPI.toNextPage(orders, updatedPagination);
}

function previousOrdersPage(orders) {
  const currentPaginationConfig = Configuration.getPaginationConfiguration();
  let currentOrders;
  if (currentPaginationConfig.search) {
    currentOrders = SearchInterface.getSearchResults();
  } else {
    currentOrders = orders;
  }
  OrdersComponentsAPI.toPreviousPage(currentPaginationConfig, currentOrders);
}

function searchOrders(orders) {
  const input = document.getElementById("order-search");
  const keyword = input.value.trim();
  if (keyword === "") loadFirstPageOrders(orders);
  OrdersComponentsAPI.filterOrdersByKeyword(keyword, orders);
}

export { nextOrdersPage, previousOrdersPage, searchOrders };
