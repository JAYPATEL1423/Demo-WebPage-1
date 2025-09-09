const menuItems = document.querySelectorAll(".service-menu .navbar-brand");
const contents = document.querySelectorAll(".service-content");

menuItems.forEach((item) => {
  item.addEventListener("click", function (e) {
    e.preventDefault();

    menuItems.forEach((el) => el.classList.remove("active"));
    this.classList.add("active");

    contents.forEach((content) => content.classList.remove("active"));

    const targetId = this.getAttribute("href").substring(1);
    const targetContent = document.getElementById(targetId);
    if (targetContent) {
      targetContent.classList.add("active");
    }
  });
});

const projectMenuItems = document.querySelectorAll("#PROJECT .nav-link");
const projectItems = document.querySelectorAll(".image-grid .project-item");

projectMenuItems.forEach((item) => {
  item.addEventListener("click", function (e) {
    e.preventDefault();

    projectMenuItems.forEach((el) => el.classList.remove("active"));
    this.classList.add("active");

    const category = this.textContent.trim();

    projectItems.forEach((proj) => {
      if (category === "All-Projects" || proj.dataset.category === category) {
        proj.style.display = "block";
      } else {
        proj.style.display = "none";
      }
    });
  });
});
