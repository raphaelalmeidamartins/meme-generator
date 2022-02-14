const inputText = document.getElementById('text-input');
const memeText = document.getElementById('meme-text');
const inputImage = document.getElementById('meme-insert');
const memeImage = document.getElementById('meme-image');
const memeImageContainer = document.getElementById('meme-image-container');
const fireButton = document.getElementById('fire');
const waterButton = document.getElementById('water');
const earthButton = document.getElementById('earth');
const meme1 = document.getElementById('meme-1');
const meme2 = document.getElementById('meme-2');
const meme3 = document.getElementById('meme-3');
const meme4 = document.getElementById('meme-4');

function addTextToMeme() {
  memeText.textContent = inputText.value;
}

inputText.addEventListener('keyup', addTextToMeme);

function addImageToMeme(event) {
  memeImage.src = URL.createObjectURL(event.target.files[0]);
}

inputImage.addEventListener('change', addImageToMeme);

function changeBorderStyle(event) {
  memeImageContainer.className = `${event.target.id}-border`;
}

fireButton.addEventListener('click', changeBorderStyle);
waterButton.addEventListener('click', changeBorderStyle);
earthButton.addEventListener('click', changeBorderStyle);

function loadPreSelecterMeme(event) {
  memeImage.src = event.target.src;
}

meme1.addEventListener('click', loadPreSelecterMeme);
meme2.addEventListener('click', loadPreSelecterMeme);
meme3.addEventListener('click', loadPreSelecterMeme);
meme4.addEventListener('click', loadPreSelecterMeme);

function onLoadPage() {
  inputImage.value = null;
}

window.onload = onLoadPage;
