let imageElement = document.getElementById("image");
let sE = document.getElementById("warningMessage");
let originalImageWidth = "200px";
let iW = document.getElementById("imageWidth");
imageElement.style.width = originalImageWidth;
let t = 200;

function deBtn() {
    t = (t - 5);
    let k = t + "px";
    imageElement.style.width = k;
    iW.textContent = k;
    sE.textContent = "";
    if (t < 100) {
        sE.textContent = "Can't Visible. Increase the size of the Image.";
    }
}

function inBtn() {
    t = (t + 5);
    let k = t + "px";
    sE.textContent = "";
    imageElement.style.width = k;
    iW.textContent = k;
    if (t > 300) {
        sE.textContent = "Too Big. Decrease the size of the Image.";
    }
}