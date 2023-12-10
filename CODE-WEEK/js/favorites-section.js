import { readData } from "./storage.js";
import { favoriteCardGenerator } from "./card-generator.js";

const favoritesSectionGenerator = () => {
  const wrapper = document.createElement("div");
  wrapper.className = "favorites-wrapper";

  const headWrapper = document.createElement("div");
  headWrapper.className = "favorites-head-wrapper";

  const title = document.createElement("h1");
  title.textContent = "FAVORITES";

  const closeSectionButton = document.createElement("button");
  closeSectionButton.textContent = "❌";
  closeSectionButton.addEventListener("click", () => {
    wrapper.remove();
  });

  const cardsWrapper = document.createElement("div");
  cardsWrapper.className = "favorites-cards-wrapper";
  for (let i = 0; i < localStorage.length; i++) {
    const dataKey = localStorage.key(i);
    if (dataKey !== "username") {
      const dataJSON = readData(dataKey);
      const data = JSON.parse(dataJSON);
      cardsWrapper.append(favoriteCardGenerator(data));
    }
  }

  headWrapper.append(title, closeSectionButton);
  wrapper.append(headWrapper, cardsWrapper);

  return wrapper;
};

export { favoritesSectionGenerator };
