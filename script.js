window.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("projectButtonContainer");

  const button = document.createElement("button");
  button.textContent = "Launch Project";

  button.addEventListener("click", function () {
    const viewLink = document.getElementById("view-link");
    viewLink.innerHTML = `<a href="https://michaelfuchaka.github.io/my-personal-website/" target="_blank">View Web</a>`;
  });

  container.appendChild(button);
});

    