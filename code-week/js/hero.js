const heroGenerator = () => {
  const wrapper = document.createElement("div");
  wrapper.className = "hero-wrapper";

  const heroImage = document.createElement("img");
  heroImage.className = "hero-image";
  heroImage.id = "hero-image";

  if (window.innerWidth <= 768) {
    heroImage.src =
      "https://image.tmdb.org/t/p/original/g9aDZSqH5KmsHbMurhni5d2wq6q.jpg";
  } else {
    heroImage.src =
      "https://image.tmdb.org/t/p/original//dqK9Hag1054tghRQSqLSfrkvQnA.jpg";
  }

  const overlay = document.createElement("div");
  overlay.className = "hero-overlay";

  const logoTitle = document.createElement("img");
  logoTitle.src = "../media/logo.png";
  logoTitle.alt = "logo-title";
  logoTitle.style.width = "200px";

  const heroButton = document.createElement("a");
  heroButton.className = "hero-button";
  heroButton.href = "#catalogue";
  heroButton.textContent = "STREAM NOW";

  overlay.append(logoTitle, heroButton);

  wrapper.append(heroImage, overlay);

  return wrapper;
};

export { heroGenerator };
