const showFormBtn = document.getElementById('showFormBtn');
const overlay = document.getElementById('overlay');
const formContainer = document.getElementById('formContainer');
const closeButton = document.getElementById('closeButton');

function toggleMenu() {
  var menu = document.getElementById("burger-menu");
  menu.classList.toggle("show-menu");
}
document.querySelector('.header-menu-btn').addEventListener('click', function() {
  toggleMenu(); 
});

function closeMenu() {
  var menu = document.getElementById("burger-menu");
  menu.classList.remove("show-menu");
}


document.querySelector('.close-btn').addEventListener('click', function() {
  closeMenu(); 
});

showFormBtn.addEventListener('click', function() {
  overlay.style.display = 'block';
  formContainer.style.display = 'block';
});

overlay.addEventListener('click', function(event) {
  if (event.target === overlay) {
    overlay.style.display = 'none';
    formContainer.style.display = 'none';
  }
});

closeButton.addEventListener('click', function() {
  overlay.style.display = 'none';
  formContainer.style.display = 'none';
});
