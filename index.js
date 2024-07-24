const button = document.getElementById("changeColorTextButton");
button.addEventListener("click", () => {
  const greeting = document.getElementById("text");
  greeting.classList.toggle("redColor");
});
