function togglemode() {
  const html = document.documentElement;
  html.classList.toggle("light");

  const img = document.querySelector("#profile img");

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/assets/avatar-light.png");
    img.setAttribute(
      "alt",
      "foto de Mayk Brito sorrindo, usando oculos escuros e blusa preta, sem barba, e fundo azul."
    );
  } else {
    img.setAttribute("src", "./assets/assets/avatar.png");
    img.setAttribute(
      "alt",
      "foto de Mayk Brito sorrindo, usando óculos e camisa preta, barba, e fundo amarelo."
    );
  }
}
