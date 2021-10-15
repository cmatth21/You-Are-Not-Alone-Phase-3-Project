// Closes menu
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
// Modal
// Get the modal
var modal = document.getElementById("myBreathmodal");
window.onload = function(event){
    modal.style.display = 'show';
}

// Close Modal
var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
    modal.style.display = "none";
}
// Closes if click outside of modal not working
window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }