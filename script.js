// script.js

document.addEventListener("DOMContentLoaded", () => {
  const businessName = document.getElementById("businessName");
  businessName.textContent = ""; // Clear the text initially.

  const text = "Coding Chimpenze";
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
