// This script is used for the typewriter effect. You can place it in a separate "script.js" file.

document.addEventListener("DOMContentLoaded", () => {
  const businessName = document.getElementById("businessName");
  businessName.textContent = ""; // Clear the text initially.

  const text = "Your Business Name";
  let charIndex = 0;

  function typeText() {
    if (charIndex < text.length) {
      businessName.textContent += text.charAt(charIndex);
      charIndex++;
      setTimeout(typeText, 150);
    }
  }

  typeText();
});
