const createEl = (tag) => document.createElement(tag);

// CREO GLI ELEMENTI HTML
const heroSection = createEl("div");
const heroTitle = createEl("h1");
const heroDescription = createEl("p");
const hideBtn = createEl("button");
const btnContainer = createEl("div");
const btnTitle = createEl("h1");
const showBtn = createEl("button");

// APPENDO GLI ELEMENTI
heroSection.append(heroTitle, heroDescription, hideBtn);
document.body.append(heroSection);
btnContainer.append(btnTitle, showBtn);
document.body.append(btnContainer);

// CREO I CONTENUTI TESTUALI
heroTitle.textContent = "Do you want to know the truth about the universe?";
heroDescription.textContent = "Just follow me! Click the button below...";
hideBtn.textContent = "CLICK HERE!";
btnTitle.textContent = "Got you..";
showBtn.textContent = "TRY AGAIN";

// ATTRIBUISCO LE CLASSI
heroSection.setAttribute("class", "hero-flexer");
btnContainer.setAttribute("class", "hider");

// ESERCIZIO 2

// AGGIUNGO LE FUNZIONALITà AI DUE BOTTONI
hideBtn.addEventListener("click", () => {
  heroSection.setAttribute("class", "hider");
  btnContainer.setAttribute("class", "button-flexer");
});

showBtn.addEventListener("click", () => {
  heroSection.setAttribute("class", "hero-flexer");
  btnContainer.setAttribute("class", "hider");
});

// ESERCIZIO 3

// CREO LA SEZIONE GALLERY

const gallery = createEl("div");
gallery.setAttribute("class", "gallery-flexer");
document.body.append(gallery);

// CREO UNA SERIE DI OGGETTI CHE SARANNO USATI COME ARGOMENTO DELLA FUNZIONE IMAGEGENERATOR

const firstImg = {
  id: 1,
  url: "https://picsum.photos/400/400?random=1",
  alternativeTest: "First Image",
  class: "images",
};
const secondImg = {
  id: 2,
  url: "https://picsum.photos/400/400?random=2",
  alternativeTest: "Second Image",
  class: "images",
};
const thirdImg = {
  id: 3,
  url: "https://picsum.photos/400/400?random=3",
  alternativeTest: "Third Image",
  class: "images",
};

// DEFINISCO LA FUNZIONE

const imageGenerator = (imgObj) => {
  const image = createEl("img");
  image.setAttribute("id", imgObj.id);
  image.setAttribute("src", imgObj.url);
  image.setAttribute("alt", imgObj.alternativeTest);
  image.setAttribute("class", imgObj.class);
  //   image.setAttribute("width", "400px");
  image.setAttribute("height", "auto");

  return image;
};

// APPENDO LE IMMAGINI GENERATE

gallery.append(imageGenerator(firstImg));
gallery.append(imageGenerator(secondImg));
gallery.append(imageGenerator(thirdImg));

// ESERCIZIO 4

// CREO UNA NUOVA SEZIONE GALLERIA

const secondGallery = createEl("div");
document.body.append(secondGallery);
secondGallery.setAttribute("class", "gallery-flexer2");

// CREO UN'ARRAY COMPOSTA DA OGGETTI

const imageList = [
  {
    id: 1,
    url: "https://picsum.photos/300/300?random=4",
    alternativeTest: "First Image",
    class: "images",
  },
  {
    id: 2,
    url: "https://picsum.photos/300/300?random=45",
    alternativeTest: "Second Image",
    class: "images",
  },
  {
    id: 3,
    url: "https://picsum.photos/300/300?random=6",
    alternativeTest: "Third Image",
    class: "images",
  },
  {
    id: 4,
    url: "https://picsum.photos/300/300?random=7",
    alternativeTest: "Fourth Image",
    class: "images",
  },
  {
    id: 5,
    url: "https://picsum.photos/300/300?random=8",
    alternativeTest: "Fifth Image",
    class: "images",
  },
  {
    id: 6,
    url: "https://picsum.photos/300/300?random=9",
    alternativeTest: "Sixth Image",
    class: "images",
  },
  {
    id: 7,
    url: "https://picsum.photos/300/300?random=10",
    alternativeTest: "Seventh Image",
    class: "images",
  },
  {
    id: 8,
    url: "https://picsum.photos/300/300?random=11",
    alternativeTest: "Eighth Image",
    class: "images",
  },
];

// PER OGNI OGGETTO PRESENTE NELL'ARRAY VIENE INVOCATA IMAGEGENERATOR PRENDENDO COME ARGOMENTO L'OGGETTO STESSO

imageList.forEach((image) => {
  const otherImages = imageGenerator(image);
  secondGallery.append(otherImages);
});
