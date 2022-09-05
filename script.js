function textAndImageContainer() {
  const textInput = document.getElementById('text-input');
  const memeText = document.getElementById('meme-text');
  textInput.addEventListener('keyup', () => {
    memeText.innerText = textInput.value;
  });
}
textAndImageContainer();

function uploadImage(event) {
  const image = document.getElementById('meme-image');
  image.src = URL.createObjectURL(event.target.files[0]);
}
const memeInput = document.getElementById('meme-insert');
memeInput.onchange = uploadImage;

function changeImage(event) {
  const image = document.getElementById('meme-image');
  image.src = event.target.src;
}
const availableMemes = document.getElementById('memes-prontos').children;
for (let index = 0; index < availableMemes.length; index += 1) {
  availableMemes[index].onclick = changeImage;
}

function customizeMeme() {
  const earthButton = document.getElementById('earth');
  const waterButton = document.getElementById('water');
  const fireButton = document.getElementById('fire');
  const container = document.getElementById('meme-image-container');

  fireButton.onclick = () => {
    container.style.border = '3px dashed red';
  };
  waterButton.onclick = () => {
    container.style.border = '5px double blue';
  };
  earthButton.onclick = () => {
    container.style.border = '6px groove green';
  };
}
customizeMeme();
