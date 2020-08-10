const grid = document.querySelector(".grid-photo");
const smallImage = grid.querySelectorAll(".grid-item");
const showImage = grid.querySelectorAll(".show-img");

function clickPhoto() {
    smallImage.forEach(item => {
        item.addEventListener("click", function() {
            let image = item.querySelector(".show-img");
            let gettingStyle = getComputedStyle(image);
            if(gettingStyle.visibility === "hidden") {
                image.style.visibility = "visible";
                image.style.opacity = 1;
            } else {
                image.style.visibility = "hidden";
                image.style.opacity = 0;
            }
        })
    })
}; 

clickPhoto();