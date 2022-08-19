//This where all the images are linked
var imageArray = ["images/img1.jpg", "images/img2.jpg", "images/img3.jpg", "images/img4.jpg", "images/img5.jpg", "images/img6.jpg"];
var index = 0;

function goForward() {
    index++;
    //console.log(rotateImages);
    if (index >= imageArray.length) {
        index = 0;
        document.querySelector("img").setAttribute("src", imageArray[index]);
    }  else {
        document.querySelector("img").setAttribute("src", imageArray[index]); 
    }
 
}
function goBackwards() {
    index--;
    //console.log(index);
    if (index < 0) {
        index = imageArray.length - 1
        document.querySelector("img").setAttribute("src", imageArray[index]);
    } else {  
        document.querySelector("img").setAttribute("src", imageArray[index]);
    }
}