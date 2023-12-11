import { createData, readData, deleteData } from "./storage.js";
import { authenticationCheck } from "./authentication.js";

const cardGenerator = (obj) => {
  const wrapper = document.createElement("div");
  wrapper.className = "card-wrapper";

  wrapper.addEventListener("click", () => {
    if (!overlay.contains(seeMoreButton)) {
      overlay.append(seeMoreButton);
    } else {
      seeMoreButton.remove();
    }

    overlay.classList.toggle("active");
  });

  const filmImage = document.createElement("img");
  filmImage.src = `https://image.tmdb.org/t/p/original${obj.poster_path}`;
  filmImage.style.width = "100px";

  const overlay = document.createElement("div");
  overlay.className = "card-overlay";

  const title = document.createElement("h5");
  title.textContent = obj.title;

  const seeMoreButton = document.createElement("a");
  seeMoreButton.textContent = "INFO";
  seeMoreButton.href = "./movie-detail.html";
  seeMoreButton.addEventListener("click", () => {
    // console.log(obj);
    createData("title", obj.title);
    createData("description", obj.overview);
    createData("release", obj.release_date);
    createData("vote", obj.vote_average);
    createData("image", obj.backdrop_path);
  });

  const addToFavoritesButton = document.createElement("button");
  addToFavoritesButton.className = "add-favorite-button";

  addToFavoritesButton.addEventListener("click", () => {
    const objString = JSON.stringify(obj);
    if (!readData(obj.id)) {
      createData(obj.id, objString);
      addToFavoritesButton.style.backgroundImage = `url("./media/star-full.png")`;
    } else {
      deleteData(obj.id);
      addToFavoritesButton.style.backgroundImage = `url("./media/star.png")`;
    }
  });

  if (authenticationCheck()) {
    overlay.append(title, addToFavoritesButton);
  } else {
    overlay.append(title);
  }

  overlay.append(title);
  wrapper.append(overlay, filmImage);

  return wrapper;
};

const favoriteCardGenerator = (obj) => {
  const wrapper = document.createElement("div");
  wrapper.className = "favorite-card-wrapper";

  const filmImage = document.createElement("img");
  filmImage.src = `https://image.tmdb.org/t/p/original${obj.poster_path}`;
  filmImage.style.width = "100px";

  const seeMoreButton = document.createElement("a");
  seeMoreButton.textContent = "INFO";
  seeMoreButton.href = "./movie-detail.html";
  seeMoreButton.addEventListener("click", () => {
    // console.log(obj);
    createData("title", obj.title);
    createData("description", obj.overview);
    createData("release", obj.release_date);
    createData("vote", obj.vote_average);
    createData("image", obj.backdrop_path);
  });

  wrapper.append(filmImage, seeMoreButton);

  return wrapper;
};

export { cardGenerator, favoriteCardGenerator };
