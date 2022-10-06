const images = [0, 1, 2, 3, 4, 5];

const chosenimage = Math.floor(Math.random() * images.length);

const bjImage = document.createElement("img");
bjImage.src = `img/${chosenimage}.jpg`;

document.body.appendChild(bjImage);
