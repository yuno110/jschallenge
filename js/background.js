const images = ["melon.jpg", "pink.jpg", "purple.jpg", "sky.jpg", "yellow.jpg"];

const colorBtn = document.querySelector("#rtbtn");




function changeColor() {

    const randomImages = images[Math.floor(Math.random() * images.length)];
    const addImages = document.createElement("img");
    addImages.src = `images/${randomImages}`;
    document.body.appendChild(addImages);

}




changeColor();
colorBtn.addEventListener("click", changeColor);



