import { HttpClient } from "../../core-modules/index.js";

async function login({ username, password }) {
  return new Promise(async (res, rej) => {
    try {
      const response = await HttpClient.post("login", { username, password });
      if (response.status !== 200) rej(new Error("Failed to login"));
      const tokens = response.json();
      res(tokens);
    } catch (error) {
      rej(error);
    }
  });
}

export { login };
