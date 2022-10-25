import { ContainerElement, TextElement } from "./elements/index.js";
import { getDashboardData } from "./modules/index.js";
import { createChart } from "./modules/chart.js";
import { ChartStorage } from "./modules/chartConfig.js";
import { LocalCache } from "../core-modules/localStorage.js";
import { TableElement } from "./elements/index.js";

//
const weeklyRevenueChartLabels = [
  "today",
  "yesterday",
  "day 3",
  "day 4",
  "day 5",
  "day 6",
  "day 7",
];

const yearlyRevenueChartLabels = [
  "this month",
  "last month",
  "month 3",
  "month 4",
  "month 5",
  "month 6",
  "month 7",
  "month 8",
  "month 9",
  "month 10",
  "month 11",
  "month 12",
];

function destroyChart(chart) {
  if (chart) chart.destroy();
}

//

function showWeeklyRevenue() {
  const dashbaordData = LocalCache.getDashboardData();
  const { weeklyRevenue } = dashbaordData;
  const weeklyRevenueData = Object.values(weeklyRevenue).map(
    (rev) => rev.total
  );
  createChart(weeklyRevenueChartLabels, weeklyRevenueData);
}

function showYearlyRevene() {
  const dashbaordData = LocalCache.getDashboardData();
  const { yearlyRevenue } = dashbaordData;
  const yearlyRevenueData = Object.values(yearlyRevenue).map(
    (rev) => rev.total
  );
  createChart(yearlyRevenueChartLabels, yearlyRevenueData);
}

//
async function toggleRevenue(event) {
  const viewYearlyRevenue = event.target.checked;
  const previousChart = ChartStorage.getCachedChart();
  destroyChart(previousChart);
  const DashboardRevenueHeaderText = new TextElement(
    "section[id=revenue_section] header h2"
  );
  const CanvasBorderElement = new ContainerElement("div.canvas_border");

  if (viewYearlyRevenue) {
    CanvasBorderElement.updateStyle({ height: "421.5px" });
    DashboardRevenueHeaderText.updateText("Revenue (last 12 months)");
    showYearlyRevene();
  } else {
    CanvasBorderElement.updateStyle({ height: "425px" });
    DashboardRevenueHeaderText.updateText("Revenue (last 7 days)");
    showWeeklyRevenue();
  }
}

function showBestSellers() {
  const { bestSellers } = LocalCache.getDashboardData();
  const BestSellersTable = new TableElement(
    "table[id=best-sellers-table] tbody"
  );
  BestSellersTable.createPageOrders(bestSellers);
}

// bind to global object
window.toggleRevenue = toggleRevenue;
window.onload = async function () {
  const dashboardData = await getDashboardData();
  showWeeklyRevenue();
  LocalCache.saveDashboardData(dashboardData);
  showBestSellers();
};
