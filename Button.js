document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector(".buttonMenu");
    const header = document.querySelector(".headermobile");
    const links = document.querySelectorAll(".navbarLinks")
    button.addEventListener("click", () => {
      header.classList.toggle("active");
    });
  });