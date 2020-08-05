const popupImage = document.getElementById("showImage");
const image = document.getElementsByClassName("image");
const showImage = document.getElementById("img1");

image.onclick = function() {
    popupImage.style.display = "block";
    showImage.src = this.src;
}

const span = document.getElementsByClassName("close")[0];

span.onclick = function() {
    popupImage.style.display = "none";
}