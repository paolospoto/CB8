const createEl = (tag) => document.createElement(tag);
const addClass = (element, className) => element.classList.add(className);
const removeClass = (element, className) => element.classList.remove(className);
const cardGenerator = (mockData) => {
  const cardEl = createEl("div");
  const cardImg = createEl("img");
  const heartBtn = createEl("button");
  const heartImg = createEl("img");
  const cartBtn = createEl("button");
  const cartImg = createEl("img");
  const cardText = createEl("div");
  const cardPrice = createEl("p");
  const cardName = createEl("h2");

  cardImg.src = mockData.imageUrl;
  cardImg.alt = mockData.roboName;
  cardImg.setAttribute("width", "260px");
  heartImg.src = "images/heart.svg";
  heartImg.alt = "favorites";
  heartImg.setAttribute("width", "20px");
  cartImg.src = "images/cart.svg";
  cartImg.alt = "favorites";
  cartImg.setAttribute("width", "20px");
  cardPrice.textContent = mockData.price + "$";
  cardName.textContent = mockData.roboName;
  heartBtn.append(heartImg);
  cartBtn.append(cartImg);
  cardText.append(cardName, cardPrice);
  cardEl.append(heartBtn, cartBtn, cardImg, cardText);
  addClass(cardEl, "card");
  addClass(cardText, "card-text");
  addClass(heartBtn, "heart-btn");
  addClass(cartBtn, "cart-btn");

  heartImg.addEventListener("click", () => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    if (!favorites.includes(mockData.id)) {
      favorites.push(mockData.id);
      localStorage.setItem("favorites", JSON.stringify(favorites));
    }
  });

  cartImg.addEventListener("click", () => {
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    if (!cartItems.includes(mockData.id)) {
      cartItems.push(mockData.id);
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }
  });

  return cardEl;
};

// DATA

const roboMockData = [
  {
    id: 1,
    roboName: "Casi",
    price: 445,
    imageUrl: "https://robohash.org/casi",
  },
  {
    id: 2,
    roboName: "Alex",
    price: 1000,
    imageUrl: "https://robohash.org/alex",
  },
  {
    id: 3,
    roboName: "Pippo",
    price: 30,
    imageUrl: "https://robohash.org/pippo",
  },
  {
    id: 4,
    roboName: "Gigi",
    price: 750,
    imageUrl: "https://robohash.org/gigi",
  },
  {
    id: 5,
    roboName: "R2D2",
    price: 1500,
    imageUrl: "https://robohash.org/r2d2",
  },
  {
    id: 6,
    roboName: "Eva",
    price: 1250,
    imageUrl: "https://robohash.org/eva",
  },
  {
    id: 7,
    roboName: "Tito",
    price: 300,
    imageUrl: "https://robohash.org/tito",
  },
  {
    id: 8,
    roboName: "Zoe",
    price: 500,
    imageUrl: "https://robohash.org/zoe",
  },
  {
    id: 9,
    roboName: "Leo",
    price: 800,
    imageUrl: "https://robohash.org/leo",
  },
  {
    id: 10,
    roboName: "Nina",
    price: 600,
    imageUrl: "https://robohash.org/nina",
  },
];

const monsterMockData = [
  {
    id: 11,
    roboName: "Bella",
    price: 450,
    imageUrl: "https://robohash.org/bella?set=set2",
  },
  {
    id: 12,
    roboName: "Max",
    price: 1100,
    imageUrl: "https://robohash.org/max?set=set2",
  },
  {
    id: 13,
    roboName: "Luna",
    price: 300,
    imageUrl: "https://robohash.org/luna?set=set2",
  },
  {
    id: 14,
    roboName: "Oscar",
    price: 800,
    imageUrl: "https://robohash.org/oscar?set=set2",
  },
  {
    id: 15,
    roboName: "Zara",
    price: 1250,
    imageUrl: "https://robohash.org/zara?set=set2",
  },
  {
    id: 16,
    roboName: "Charlie",
    price: 950,
    imageUrl: "https://robohash.org/charlie?set=set2",
  },
  {
    id: 17,
    roboName: "Milo",
    price: 500,
    imageUrl: "https://robohash.org/milo?set=set2",
  },
  {
    id: 18,
    roboName: "Ruby",
    price: 700,
    imageUrl: "https://robohash.org/ruby?set=set2",
  },
  {
    id: 19,
    roboName: "Daisy",
    price: 400,
    imageUrl: "https://robohash.org/daisy?set=set2",
  },
  {
    id: 20,
    roboName: "Jack",
    price: 650,
    imageUrl: "https://robohash.org/jack?set=set2",
  },
];

