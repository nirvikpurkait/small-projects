const popup = document.querySelector('.pop-up')
const popupClose = document.querySelector('#pop-up-close')

const message = () => {
  popup.classList.add("active")
}

const infoButton = document.querySelector('.info-button')

infoButton.addEventListener('click', message)
window.addEventListener('load', message)
popupClose.addEventListener('click', () => {
  popup.classList.remove('active')
})