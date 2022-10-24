export class HttpClient {
  static base = "https://freddy.codesubmit.io";

  static get(url) {
    return fetch({ url: `${this.base}/${url}`, method: "get" });
  }

  static async post(route, params) {
    const url = `${HttpClient.base}/${route}`;
    const body = JSON.stringify(params);
    return await fetch(url, {
      body,
      method: "post",
      headers: { "Content-type": "application/json" },
    });
  }
}
