import { LocalCache, navigateFromRoot } from "../core-modules/index.js";

function logoutFromApp() {
  LocalCache.reset();
  navigateFromRoot("");
}

export { logoutFromApp };
