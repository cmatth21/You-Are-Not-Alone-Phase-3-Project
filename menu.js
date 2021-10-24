// Navbar Menu
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navList = document.getElementsByClassName('nav-list')[0]

toggleButton.addEventListener('click', () =>{
  navList.classList.toggle('active')
})
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