import { addEvent } from "../core-modules/events.js";
import { OrdersComponentsAPI } from "./modules/tableInterface.js";
import { getOrders } from "./modules/api.js";
import { nextOrdersPage, previousOrdersPage } from "./modules/handlers.js";
import { Configuration } from "./modules/configuration.js";

const contentId = "content";

// page methods
function suspendPageToLoadingState(contentId) {
  const content = document.getElementById(contentId);
  content.className = "hide";
}

function renderOrders(orders) {
  const content = document.getElementById("content");
  OrdersComponentsAPI.createPageOrders(orders);
  content.className = ""; // reset content class prop to initiate id style
}

// event handlers
async function onInputChangeHandler(event) {
  const currentValue = event.target.value.trim();
  if (currentValue === "") await searchOrders();
}

function initializeEvents() {
  addEvent("input[id=order-search]", "input", onInputChangeHandler);
}

async function searchOrders() {
  const input = document.getElementById("order-search");
  const keyword = input.value.trim();
  const { start } = Configuration.getPaginationConfiguration();
  if (keyword === "") {
    const { orders, totalLength } = await getOrders(start);
    OrdersComponentsAPI.setupOrdersPagination(totalLength);
    renderOrders(orders);
    return;
  }

  const { orders, totalLength } = await getOrders(start, keyword);
  OrdersComponentsAPI.setupOrdersPagination(totalLength);
  renderOrders(orders);
}

// main application
async function loadPage() {
  initializeEvents();
  suspendPageToLoadingState(contentId);
  const { orders, totalLength } = await getOrders(1);
  OrdersComponentsAPI.setupOrdersPagination(totalLength);
  renderOrders(orders);
}

// bind modules to global object
window.nextOrdersPage = nextOrdersPage;
window.previousOrdersPage = previousOrdersPage;
window.searchOrders = searchOrders;

// Load Page
loadPage();
