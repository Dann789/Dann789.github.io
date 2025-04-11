var typed = new Typed(".auto-type", {
    strings: ["Web Developer", "Mobile Developer"],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true,
});

const image = document.getElementById("image");
const listImage = ["images/profile2.jpg", "images/profile.jpg"];
let index = 0;

function changeImage() {
    image.style.opacity = 0;

    setTimeout(() => {
        indexImage = index % listImage.length;
        image.src = listImage[indexImage];
        image.style.opacity = 1;
        index++
    }, 1000);
}

setInterval(changeImage, 5000);