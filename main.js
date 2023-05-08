const canvas = document.getElementById("result");
const preview = document.getElementById("preview");
preview.addEventListener("click", prev);

canvas.height = canvas.width / 1.616;
const ctx = canvas.getContext("2d");
ctx.font = "20px Helvetica";

const image = document.getElementById("imgDisplayed");
const logo = document.getElementById("logo");

image.onload = function () {
  prev();
};

function prev() {
  let inName = document.getElementById("inName").value;
  let inBirth = document.getElementById("inBirth").value;
  let inField = document.getElementById("inField").value;
  let inNum = document.getElementById("inNum").value;

  ctx.fillStyle = "#159";
  ctx.rect(0, 0, 300, 56);
  ctx.fill();
  ctx.fillStyle = "#fff";
  ctx.fillText("Alchemy", 10, 25);
  ctx.font = "16px Arial";
  ctx.fillText("University", 15, 45);
  ctx.drawImage(logo, 230, 3, 50, 50);
  ctx.fillStyle = "#000";
  ctx.fillText(inName, 110, 90);
  ctx.fillText(inBirth, 110, 115);
  ctx.fillText(inField, 110, 140);
  ctx.fillText("SubN° " + inNum, 110, 165);
  ctx.drawImage(image, 10, 65, 80, 110);
}

function loadImage(event) {
  const image = document.getElementById("imgDisplayed");
  image.src = URL.createObjectURL(event.target.files[0]);
  image.onload = prev;
}

const download = document.getElementById("down");
download.addEventListener("click", function () {
  if (window.navigator.msSaveBlob) {
    window.navigator.msSaveBlob(canvas.msToBlob(), "Card.png");
  } else {
    const a = document.createElement("a");
    document.body.appendChild(a);
    a.href = canvas.toDataURL();
    a.download = "Card.png";
    a.click();
    document.body.removeChild(a);
  }
});
