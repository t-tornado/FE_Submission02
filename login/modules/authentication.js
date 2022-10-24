import { HttpClient } from "../../core-modules/index.js";

async function login({ username, password }) {
  return new Promise(async (res, rej) => {
    try {
      const loginToken = await HttpClient.get("/login");
      res(loginToken);
    } catch (error) {
      rej(error);
    }
  });
}

export { login };
