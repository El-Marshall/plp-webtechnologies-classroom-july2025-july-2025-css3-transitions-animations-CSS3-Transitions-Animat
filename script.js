/* ==========================
   PART 1: BUTTON ANIMATION
========================== */
const animateBtn = document.getElementById("animateBtn");
const box = document.getElementById("box");

/**
 * Toggles the 'animate' class to trigger CSS animation
 */
function triggerBoxAnimation() {
  box.classList.toggle("animate");
}

animateBtn.addEventListener("click", triggerBoxAnimation);

/* ==========================
   PART 2: FUNCTION SCOPE & RETURN
========================== */

/**
 * Calculates a new size for the box based on multiplier
 * @param {number} multiplier - factor to scale box size
 * @returns {string} - new CSS size value
 */
function calculateBoxSize(multiplier) {
  const baseSize = 100; // local scope
  return `${baseSize * multiplier}px`;
}

/**
 * Changes box size dynamically
 * Demonstrates global and local scope
 */
function resizeBox(multiplier) {
  box.style.width = calculateBoxSize(multiplier);
  box.style.height = calculateBoxSize(multiplier);
}

box.addEventListener("dblclick", () => resizeBox(1.5)); // double-click to resize

/* ==========================
   PART 3: POPUP MODAL
========================== */
const popup = document.getElementById("popup");
const popupBtn = document.getElementById("popupBtn");
const closePopup = document.getElementById("closePopup");

/**
 * Shows the popup by adding 'show' class
 */
function showPopup() {
  popup.classList.add("show");
}

/**
 * Hides the popup by removing 'show' class
 */
function hidePopup() {
  popup.classList.remove("show");
}

popupBtn.addEventListener("click", showPopup);
closePopup.addEventListener("click", hidePopup);
