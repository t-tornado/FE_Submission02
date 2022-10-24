import { getOrders } from "./api.js";
import { Configuration } from "./configuration.js";
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

async function previousOrdersPage() {
  const currentPaginationConfig = Configuration.getPaginationConfiguration();
  const { start } = currentPaginationConfig;
  if (start === 1) return;
  const updatedPagination = {
    ...currentPaginationConfig,
    start: start - 1,
  };
  const { orders } = await getOrders(updatedPagination.start);
  OrdersComponentsAPI.toPreviousPage(orders, updatedPagination);
}

export { nextOrdersPage, previousOrdersPage };
