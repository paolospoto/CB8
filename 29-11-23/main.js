import { searchElGen, linksElGen, modalElGenerator } from "./components.js";
const nav = document.querySelector(".navbar");
const modalSection = document.querySelector(".modal");

nav.append(searchElGen(), linksElGen());

modalElGenerator.then((el) => modalSection.append(el));

setTimeout(function () {
  const btnEl = document.querySelector(".modal-btn");
  btnEl.addEventListener("click", () => {
    modalSection.remove();
  });
}, 1000);
