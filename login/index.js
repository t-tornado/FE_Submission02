import { LocalCache, navigateFromRoot } from "../core-modules/index.js";
import { FormContainer } from "./elements/formContainer.js";
import { FormElement } from "./elements/formElement.js";
import { login } from "./modules/index.js";

async function loginUser() {
  const LoginFormContainer = new FormContainer("form.login_form");
  const LoginForm = new FormElement(
    "input[id=login-username]",
    "input[id=login-password]",
    "form button"
  );
  try {
    const formIsValid = LoginForm.validateForm();
    if (!formIsValid) return;
    LoginFormContainer.removeElement("span.error_message");
    LoginFormContainer.appendElement("<div class='loader'></div>");
    const tokens = await login(LoginForm.getFormValues());
    LocalCache.saveAccessTokenKey(tokens?.access_token);
    LocalCache.saveRefreshToken(tokens?.refresh_token);
    navigateFromRoot("dashboard/index.html");
  } catch (error) {
    LoginFormContainer.updateClassName("login_form");
    LoginFormContainer.removeElement("div.loader");
    LoginFormContainer.appendElement(
      `<span class="error_message" >${error.message} </span>`
    );
  }
}

function proceedToLoginUser() {
  const accessToken = LocalCache.getAccessToken();
  if (accessToken) {
    navigateFromRoot("dashboard/index.html");
  }
}

window.loginUser = loginUser;
proceedToLoginUser();
