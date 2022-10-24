export class HttpClient {
  static base = "https://freddy.codesubmit.io";

  static get(url) {
    return fetch({ url: `${this.base}/${url}`, method: "get" });
  }

  static post(url) {
    return fetch({ url: `${this.base}/${url}`, method: "post" });
  }
}
