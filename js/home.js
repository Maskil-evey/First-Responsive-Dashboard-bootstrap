// sidebar-toggle

let el = document.getElementById('wrapper')
let toggleButton = document.getElementById('menu-toggle')

toggleButton.onclick = function(){
    el.classList.toggle('toggled')
}

// dropdown toggle
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

//   window.onclick = function() {
//      document.getElementById("myDropdown").classList.remove("show");
//   }