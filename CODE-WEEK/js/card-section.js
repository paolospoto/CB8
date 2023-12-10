import { httpGET } from "./http.js";
import { cardGenerator } from "./card-generator.js";

const cardSectionGenerator = (title) => {
  const wrapper = document.createElement("div");
  wrapper.className = "cards-section-wrapper";

  const sectionTitle = document.createElement("h2");
  sectionTitle.textContent = title;

  const cardsWrapper = document.createElement("div");
  cardsWrapper.className = "cards-wrapper";

  wrapper.append(sectionTitle, cardsWrapper);

  return wrapper;
};

const populateSection = async (section, endpoint) => {
  const res = await httpGET(endpoint);
  res.results.forEach((item) =>
    section.children[1].append(cardGenerator(item))
  );
};

export { cardSectionGenerator, populateSection };
