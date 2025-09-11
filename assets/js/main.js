
// Tabs JS
document.addEventListener("DOMContentLoaded", function () {
  const tabLinks = document.querySelectorAll(".tabs-mountain-main-wrapper .tab-button");
  const tabBodies = document.querySelectorAll(".tabs-mountain-main-wrapper .tabs-mountain-main-wrap");

  tabLinks.forEach((tabLink) => {
    tabLink.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();

      // Remove Active from all tabs and bodies
      tabLinks.forEach((link) => link.classList.remove("active"));
      tabBodies.forEach((body) => body.classList.remove("active"));

      // Add Active to clicked tab
      this.classList.add("active");

      const targetId = this.getAttribute("href");
      const targetBody = document.querySelector(targetId);

      if (targetBody) {
        targetBody.classList.add("active");
      }
    });
  });
});










































