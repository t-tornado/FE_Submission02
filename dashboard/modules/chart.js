import { ChartStorage } from "./chartConfig.js";

function createChart(labels, data) {
  const CanvasChart = document.getElementById("revenue-chart");
  var currentChart = new Chart(CanvasChart, {
    type: "bar",
    legend: {
      display: false,
    },
    data: {
      labels,
      datasets: [
        {
          backgroundColor: "transparent",
          data,
          borderWidth: 2,
          showLine: false,
        },
      ],
    },
    options: {
      barPercentage: 0.3,
      responsive: false,
      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        x: {
          grid: {
            display: false,
          },
          ticks: {
            maxRotation: 45,
            minRotation: 45,
          },
        },
        y: {
          grid: {
            display: false,
          },
          ticks: {
            display: false,
          },
          display: false,
        },
      },
      layout: {
        padding: 3,
      },
    },
  });
  ChartStorage.setCachedChart(currentChart);
}

export { createChart };
