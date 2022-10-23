import { addEvent } from "../core-modules/events.js";
import { OrdersComponentsAPI } from "./modules/tableInterface.js";
import {
  nextOrdersPage,
  previousOrdersPage,
  searchOrders,
} from "./modules/handlers.js";

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

// bind modules to global object
window.nextOrdersPage = nextOrdersPage.bind(this, orders);
window.previousOrdersPage = previousOrdersPage.bind(this, orders);
window.searchOrders = searchOrders.bind(this, orders);

// page methods
function suspendPageToLoadingState(contentId) {
  const content = document.getElementById(contentId);
  content.className = "hide";
}

function loadFirstPageOrders(orders) {
  const content = document.getElementById("content");
  const firstPageOrders = orders.slice(0, 10);
  OrdersComponentsAPI.setupOrdersPagination(orders);
  OrdersComponentsAPI.createPageOrders(firstPageOrders);
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
  await (function () {
    setTimeout(() => {
      loadFirstPageOrders(orders);
    }, 2000);
  })();
}

// Load Page
loadPage();
