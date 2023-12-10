import { deleteData, readData } from "./js/storage.js";

const title = readData("title");
const description = readData("description");
const release = readData("release");
const vote = readData("vote");
const image = readData("image");

const filmDetailGenerator = () => {
  const wrapper = document.createElement("div");
  wrapper.className = "movie-detail-wrapper";

  const movieImage = document.createElement("img");
  movieImage.src = `https://image.tmdb.org/t/p/original${image}`;

  const textWrapper = document.createElement("div");
  textWrapper.className = "movie-description-wrapper";

  const movieTitle = document.createElement("h1");
  movieTitle.textContent = title;

  const movieDescription = document.createElement("p");
  movieDescription.textContent = description;

  const trailer = document.createElement("iframe");
  trailer.src = "https://www.youtube.com/embed/Z8FBnz6USIM";
  trailer.frameborder = "0";
  trailer.style.width = "100%";

  const infoWrapper = document.createElement("div");
  infoWrapper.className = "movie-info-wrapper";

  const releaseDate = document.createElement("h3");
  releaseDate.textContent = release;

  const movieVote = document.createElement("h3");
  movieVote.textContent = `🔺${vote}`;

  const backButton = document.createElement("a");
  backButton.textContent = "HOME";
  backButton.href = "./index.html";
  backButton.addEventListener("click", () => {
    deleteData("title");
    deleteData("description");
    deleteData("release");
    deleteData("vote");
    deleteData("image");
  });

  textWrapper.append(movieTitle, movieDescription);
  infoWrapper.append(releaseDate, movieVote, backButton);
  wrapper.append(trailer, textWrapper, movieImage, infoWrapper);

  return wrapper;
};

const filmDetail = filmDetailGenerator();

document.body.append(filmDetail);
