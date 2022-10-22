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
];
const contentId = "content";
var pagination = { start: 0, end: 2 };

function suspendPageToLoading(contentId) {
  const content = document.getElementById(contentId);
  content.className = "hide";
}

function loadOrders(orders) {
  const content = document.getElementById("content");
  content.className = "";
  const ordersTable = document.getElementById("orders-table");
  orders.forEach((order) => {
    const row = ordersTable.insertRow(-1);
    const nameCell = row.insertCell(0);
    const dateCell = row.insertCell(1);
    const priceCell = row.insertCell(2);
    const statusCell = row.insertCell(3);

    nameCell.appendChild(document.createTextNode(order.name));
    dateCell.appendChild(document.createTextNode(order.date));
    priceCell.appendChild(document.createTextNode(order.price));
    statusCell.appendChild(document.createTextNode(order.status));

    statusCell.className = order.status.toLowerCase();
  });
}

async function loadPage() {
  suspendPageToLoading(contentId);
  await (function () {
    setTimeout(() => {
      loadOrders(orders);
    }, 2000);
  })();
}

loadPage();
