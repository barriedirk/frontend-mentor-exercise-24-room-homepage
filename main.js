const $ = (selector) => document.querySelector(selector);

(async () => {
  const $btnNavToggle = $("#menu__toggle");
  const $headerMenu = $("header.menu");

  $btnNavToggle.addEventListener("click", async (evt) => {
    evt.preventDefault();

    const isExpanded = $btnNavToggle.getAttribute("aria-expanded") === "true";

    if (isExpanded) {
      $btnNavToggle.setAttribute("aria-expanded", "false");
      $headerMenu.classList.remove("is-expanded");
    } else {
      $btnNavToggle.setAttribute("aria-expanded", "true");
      $headerMenu.classList.add("is-expanded");
    }
  });
})();
