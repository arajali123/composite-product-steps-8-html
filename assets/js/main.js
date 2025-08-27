
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


// Nice Select Js
document.querySelectorAll(".tabs-skincare-essentials-select").forEach(select => {
  const selected = select.querySelector(".select-selected span");
  const itemContainers = select.querySelectorAll(".tabs-skincare-essentials-select-item");

  // toggle dropdown
  select.querySelector(".select-selected").addEventListener("click", (e) => {
    e.stopPropagation();

    document.querySelectorAll(".tabs-skincare-essentials-select").forEach(s => {
      if (s !== select) s.classList.remove("active");
    });
    select.classList.toggle("active");
  });

  // select item
  itemContainers.forEach(container => {
    container.querySelectorAll("div").forEach(option => {
      option.addEventListener("click", () => {
        selected.textContent = option.textContent;
        select.classList.remove("active");
      });
    });
  });
});

document.addEventListener("click", () => {
  document.querySelectorAll(".tabs-skincare-essentials-select").forEach(select => {
    select.classList.remove("active");
  });
});


// Counter Cart Js
document.addEventListener("DOMContentLoaded", function () {
  const wrappers = document.querySelectorAll(".tabs-skincare-essentials-main-wrap");

  wrappers.forEach((wrapper) => {
    const counters = wrapper.querySelectorAll(".skincare-essentials-counter");
    const addItems = wrapper.querySelectorAll(".skincare-essentials-add-item .add-items");
    const selectNumber = wrapper.querySelector(".select-number");

    counters.forEach((counterBlock, index) => {
      const addToCartBtn = counterBlock.querySelector(".primary-cart-btn");
      const counter = counterBlock.querySelector(".counter");
      const countSpan = counter.querySelector(".count");
      const plusBtn = counterBlock.querySelector(".plus");
      const minusBtn = counterBlock.querySelector(".minus");

      let count = 0;

      function updateAll() {
        countSpan.textContent = count;

        if (addItems[index]) {
          addItems[index].style.display = count > 0 ? "flex" : "none";
        }

        updateSelectNumber();
      }

      function updateSelectNumber() {
        let total = 0;
        wrapper.querySelectorAll(".skincare-essentials-counter .count").forEach(c => {
          total += parseInt(c.textContent) || 0;
        });
        if (selectNumber) selectNumber.textContent = total;
      }

      // Loading
      addToCartBtn.addEventListener("click", function () {
        addToCartBtn.classList.add("loading");
        addToCartBtn.disabled = true;

        setTimeout(function () {
          count++;
          counter.style.display = "flex";
          addToCartBtn.style.display = "none";
          updateAll();

          addToCartBtn.classList.remove("loading");
          addToCartBtn.disabled = false;
        }, 600);
      });

      // Plus
      plusBtn.addEventListener("click", () => {
        plusBtn.classList.add("loading");
        plusBtn.disabled = true;

        setTimeout(function () {
          count++;
          updateAll();
          plusBtn.classList.remove("loading");
          plusBtn.disabled = false;
        }, 1000);
      });

      // Minus
      minusBtn.addEventListener("click", () => {
        minusBtn.classList.add("loading");
        minusBtn.disabled = true;

        setTimeout(function () {
          if (count > 1) {
            count--;
          } else {
            count = 0;
            counter.style.display = "none";
            addToCartBtn.style.display = "block";
          }
          updateAll();
          minusBtn.classList.remove("loading");
          minusBtn.disabled = false;
        }, 500);
      });

      // Close-icon
      if (addItems[index]) {
        const closeBtn = addItems[index].querySelector(".close-icon");
        if (closeBtn) {
          closeBtn.addEventListener("click", () => {
            closeBtn.classList.add("loading");
            setTimeout(function () {
              count = 0;
              counter.style.display = "none";
              addToCartBtn.style.display = "block";
              updateAll();
              closeBtn.classList.remove("loading");
            }, 500);
          });
        }
      }

      updateAll();
    });
  });
});


// Back Next Button Js
document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll('[id^="tab-"]');
  const nextButtons = document.querySelectorAll(".next-btn");
  const backButtons = document.querySelectorAll(".back-btn");
  const tabButtons = document.querySelectorAll(".tab-button");

  let currentIndex = 0;

  function showTab(index) {
    tabs.forEach(tab => tab.style.display = "none");
    tabButtons.forEach(btn => btn.classList.remove("active"));
    tabs[index].style.display = "block";
    if (tabButtons[index]) {
      tabButtons[index].classList.add("active");
    }
    currentIndex = index;
  }

  // next-btn
  nextButtons.forEach(btn => {
    btn.addEventListener("click", function () {
      const nextIndex = (currentIndex + 1) % tabs.length;
      showTab(nextIndex);
    });
  });

  // back-btn
  backButtons.forEach(btn => {
    btn.addEventListener("click", function () {
      const prevIndex = (currentIndex - 1 + tabs.length) % tabs.length;
      showTab(prevIndex);
    });
  });

  tabButtons.forEach((btn, index) => {
    btn.addEventListener("click", function () {
      showTab(index);
    });
  });

  showTab(0);
});









































