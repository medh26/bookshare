// Get the elements
var seeMoreLink = document.getElementById("seeMoreLink");
var popup = document.getElementById("popup");
var close = document.getElementsByClassName("close")[0];

// Show the pop-up when clicking on the "See More" link
seeMoreLink.onclick = function() {
  popup.style.display = "block";
}

// Hide the pop-up when clicking on the close button or outside the pop-up
close.onclick = function() {
  popup.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == popup) {
    popup.style.display = "none";
  }
}
