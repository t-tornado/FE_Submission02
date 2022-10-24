export class HttpClient {
  static base = "https://freddy.codesubmit.io";

  static async get(route, params) {
    const url = `${HttpClient.base}/${route}`;
    return await fetch(url, { method: "get", ...params });
  }

  static async post(route, params) {
    const url = `${HttpClient.base}/${route}`;
    const body = JSON.stringify(params.body);
    delete params["body"];
    return await fetch(url, {
      body,
      method: "post",
      ...params,
    });
  }
}