const miniRoboMockData = [
  {
    id: 21,
    roboName: "Ivy",
    price: 520,
    imageUrl: "https://robohash.org/ivy?set=set3",
  },
  {
    id: 22,
    roboName: "Gus",
    price: 940,
    imageUrl: "https://robohash.org/gus?set=set3",
  },
  {
    id: 23,
    roboName: "Theo",
    price: 330,
    imageUrl: "https://robohash.org/theo?set=set3",
  },
  {
    id: 24,
    roboName: "Nora",
    price: 780,
    imageUrl: "https://robohash.org/nora?set=set3",
  },
  {
    id: 25,
    roboName: "Finn",
    price: 1500,
    imageUrl: "https://robohash.org/finn?set=set3",
  },
  {
    id: 26,
    roboName: "Ella",
    price: 870,
    imageUrl: "https://robohash.org/ella?set=set3",
  },
  {
    id: 27,
    roboName: "Jude",
    price: 430,
    imageUrl: "https://robohash.org/jude?set=set3",
  },
  {
    id: 28,
    roboName: "Mae",
    price: 610,
    imageUrl: "https://robohash.org/mae?set=set3",
  },
  {
    id: 29,
    roboName: "Hugo",
    price: 490,
    imageUrl: "https://robohash.org/hugo?set=set3",
  },
  {
    id: 30,
    roboName: "Zoe",
    price: 720,
    imageUrl: "https://robohash.org/zoe?set=set3",
  },
];

const catMockData = [
  {
    id: 31,
    roboName: "Stella",
    price: 530,
    imageUrl: "https://robohash.org/stella?set=set4",
  },
  {
    id: 32,
    roboName: "Arthur",
    price: 920,
    imageUrl: "https://robohash.org/arthur?set=set4",
  },
  {
    id: 33,
    roboName: "Grace",
    price: 350,
    imageUrl: "https://robohash.org/grace?set=set4",
  },
  {
    id: 34,
    roboName: "Felix",
    price: 800,
    imageUrl: "https://robohash.org/felix?set=set4",
  },
  {
    id: 35,
    roboName: "Lucy",
    price: 1470,
    imageUrl: "https://robohash.org/lucy?set=set4",
  },
  {
    id: 36,
    roboName: "Owen",
    price: 890,
    imageUrl: "https://robohash.org/owen?set=set4",
  },
  {
    id: 37,
    roboName: "Mia",
    price: 410,
    imageUrl: "https://robohash.org/mia?set=set4",
  },
  {
    id: 38,
    roboName: "Liam",
    price: 600,
    imageUrl: "https://robohash.org/liam?set=set4",
  },
  {
    id: 39,
    roboName: "Sophie",
    price: 480,
    imageUrl: "https://robohash.org/sophie?set=set4",
  },
  {
    id: 40,
    roboName: "Ethan",
    price: 730,
    imageUrl: "https://robohash.org/ethan?set=set4",
  },
];

// CREAZIONE ELEMENTI

// header
const headerSection = createEl("header");

const headerTitle = createEl("h1");

const headerList = createEl("ul");
const firstListEl = createEl("li");
const secondListEl = createEl("li");
const thirdListEl = createEl("li");
const forthListEl = createEl("li");

const homeIconEl = createEl("img");
const cartIconEl = createEl("img");
const favoritesIconEl = createEl("img");
const clearFavoritesIconEl = createEl("img");
// end header

// menu
const menuSection = createEl("nav");
const robotMenuEl = createEl("div");
const monsterMenuEl = createEl("div");
const miniRobotMenuEl = createEl("div");
const catMenuEl = createEl("div");

const robotIconEl = createEl("img");
const monsterIconEl = createEl("img");
const miniRobotIconEl = createEl("img");
const catIconEl = createEl("img");

const robotTextEl = createEl("p");
const monsterTextEl = createEl("p");
const miniRobotTextEl = createEl("p");
const catTextEl = createEl("p");
// end menu

