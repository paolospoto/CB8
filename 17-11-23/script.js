const cE = (el) => document.createElement(el);
const aC = (el, className) => el.setAttribute("class", className);
const aT = (el, text) => (el.textContent = text);

const popupGen = () => {
  const popupWrapper = cE("div");
  const buttonWrapper = cE("div");
  const popupText = cE("h1");
  const yesBtn = cE("button");
  const noBtn = cE("button");

  aC(popupWrapper, "popup-wrapper");
  aC(buttonWrapper, "btn-wrapper");
  aC(popupText, "popup-txt");
  aC(yesBtn, "yes-btn");
  aC(noBtn, "no-btn");

  aT(popupText, "Are you over 18 years old?");
  aT(yesBtn, "Yes");
  aT(noBtn, "No");

  buttonWrapper.append(yesBtn, noBtn);
  popupWrapper.append(popupText, buttonWrapper);

  return popupWrapper;
};
const bodyHider = cE("div");

document.body.append(bodyHider);

aC(bodyHider, "body-hider");

setTimeout(() => {
  const popup = popupGen();
  document.body.append(popup);

  const yesBtnEl = document.querySelector(".yes-btn");
  const noBtnEl = document.querySelector(".no-btn");

  const popupEl = document.querySelector(".popup-wrapper");

  yesBtnEl.addEventListener("click", () => {
    popupEl.remove();
    bodyHider.removeAttribute("class", "body-hider");
  });
  noBtnEl.addEventListener(
    "click",
    () => (window.location.href = "http://google.com")
  );
}, 3500);

fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((data) => {
    data.products.forEach((product) => {
      if (product.price < 50) {
        console.log(product.title, "price:", product.price);
      }
    });
  });
