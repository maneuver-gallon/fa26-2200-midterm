// This file only manages the existing whatWeUse dropdown.
(() => {
  const toolsButton = document.querySelector(".nav .dropdown-toggle");
  const toolsMenu = document.querySelector(".nav .dropdown-menu");
  if (!toolsButton || !toolsMenu) return;

  function closeTools() {
    toolsButton.setAttribute("aria-expanded", "false");
    toolsMenu.classList.remove("site-menu-open");
  }

  toolsButton.addEventListener("click", () => {
    const open = toolsButton.getAttribute("aria-expanded") !== "true";
    toolsButton.setAttribute("aria-expanded", String(open));
    toolsMenu.classList.toggle("site-menu-open", open);
  });
  document.addEventListener("click", event => {
    if (!event.target.closest(".nav .dropdown")) closeTools();
  });
  document.addEventListener("keydown", event => {
    if (event.key === "Escape") closeTools();
  });
  toolsMenu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", closeTools);
  });
})();
