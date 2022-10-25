import { HttpClient } from "./http.js";

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

export { fetchDataWithToken };
