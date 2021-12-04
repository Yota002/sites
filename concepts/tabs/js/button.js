const burger = document.getElementById("burger");
const card = document.getElementById("card");

burger.addEventListener("click", function (event) { 
  if (card.style.display == "none") {
    card.style.display = "block";
  } else {
    card.style.display = "none";
  }
});

// const button = document.getElementById("button");

// button.setAttribute('data-after', button.innerHTML);
// button.innerHTML = "";

// button.addEventListener('mousedown', function (event) {
//     button.style.borderWidth = "2px";
// });

// button.addEventListener('mouseup', function (event) {
//     button.style.borderWidth = "2px 2px 4px"
// });

// button.addEventListener('mouseleave', function (event) {
//     button.style.borderWidth = "2px 2px 4px"
// });