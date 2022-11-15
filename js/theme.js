const body = document.body
const themeButton = document.querySelector('.theme-button');

themeButton.addEventListener('click', () => {
  body.classList.toggle("light")
  if (themeButton.firstChild.classList[1] == "fa-toggle-on") {
    themeButton.firstChild.classList.remove("fa-toggle-on")
    themeButton.firstChild.classList.add("fa-toggle-off")
  }
  else{
    themeButton.firstChild.classList.add("fa-toggle-on")
    themeButton.firstChild.classList.remove("fa-toggle-off")
  }
})