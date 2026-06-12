/* when.fibe.gg — minimal interactions. */

(() => {
  // Stamp current year.
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  // After the Buttondown form submits (in a popup), swap the card body
  // into a confirmation state. The actual subscription happens in the
  // popup — this is purely UI feedback so the form doesn't sit there
  // looking unchanged.
  document.querySelectorAll("[data-form]").forEach((form) => {
    form.addEventListener("submit", () => {
      const card = form.closest(".path");
      if (!card) return;
      const desc = card.querySelector(".path__desc");
      if (desc) desc.textContent = "Thanks. We'll email you when we open the next wave.";
      card.classList.add("is-submitted");
    });
  });
})();
