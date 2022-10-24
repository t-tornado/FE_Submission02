import { HttpClient } from "../../core-modules/index.js";

async function login({ username, password }) {
  return new Promise(async (res, rej) => {
    try {
      const response = await HttpClient.post("login", { username, password });
      if (response.status !== 200) rej(new Error("Failed to login"));
      if (response.status.toString().startsWith("40"))
        rej(new Error("invalid Credentials"));
      const tokens = response.json();
      res(tokens);
    } catch (error) {
      rej(error);
    }
  });
}

export { login };
