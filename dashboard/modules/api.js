"https://freddy.codesubmit.io/dashboard";

import { fetchDataWithToken, LocalCache } from "../../core-modules/index.js";

async function getDashboardData() {
  let dashboardData;
  try {
    const token = LocalCache.getAccessToken();
    dashboardData = await fetchDataWithToken("get", token, `dashboard`);
    console.log(dashboardData);
    if (dashboardData === "Token has expired") {
      const refreshToken = LocalCache.getRefreshToken();
      const newToken = await fetchDataWithToken(
        "post",
        refreshToken,
        "refresh"
      );
      LocalCache.saveAccessTokenKey(newToken.access_token);
    }
    return {
      weeklyRevenue: dashboardData.dashboard.sales_over_time_week,
      yearlyRevenue: dashboardData.dashboard.sales_over_time_year,
      bestSellers: dashboardData.dashboard.bestsellers,
    };
  } catch (error) {
    console.log(error.message);
    throw new Error(error.messge);
  }
}

export { getDashboardData };
