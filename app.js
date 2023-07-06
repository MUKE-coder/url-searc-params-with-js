const imageInputEl = document.getElementById("imageInput");

//Get Query String
const queryString = window.location.search;
//Get the url Params
const urlParams = new URLSearchParams(queryString);
const imageUrl = urlParams.get("url");
console.log(imageUrl);

const viewImageEl = document.getElementById("viewImage");
viewImageEl.href = `http://localhost:5500${imageUrl}`;
imageInputEl.value = `http://localhost:5500${imageUrl}`;
const nameEl = document.getElementById("name");
nameEl.textContent = urlParams.get("name");
