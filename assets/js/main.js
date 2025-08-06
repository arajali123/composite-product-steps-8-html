
// Cart Js
document.addEventListener("DOMContentLoaded", function () {
  function toggleBodyClassAfterLoad(triggerSelector, overlaySelector, toggleClass) {
    var triggers = document.querySelectorAll(triggerSelector);
    var closeEls = document.querySelectorAll(triggerSelector + ", " + overlaySelector);

    if (triggers.length) {
      triggers.forEach(function (el) {
        el.addEventListener("click", function (e) {
          e.preventDefault();

          // Show loading spinner (optional)
          el.classList.add('loading');
          el.disabled = true;

          // Simulate loading delay (e.g., API call or animation)
          setTimeout(function () {
            document.body.classList.add(toggleClass); // only add (not toggle)
            el.classList.remove('loading');
            el.disabled = false;
          }, 1200); // loading time in ms
        });
      });

      // Close on overlay click
      var overlayEl = document.querySelector(overlaySelector);
      if (overlayEl) {
        overlayEl.addEventListener("click", function (e) {
          e.preventDefault();
          document.body.classList.remove(toggleClass);
        });
      }
    }
  }
  toggleBodyClassAfterLoad(".cart-expander", "#cart-overly", "cart-expanded");
});


// Tabs JS
document.addEventListener("DOMContentLoaded", function () {
  const tabLinks = document.querySelectorAll(".tabs-build-product-main-wrapper .tab-button");
  const tabBodies = document.querySelectorAll(".tabs-build-product-main-wrapper .tabs-build-main-wrap");
  let timerOpacity;

  tabLinks.forEach((tabLink) => {
    tabLink.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();

      // Clear any previous timer
      clearTimeout(timerOpacity);

      // Remove active classes
      tabLinks.forEach((link) => link.classList.remove("active"));
      tabBodies.forEach((body) => {
        body.classList.remove("active");
        body.classList.remove("active-item");
      });

      // Add active class to clicked tab
      this.classList.add("active");

      // Get the target tab content element
      const targetId = this.getAttribute("href");
      const targetBody = document.querySelector(targetId);

      if (targetBody) {
        targetBody.classList.add("active");

        // Add 'active-content' after slight delay for transition
        timerOpacity = setTimeout(() => {
          targetBody.classList.add("active-item");
        }, 50);
      }
    });
  });
});



