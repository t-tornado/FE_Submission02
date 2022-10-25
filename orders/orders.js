import { logoutFromApp } from "../shared-modules/index.js";
import {
  addEvent,
  LocalCache,
  navigateFromRoot,
} from "../core-modules/index.js";
import { OrdersComponentsAPI } from "./modules/tableInterface.js";
import { getOrders } from "./modules/api.js";
import { nextOrdersPage, previousOrdersPage } from "./modules/handlers.js";
import { Configuration } from "./modules/configuration.js";

const contentId = "content";

// page methods

function renderOrders(orders) {
  const content = document.getElementById("content");
  OrdersComponentsAPI.createPageOrders(orders);
  content.className = ""; // reset content class prop to initiate id style
}

// event handlers
async function onInputChangeHandler(event) {
  const currentValue = event.target.value.trim();
  if (currentValue === "") await searchOrders(true);
}

function initializeEvents() {
  addEvent("input[id=order-search]", "input", onInputChangeHandler);
}

async function searchOrders(triggerFromEvent) {
  const input = document.getElementById("order-search");
  const keyword = input.value.trim();
  const { start } = Configuration.getPaginationConfiguration();
  if (triggerFromEvent && keyword === "") {
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
function validateUserBeforeLaunchingApp() {
  const accessToken = LocalCache.getAccessToken();
  if (!accessToken) navigateFromRoot("/");
}

async function loadPage() {
  initializeEvents();
  const { orders, totalLength } = await getOrders(1);
  OrdersComponentsAPI.setupOrdersPagination(totalLength);
  renderOrders(orders);
}

validateUserBeforeLaunchingApp();
// bind modules to global object
window.nextOrdersPage = nextOrdersPage;
window.previousOrdersPage = previousOrdersPage;
window.searchOrders = searchOrders;
window.navigateFromRoot = navigateFromRoot;
window.logoutFromApp = logoutFromApp;

// Load Page
loadPage();
