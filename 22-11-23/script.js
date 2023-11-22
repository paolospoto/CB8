const cE = (el) => document.createElement(el);
// END UTILITY

// ESERCIZIO 1
const getImageList = async () => {
  let res = await fetch("https://picsum.photos/v2/list");
  let data = await res.json();

  return data;
};

const printImagesUrl = async () => {
  let data = await getImageList();
  console.log("Lista Url Immagini: ");
  data.forEach((obj) => console.log(obj.download_url));
};

printImagesUrl();

// ESERCIZIO 2 / AVANZATO

const cardGenerator = (obj) => {
  const wrapperEl = cE("div");
  const imgEl = cE("img");
  const textEl = cE("h3");

  wrapperEl.className = "card-wrapper";
  imgEl.className = "card-img";
  textEl.className = "card-text";

  imgEl.src = obj.download_url;
  textEl.textContent = `${obj.id}: ${obj.author}`;

  wrapperEl.append(imgEl, textEl);

  return wrapperEl;
};

const cards = cE("div");
cards.className = "cards";
document.body.append(cards);

const cardAppender = async () => {
  const data = await getImageList();
  data.forEach((obj) => {
    const card = cardGenerator(obj);
    cards.append(card);
  });
};

cardAppender();
