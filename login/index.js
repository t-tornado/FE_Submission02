import { FormElement } from "./elements/formElement.js";
import { login } from "./modules/index.js";

async function loginUser() {
  try {
    const LoginForm = new FormElement(
      "input[id=login-username]",
      "input[id=login-password]"
    );
    const formIsValid = LoginForm.validateForm();
    if (!formIsValid) return;
    await login(LoginForm.getFormValues());
  } catch (error) {
    console.log(error);
  }
}

window.loginUser = loginUser;
