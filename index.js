import { LocalCache, navigateFromRoot } from "./core-modules/index.js";

function validateUserBeforeLaunchingApp() {
  const accessToken = LocalCache.getAccessToken();
  if (accessToken) {
    navigateFromRoot("dashboard/index.html");
  } else {
    navigateFromRoot("login/index.html");
  }
}

validateUserBeforeLaunchingApp();
