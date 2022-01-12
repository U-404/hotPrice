import "../scss/app.scss";

var prices = document.querySelectorAll(".hot");
  console.log(prices);
  prices.forEach((price) => {
    let val = price.innerHTML;
    console.log(val);
    price.innerHTML = val + "&#128293";
  });

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready
});
