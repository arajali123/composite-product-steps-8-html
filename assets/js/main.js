
// Tabs JS
document.addEventListener("DOMContentLoaded", function () {
  const tabLinks = document.querySelectorAll(".tabs-v2-main-wrapper .tab-button");
  const tabBodies = document.querySelectorAll(".tabs-v2-main-wrapper .tabs-v2-mountain-main-wrap");

  tabLinks.forEach((tabLink) => {
    tabLink.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();

      tabLinks.forEach((link) => link.classList.remove("active"));
      tabBodies.forEach((body) => body.classList.remove("active"));

      this.classList.add("active");

      const targetId = this.getAttribute("href");
      const targetBody = document.querySelector(targetId);

      if (targetBody) {
        targetBody.classList.add("active");
      }
    });
  });
});










































