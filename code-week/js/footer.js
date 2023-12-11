const footerGenerator = () => {
  const wrapper = document.createElement("div");
  wrapper.className = "footer-wrapper";

  const footerText = document.createElement("p");
  footerText.textContent = "Visit my GitHub Profile to see more!";

  const gitHubButton = document.createElement("a");
  gitHubButton.href = "https://github.com/paolospoto";

  const gitHubIcon = document.createElement("img");
  gitHubIcon.src = "./media/github.png";
  gitHubIcon.style.width = "20px";

  gitHubButton.append(gitHubIcon);
  wrapper.append(footerText, gitHubButton);

  return wrapper;
};

export { footerGenerator };
