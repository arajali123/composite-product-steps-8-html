

// Tabs JS
document.addEventListener("DOMContentLoaded", function () {
  const tabLinks = document.querySelectorAll(".tabs-skincare-essentials-main-wrapper .tab-button");
  const tabBodies = document.querySelectorAll(".tabs-skincare-essentials-main-wrapper .tabs-skincare-essentials-main-wrap");
  let timerOpacity;

  tabLinks.forEach((tabLink) => {
    tabLink.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();

      // Timer
      clearTimeout(timerOpacity);

      // Remove Active
      tabLinks.forEach((link) => link.classList.remove("active"));
      tabBodies.forEach((body) => {
        body.classList.remove("active");
        body.classList.remove("active-item");
      });

      // Active Tabs
      this.classList.add("active");

      const targetId = this.getAttribute("href");
      const targetBody = document.querySelector(targetId);

      if (targetBody) {
        targetBody.classList.add("active");

        timerOpacity = setTimeout(() => {
          targetBody.classList.add("active-item");
        }, 50);
      }
    });
  });
});


















