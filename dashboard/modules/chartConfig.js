export class ChartStorage {
  static setCachedChart(chart) {
    window.appChart = chart;
  }

  static getCachedChart() {
    return window.appChart;
  }
}
