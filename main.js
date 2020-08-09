const smallImage = document.getElementById("test-item");
const showImage = document.getElementById("test-show");

// smallImage.addEventListener('click', function() {
//     showImage.classList.add("show-active");
// });

smallImage.addEventListener("click", function() {
    if(showImage.style.visibility === "hidden") {
        showImage.style.visibility = "visible";
        showImage.style.opacity = 1;
    } else {
        showImage.style.visibility = "hidden";
        showImage.style.opacity = 0;
    }
});