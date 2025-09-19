const currentyear = document.querySelector("#currentyear");
const today = new Date();
currentyear.innerHTML = today.getFullYear();

let oLastModif = new Date(document.lastModified);
const lastModified = document.querySelector("#lastModified")

const month = oLastModif.getMonth() + 1
const day = oLastModif.getDate()
const year = oLastModif.getFullYear()
const hours = oLastModif.getHours()
const minutes = oLastModif.getMinutes()
const seconds = oLastModif.getSeconds()

lastModified.innerHTML = `Last Modification: ${month}/${day}/${year} ${hours}:${minutes}:${seconds}`;
