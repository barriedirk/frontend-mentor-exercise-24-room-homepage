const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

(async () => {
  const $btnNavToggle = $("#menu__toggle");
  const $body = $("body");

  $btnNavToggle.addEventListener("click", async (evt) => {
    evt.preventDefault();

    const isExpanded = $btnNavToggle.getAttribute("aria-expanded") === "true";

    if (isExpanded) {
      $btnNavToggle.setAttribute("aria-expanded", "false");
      $body.classList.remove("is-expanded");
    } else {
      $btnNavToggle.setAttribute("aria-expanded", "true");
      $body.classList.add("is-expanded");
    }
  });

  // slider
  let galleryIdx = 0;
  let galleryTimeout = 0;

  const $galleryBtnPrev = $("button.hero-image__navigation-btn--prev");
  const $galleryBtnNext = $("button.hero-image__navigation-btn--next");

  const $$galleryPictures = $$(".hero-image__item");
  const $$galleryDestails = $$(".hero__details--item");

  const galleryLength = $$galleryPictures.length;

  const GALLERY_DIRECTION = {
    PREV: -1,
    NEXT: 1,
  };

  const changePictureAutomatically = () => {
    clearTimeout(galleryTimeout);

    galleryTimeout = setTimeout(() => {
      galleryDirection(GALLERY_DIRECTION.NEXT);

      changePictureAutomatically();
    }, 3000);
  };

  const galleryDirection = (direction) => {
    clearTimeout(galleryTimeout);
    $$galleryPictures[galleryIdx].classList.add("d-none");
    $$galleryDestails[galleryIdx].classList.add("d-none");
    $$galleryDestails[galleryIdx].classList.remove("d-flex");

    const newIdx = galleryIdx + direction;

    if (newIdx < 0) {
      galleryIdx = galleryLength - 1;
    } else if (newIdx > galleryLength - 1) {
      galleryIdx = 0;
    } else {
      galleryIdx = newIdx;
    }

    $$galleryPictures[galleryIdx].classList.remove("d-none");
    $$galleryDestails[galleryIdx].classList.remove("d-none");
    $$galleryDestails[galleryIdx].classList.add("d-flex");

    // changePictureAutomatically();
  };

  $galleryBtnPrev.addEventListener("click", (evt) => {
    evt.preventDefault();

    galleryDirection(GALLERY_DIRECTION.PREV);
  });
  $galleryBtnNext.addEventListener("click", (evt) => {
    evt.preventDefault();

    galleryDirection(GALLERY_DIRECTION.NEXT);
  });

  // changePictureAutomatically();
})();
