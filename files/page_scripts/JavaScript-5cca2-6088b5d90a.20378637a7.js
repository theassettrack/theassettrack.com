window.addEventListener("DOMContentLoaded", () => {
  const navItems = document.querySelectorAll(".nav-item");
  navItems.forEach((item) => {
    const dropdown = item.querySelector(".nav-dropdown");
    item.addEventListener("mouseenter", () => {
      if (dropdown) dropdown.style.display = "flex";
    });
    item.addEventListener("mouseleave", () => {
      if (!item.classList.contains("locked")) {
        dropdown.style.display = "none";
      }
    });
    item.addEventListener("click", (e) => {
      e.stopPropagation();
      const isLocked = item.classList.contains("locked");
      document.querySelectorAll(".nav-item").forEach((el) => {
        el.classList.remove("locked");
        const d = el.querySelector(".nav-dropdown");
        if (d && el !== item) d.style.display = "none";
      });
      if (isLocked) {
        item.classList.remove("locked");
        dropdown.style.display = "none";
      } else {
        item.classList.add("locked");
        dropdown.style.display = "flex";
      }
    });
  });
  document.addEventListener("click", () => {
    document.querySelectorAll(".nav-item").forEach((item) => {
      item.classList.remove("locked");
      const dropdown = item.querySelector(".nav-dropdown");
      if (dropdown) dropdown.style.display = "none";
    });
  });
});
