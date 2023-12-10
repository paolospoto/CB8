import { authenticationCheck } from "./js/authentication.js";

import { headerGenerator } from "./js/header.js";
import { navMenuGenerator } from "./js/nav-menu.js";
import { heroGenerator } from "./js/hero.js";
import { cardSectionGenerator, populateSection } from "./js/card-section.js";
import { footerGenerator } from "./js/footer.js";

const headerElement = headerGenerator();
document.body.append(headerElement);
if (authenticationCheck()) {
  const navMenuElement = navMenuGenerator();
  document.body.append(navMenuElement);
}

const heroElement = heroGenerator();
document.body.append(heroElement);

const mobileImagesData = [
  "https://image.tmdb.org/t/p/original//aQPeznSu7XDTrrdCtT5eLiu52Yu.jpg",
  "https://image.tmdb.org/t/p/original//5gzzkR7y3hnY8AD1wXjCnVlHba5.jpg",
  "https://image.tmdb.org/t/p/original//fFXkAlMH2iQrNknv4eq7LGTkcti.jpg",
  "https://image.tmdb.org/t/p/original//7BpNtNfxuocYEVREzVMO75hso1l.jpg",
  "https://image.tmdb.org/t/p/original//rBuE76iVZObavtfWYJqvMdJMBnM.jpg",
];

const desktopImagesData = [
  "https://image.tmdb.org/t/p/original//dZbLqRjjiiNCpTYzhzL2NMvz4J0.jpg",
  "https://image.tmdb.org/t/p/original///pLm9j7o5InoWaG2tlaQABYR2cAx.jpg",
  "https://image.tmdb.org/t/p/original//azD31DjpV3PJfjF3h72LVw2WCSD.jpg",
  "https://image.tmdb.org/t/p/original//t5zCBSB5xMDKcDqe91qahCOUYVV.jpg",
  "https://image.tmdb.org/t/p/original//1UxeCdDveWRgcOBsHIezHmnwT4P.jpg",
];

let index = 0;

const updateImage = (array) => {
  index = (index + 1) % array.length;
  const heroImage = document.getElementById("hero-image");

  heroImage.src = array[index];
};

if (window.innerWidth <= 768) {
  setInterval(() => updateImage(mobileImagesData), 5000);
} else {
  setInterval(() => updateImage(desktopImagesData), 5000);
}

const thrillerSection = cardSectionGenerator("Thriller");
const horrorSection = cardSectionGenerator("Horror");
const crimeSection = cardSectionGenerator("Crime");
thrillerSection.id = "catalogue";

document.body.append(thrillerSection, horrorSection, crimeSection);

populateSection(thrillerSection, "53");
populateSection(horrorSection, "27");
populateSection(crimeSection, "80");

const footerElement = footerGenerator();
document.body.append(footerElement);
