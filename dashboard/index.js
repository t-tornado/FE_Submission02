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

const CanvasChart = document.getElementById("revenue-chart");

console.log(CanvasChart.children);

new Chart(CanvasChart, {
  type: "bar",
  legend: {
    display: false,
  },
  data: {
    labels: yearlyRevenueChartLabels,
    datasets: [
      {
        backgroundColor: "transparent",
        data: yearlyRevenueValues,
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
