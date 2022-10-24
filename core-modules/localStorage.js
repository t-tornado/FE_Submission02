export class LocalCache {
  static refreshTokenKey = "auth-access";

  static saveRefreshToken(token) {
    const tokenData = JSON.stringify(token);
    window.localStorage.setItem(this.refreshTokenKey, tokenData);
  }

  static getRefreshToken() {
    return JSON.parse(window.localStorage.getItem(this.refreshTokenKey) ?? "");
  }
}
