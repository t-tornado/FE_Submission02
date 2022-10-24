import { HttpClient, LocalCache } from "../../core-modules/index.js";

async function fetchDataWithToken(method, token, route) {
  return new Promise(async (res, rej) => {
    console.log(method);
    const response = await HttpClient[method](route, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-type": "Application/json",
        credentials: "include",
      },
    });
    const responseData = await response.json();
    if (response.status === 200) {
      res(responseData);
      return;
    } else if (
      response.status !== 200 &&
      responseData.msg.startsWith("Token has expired")
    ) {
      res(responseData.msg);
      return;
    } else {
      rej(new Error(responseMessage));
    }
  });
}

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
    return orders.orders;
  } catch (error) {
    console.log(error.message);
    throw new Error(error.messge);
    // if (error.message.startsWith("Token has expired")) {
    //   // implement refresh
    //   //   const refreshToken = LocalCache.getRefreshToken();
    //   //   console.log(refreshToken);
    //   //   const newToken = await fetchDataWithToken(refreshToken, "refresh");
    //   //   LocalCache.saveAccessTokenKey(newToken);
    //   //   getOrders(page, searchKeyword);
    // } else
  }
}

export { getOrders };
