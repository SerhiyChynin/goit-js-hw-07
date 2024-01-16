function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector('body');
const colorButton = document.querySelector('.change-color');
const colorName = document.querySelector('.color');
const modal = document.querySelector('.widget');

colorButton.addEventListener('click', colorise);

function colorise() {
  colorName.textContent = getRandomHexColor();
  body.style.backgroundColor = colorName.textContent;
  modal.style.backgroundColor = 'transparent';  
}