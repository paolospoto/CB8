import { readData } from "./storage.js";
import { authenticationCheck } from "./authentication.js";
import { favoritesSectionGenerator } from "./favorites-section.js";

const navMenuGenerator = () => {
  const wrapper = document.createElement("div");
  wrapper.className = "nav-menu-wrapper";

  const favoritesSectionButton = document.createElement("button");
  favoritesSectionButton.className = "open-favorites-button";
  favoritesSectionButton.addEventListener("click", () => {
    const favoritesSection = favoritesSectionGenerator();
    document.body.append(favoritesSection);
  });

  const favoritesSectionIcon = document.createElement("img");
  favoritesSectionIcon.src = "./media/star.png";
  favoritesSectionIcon.style.width = "30px";

  const username = document.createElement("h3");
  if (authenticationCheck()) {
    const usernameValue = readData("username");
    username.textContent = `Welcome, ${usernameValue}`;
  } else {
    username.textContent = "";
  }

  favoritesSectionButton.append(favoritesSectionIcon);
  wrapper.append(favoritesSectionButton, username);

  return wrapper;
};

export { navMenuGenerator };
