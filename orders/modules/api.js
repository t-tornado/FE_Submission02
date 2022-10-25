import { fetchDataWithToken, LocalCache } from "../../core-modules/index.js";

async function getOrders(page, searchKeyword) {
  let orders;
  try {
    const token = LocalCache.getAccessToken();
    let query = "";
    if (page) query += `page=${page}`;
    if (searchKeyword) query += `&q=${searchKeyword}`;
    orders = await fetchDataWithToken("get", token, `orders?${query}`);
    if (orders === "Token has expired") {
      const refreshToken = LocalCache.getRefreshToken();
      const newToken = await fetchDataWithToken(
        "post",
        refreshToken,
        "refresh"
      );
      LocalCache.saveAccessTokenKey(newToken.access_token);
      getOrders(page, searchKeyword);
      orders = [];
    }
    return { orders: orders.orders, totalLength: orders.total };
  } catch (error) {
    console.log(error.message);
    throw new Error(error.messge);
  }
}

export { getOrders };
