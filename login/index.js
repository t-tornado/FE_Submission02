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
    const tokens = await login(LoginForm.getFormValues());
    console.log(tokens);
  } catch (error) {
    console.log(error.message);
  }
}

window.loginUser = loginUser;
