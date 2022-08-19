var imageArray = ["images/image1.jpg", "images/image2.jpg", "images/image3.jpg"];
var index = 0;

function rotateImage(){
    document.querySelector("img").setAttribute("src", imageArray[index])
    index++;
    if (index >= imageArray.length) {
        index = 0;
    }
}

setInterval(rotateImage, 3000);