// card section

const cardSection = createEl("section");
const robotSection = createEl("section");
const monsterSection = createEl("section");
const miniRobotSection = createEl("section");
const catSection = createEl("section");

// end card section

// favorites section

const favoritesSection = createEl("section");
const favoritesCards = createEl("div");

// cart section

const cartSection = createEl("section");
const cartCards = createEl("div");

// APPEND

//header
firstListEl.append(homeIconEl);
secondListEl.append(cartIconEl);
thirdListEl.append(favoritesIconEl);
forthListEl.append(clearFavoritesIconEl);
headerList.append(firstListEl, secondListEl, thirdListEl, forthListEl);
headerSection.append(headerTitle, headerList);
document.body.append(headerSection);
//end header

//menu
robotMenuEl.append(robotIconEl, robotTextEl);
monsterMenuEl.append(monsterIconEl, monsterTextEl);
miniRobotMenuEl.append(miniRobotIconEl, miniRobotTextEl);
catMenuEl.append(catIconEl, catTextEl);

menuSection.append(robotMenuEl, monsterMenuEl, miniRobotMenuEl, catMenuEl);

document.body.append(menuSection);
// end menu

// card section

roboMockData.map((item) => robotSection.append(cardGenerator(item)));
monsterMockData.map((item) => monsterSection.append(cardGenerator(item)));
miniRoboMockData.map((item) => miniRobotSection.append(cardGenerator(item)));
catMockData.map((item) => catSection.append(cardGenerator(item)));
cardSection.append(robotSection, monsterSection, miniRobotSection, catSection);
document.body.append(cardSection);
// end card section

// favorites section

favoritesSection.append(favoritesCards);
document.body.append(favoritesSection);

// cart section

cartSection.append(cartCards);
document.body.append(cartSection);

// CLASSES

// header
addClass(headerSection, "header-wrapper");
addClass(headerList, "header-list-wrapper");
addClass(forthListEl, "hide-section");
//end header

// menu
addClass(menuSection, "menu-wrapper");
addClass(robotMenuEl, "menu-el-wrapper");
addClass(monsterMenuEl, "menu-el-wrapper");
addClass(miniRobotMenuEl, "menu-el-wrapper");
addClass(catMenuEl, "menu-el-wrapper");
addClass(robotMenuEl, "active");

// card section

// addClass(cardSection, "card-wrapper");
addClass(robotSection, "show-section");
addClass(monsterSection, "hide-section");
addClass(miniRobotSection, "hide-section");
addClass(catSection, "hide-section");

// favorites section

addClass(favoritesSection, "favorites-wrapper");
addClass(favoritesSection, "hide-section");
addClass(favoritesCards, "favorites-cards-wrapper");

// cart section

addClass(cartSection, "cart-wrapper");
addClass(cartSection, "hide-section");
addClass(cartCards, "cart-cards-wrapper");

// ATTRIBUTES

// header
homeIconEl.setAttribute("src", "images/home.svg");
homeIconEl.setAttribute("width", "20px");
cartIconEl.setAttribute("src", "images/cart.svg");
cartIconEl.setAttribute("width", "20px");
favoritesIconEl.setAttribute("src", "images/heart.svg");
favoritesIconEl.setAttribute("width", "20px");
clearFavoritesIconEl.setAttribute("src", "images/trash.svg");
clearFavoritesIconEl.setAttribute("width", "20px");
// end header

// menu
robotIconEl.setAttribute("src", "images/robot.svg");
robotIconEl.setAttribute("width", "20px");
monsterIconEl.setAttribute("src", "images/monster.svg");
monsterIconEl.setAttribute("width", "20px");
miniRobotIconEl.setAttribute("src", "images/miniRobot.svg");
miniRobotIconEl.setAttribute("width", "20px");
catIconEl.setAttribute("src", "images/cat.svg");
catIconEl.setAttribute("width", "20px");
// TEXT CONTENT

// header
headerTitle.textContent = "Robots and more";
// end header

// menu

robotTextEl.textContent = "ROBOTS";
monsterTextEl.textContent = "MONSTERS";
miniRobotTextEl.textContent = "HEADS";
catTextEl.textContent = "CATS";

// end menu

// favorites section

// GESTIONE EVENTI

// header

