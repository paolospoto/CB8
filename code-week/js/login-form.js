import { createData } from "./storage.js";

const loginFormGenerator = () => {
  const wrapper = document.createElement("div");
  wrapper.className = "form-wrapper";

  const title = document.createElement("h1");
  title.textContent = "Please enter your credentials ";

  const usernameInput = document.createElement("input");
  usernameInput.type = "text";
  usernameInput.placeholder = "Enter your username";

  const passwordInput = document.createElement("input");
  passwordInput.type = "password";
  passwordInput.placeholder = "Enter your password";

  const submitButton = document.createElement("button");
  submitButton.textContent = "SUBMIT";
  submitButton.addEventListener("click", () => {
    const usernameValue = usernameInput.value;
    createData("username", usernameValue);

    location.reload();

    wrapper.remove();
  });

  const logoTitle = document.createElement("img");
  logoTitle.src = "../media/logo.png";
  logoTitle.alt = "logo-title";
  logoTitle.style.width = "200px";

  wrapper.append(title, usernameInput, passwordInput, submitButton, logoTitle);

  return wrapper;
};

export { loginFormGenerator };
