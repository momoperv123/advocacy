document.addEventListener("DOMContentLoaded", function() {
  const darkModeToggle = document.getElementById("dark-mode-toggle");
  const body = document.body;

  darkModeToggle.addEventListener("click", function() {
    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
      darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
      darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    }
  });
});