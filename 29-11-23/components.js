// utility

const cE = (el) => document.createElement(el);

import { httpGET } from "./http.js";

// end utility

const searchElGen = () => {
  const container = cE("div");
  const searchImg = cE("img");
  const searchInput = cE("input");

  container.className = "search";

  searchImg.src =
    "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/227_Netflix_logo-512.png";

  searchImg.alt = "netflix-clone-logo";

  searchInput.type = "text";
  searchInput.placeholder = "Search...";

  container.append(searchImg, searchInput);

  return container;
};

const linksElGen = () => {
  const container = cE("div");
  const linksList = cE("ul");
  const link1 = cE("li");
  const link2 = cE("li");
  const labelEl = cE("label");
  const selectEl = cE("select");
  const optionEl = cE("option");

  link1.textContent = "TV Shows";
  link2.textContent = "Movies";
  labelEl.textContent = "Categories";

  container.className = "links";
  linksList.className = "links-list";
  labelEl.for = "categories";
  selectEl.name = "categories";
  selectEl.id = "categories";

  selectEl.append(optionEl);
  linksList.append(link1, link2, labelEl, selectEl);
  container.append(linksList);

  return container;
};

const modalDivGen = (obj) => {
  const container = cE("div");
  const titleEl = cE("h1");
  const descriptionEl = cE("p");
  const imgEl = cE("img");
  const btnEl = cE("button");

  container.className = "modal-wrapper";
  imgEl.className = "modal-img";
  btnEl.className = "modal-btn";

  imgEl.src = obj.imageUrl;
  titleEl.textContent = obj.titleEl;
  descriptionEl.textContent = obj.descriptionEl;
  btnEl.textContent = "CLOSE MODAL";

  container.append(titleEl, descriptionEl, imgEl, btnEl);

  return container;
};

const modalElGenerator = httpGET().then((el) => modalDivGen(el));

export { searchElGen, linksElGen, modalDivGen, modalElGenerator };
