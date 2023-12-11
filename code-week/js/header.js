import { clearData } from "./storage.js";
import { loginFormGenerator } from "./login-form.js";
import { authenticationCheck } from "./authentication.js";

const headerGenerator = () => {
  const wrapper = document.createElement("div");
  wrapper.className = "header-wrapper";

  const logo = document.createElement("img");
  logo.src = "./media/logo-icon.png";
  logo.alt = "logo";
  logo.style.width = "50px";

  const loginButton = document.createElement("button");
  loginButton.textContent = "LOGIN";
  loginButton.addEventListener("click", () => {
    const loginForm = loginFormGenerator();
    document.body.append(loginForm);

    loginButton.remove();
    wrapper.append(logoutButton);
  });

  const logoutButton = document.createElement("button");
  logoutButton.textContent = "LOGOUT";
  logoutButton.addEventListener("click", () => {
    clearData();
    logoutButton.remove();
    wrapper.append(loginButton);
    location.reload();
  });

  wrapper.append(logo);

  if (authenticationCheck()) {
    wrapper.append(logoutButton);
  } else {
    wrapper.append(loginButton);
  }

  return wrapper;
};

export { headerGenerator };
