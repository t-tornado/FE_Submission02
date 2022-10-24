import { ContainerElement, TextElement } from "./elements/index.js";
import { createChart } from "./modules/chart.js";
import { ChartStorage } from "./modules/chartConfig.js";

let weeklyRevenueChartLabels = [
  "today",
  "yesterday",
  "day 3",
  "day 4",
  "day 5",
  "day 6",
  "day 7",
];
let weeklyRevenueValues = [55, 49, 44, 24, 15, 50, 28];

let yearlyRevenueChartLabels = [
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
let yearlyRevenueValues = [10, 29, 40, 55, 92, 35, 78, 94, 62, 77, 80, 102];

function destroyChart(chart) {
  if (chart) chart.destroy();
}

//
function toggleRevenue(event) {
  const viewYearlyRevenue = event.target.checked;
  const previousChart = ChartStorage.getCachedChart();
  const DashboardRevenueHeaderText = new TextElement(
    "section[id=revenue__Section] header h2"
  );
  const CanvasBorderElement = new ContainerElement("div.canvas_border");
  destroyChart(previousChart);

  if (viewYearlyRevenue) {
    CanvasBorderElement.updateStyle({ height: "421.5px" });
    DashboardRevenueHeaderText.updateText("Revenue (last 12 months)");
    createChart(yearlyRevenueChartLabels, yearlyRevenueValues);
  } else {
    CanvasBorderElement.updateStyle({ height: "425px" });
    DashboardRevenueHeaderText.updateText("Revenue (last 7 days)");
    createChart(weeklyRevenueChartLabels, weeklyRevenueValues);
  }
}

// bind to global object
window.toggleRevenue = toggleRevenue;

// on load window
createChart(weeklyRevenueChartLabels, weeklyRevenueValues);
