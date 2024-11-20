let bA = document.getElementById("billAmount");
let pT = document.getElementById("percentageTip");
let tA = document.getElementById("tipAmount");
let tAm = document.getElementById("totalAmount");
let pE = document.getElementById("errorMessage");

function btnClick() {
    let t = bA.value;
    let p = pT.value;
    let g;
    let k;
    if ((t === "" || p === "")) {
        pE.textContent = "Please Enter a Valid Input.";

    } else {
        g = (p / 100) * t;
        k = parseInt(t) + parseInt(g);
        tA.value = g;
        tAm.value = k;
        pE.textContent = "";
    }
}