homeIconEl.addEventListener("click", () => {
  [cardSection, menuSection].forEach((el) => {
    removeClass(el, "hide-section");
  });
  addClass(favoritesSection, "hide-section");
  addClass(cartSection, "hide-section");
  addClass(forthListEl, "hide-section");
  removeClass(thirdListEl, "hide-section");
  removeClass(secondListEl, "hide-section");
  headerTitle.textContent = "Robot and more";
});

favoritesIconEl.addEventListener("click", () => {
  favoritesCards.innerHTML = "";

  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

  favorites.forEach((favoriteId) => {
    const favoriteData = [
      ...roboMockData,
      ...monsterMockData,
      ...miniRoboMockData,
      ...catMockData,
    ].find((item) => item.id === favoriteId);
    if (favoriteData) {
      favoritesCards.appendChild(cardGenerator(favoriteData));
    }
  });

  [cardSection, menuSection, cartSection].forEach((el) => {
    addClass(el, "hide-section");
  });
  removeClass(favoritesSection, "hide-section");
  removeClass(forthListEl, "hide-section");
  addClass(thirdListEl, "hide-section");
  headerTitle.textContent = "Your Favorites";
});

clearFavoritesIconEl.addEventListener("click", () => {
  addClass(favoritesSection, "hide-section");
  localStorage.clear();
});

cartIconEl.addEventListener("click", () => {
  cartCards.innerHTML = "";

  const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

  cartItems.forEach((cartId) => {
    const cartData = [
      ...roboMockData,
      ...monsterMockData,
      ...miniRoboMockData,
      ...catMockData,
    ].find((item) => item.id === cartId);
    if (cartData) {
      cartCards.appendChild(cardGenerator(cartData));
    }
  });

  [cardSection, menuSection, favoritesSection].forEach((el) => {
    addClass(el, "hide-section");
  });
  removeClass(cartSection, "hide-section");
  removeClass(forthListEl, "hide-section");
  addClass(secondListEl, "hide-section");

  const cartArr = JSON.parse(localStorage.getItem("cartItems")) || [];

  const allItems = [
    ...roboMockData,
    ...monsterMockData,
    ...miniRoboMockData,
    ...catMockData,
  ];

  let totalPrice = 0;

  cartArr.forEach((itemId) => {
    const item = allItems.find((item) => item.id === itemId);

    if (item) {
      totalPrice += item.price;
    }
  });

  headerTitle.textContent = "Total: $" + totalPrice;
});

clearFavoritesIconEl.addEventListener("click", () => {
  localStorage.clear();
  addClass(favoritesSection, "hide-section");
  addClass(cartSection, "hide-section");
  favoritesCards.innerHTML = "";
  cartCards.innerHTML = "";
});

// menu

const removeActive = () => {
  [robotMenuEl, monsterMenuEl, miniRobotMenuEl, catMenuEl].forEach((el) => {
    removeClass(el, "active");
  });
};

robotMenuEl.addEventListener("click", () => {
  removeActive();
  addClass(robotMenuEl, "active");
});

monsterMenuEl.addEventListener("click", () => {
  removeActive();
  addClass(monsterMenuEl, "active");
});

miniRobotMenuEl.addEventListener("click", () => {
  removeActive();
  addClass(miniRobotMenuEl, "active");
});

catMenuEl.addEventListener("click", () => {
  removeActive();
  addClass(catMenuEl, "active");
});

const addHider = () => {
  [robotSection, monsterSection, miniRobotSection, catSection].forEach((el) => {
    addClass(el, "hide-section");
  });
};

robotMenuEl.addEventListener("click", () => {
  addHider();
  removeClass(robotSection, "hide-section");
  addClass(robotSection, "show-section");
});

monsterMenuEl.addEventListener("click", () => {
  addHider();
  removeClass(monsterSection, "hide-section");

  addClass(monsterSection, "show-section");
});

miniRobotMenuEl.addEventListener("click", () => {
  addHider();
  removeClass(miniRobotSection, "hide-section");

  addClass(miniRobotSection, "show-section");
});

catMenuEl.addEventListener("click", () => {
  addHider();
  removeClass(catSection, "hide-section");

  addClass(catSection, "show-section");
});

// end menu section

const footer = createEl("footer");
footer.textContent = "© 2023";
document.body.append(footer);
