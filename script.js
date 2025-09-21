// Dynamic footer year
document.getElementById("year").textContent = new Date().getFullYear();

document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});
