class DashboardSummaryElement {
  #todaySummary;
  #lastWeekSummary;
  #lastMonthSummary;

  constructor(todaySelector, lastWeekSelector, lastMonthSelector) {
    this.#todaySummary = document.querySelector(todaySelector);
    this.#lastWeekSummary = document.querySelector(lastWeekSelector);
    this.#lastMonthSummary = document.querySelector(lastMonthSelector);
  }

  updateSummary(todaySummary, lastWeekSummary, lastMonthSummary) {
    this.#todaySummary.innerText = todaySummary;
    this.#lastWeekSummary.innerText = lastWeekSummary;
    this.#lastMonthSummary.innerText = lastMonthSummary;
  }
}

export { DashboardSummaryElement };
