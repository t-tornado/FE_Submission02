export class LocalCache {
  static #refreshTokenKey = "auth-refresh-key";
  static #accessTokenKey = "auth-access-key";

  static #saveTokenWithKey(key, token) {
    const tokenData = JSON.stringify(token);
    window.localStorage.setItem(key, tokenData);
  }

  static #getTokenWithKey(key) {
    const token = window.localStorage.getItem(key);
    return JSON.parse(token ?? "");
  }

  static saveRefreshToken(token) {
    LocalCache.#saveTokenWithKey(LocalCache.#refreshTokenKey, token);
  }

  static saveAccessTokenKey(token) {
    LocalCache.#saveTokenWithKey(LocalCache.#accessTokenKey, token);
  }

  static getRefreshToken() {
    return LocalCache.#getTokenWithKey(LocalCache.#refreshTokenKey);
  }

  static getAccessToken() {
    return LocalCache.#getTokenWithKey(LocalCache.#accessTokenKey);
  }
}
