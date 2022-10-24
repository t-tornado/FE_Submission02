import { addEvent } from "../core-modules/events.js";
import { OrdersComponentsAPI } from "./modules/tableInterface.js";
import { getOrders } from "./modules/api.js";
import { nextOrdersPage, previousOrdersPage } from "./modules/handlers.js";

const contentId = "content";

// bind modules to global object
window.nextOrdersPage = nextOrdersPage;
window.previousOrdersPage = previousOrdersPage;
// window.searchOrders = searchOrders.bind(this, orders);

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
function onInputChangeHandler(event) {
  const currentValue = event.target.value.trim();
  if (currentValue === "") loadFirstPageOrders(orders);
}

function initializeEvents() {
  addEvent("input[id=order-search]", "input", onInputChangeHandler);
}

// main application
async function loadPage() {
  initializeEvents();
  suspendPageToLoadingState(contentId);
  const { orders, totalLength } = await getOrders(1);
  OrdersComponentsAPI.setupOrdersPagination(totalLength);
  renderOrders(orders);
}

// Load Page
loadPage();
