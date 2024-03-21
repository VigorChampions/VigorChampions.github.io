var imageIndex = 1;
ShowImage(imageIndex)

function Next(e) {
    imageIndex += e;
    ShowImage();
}

function ShowImage() {
    const Images = document.getElementsByClassName("images");
    if (imageIndex > Images.length) {
        imageIndex = 1;
    }
    if (imageIndex < 1) {
        imageIndex = Images.length;
        console.log(imageIndex);
    }

    for (i = 0; i < Images.length; i++) {
        Images[i].style.display = "none";  
    }
    Images[imageIndex-1].style.display = "block";  
}

//Detect if on screen
const observerText = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log("intersect")
        if (entry.isIntersecting){
            entry.target.classList.add("show");
        }
        else{
            entry.target.classList.remove("show");
        }
    });
})

const hiddenObjectsText = document.querySelectorAll(".hide");
hiddenObjectsText.forEach((el) => observerText.observe(el));