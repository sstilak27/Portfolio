// Get DOM Elements
const menu = document.getElementById('nav-menu');
const toggle = document.getElementById('menu-toggle');

toggle.addEventListener('click', () => {
  // Toggle the menu
  if (menu.style.display === 'flex') {
    menu.style.display = 'none';
    toggle.textContent = '☰';
  } else {
    menu.style.display = 'flex';
    toggle.textContent = '✕';
  }
});

const words = ["awesome", "innovative", "impactful", "next‑level"];
let wordIndex = 0;
let charIndex = 0;
let deleting = false;

const dynamicText = document.getElementById("dynamic-text");

function typeEffect() {
  const currentWord = words[wordIndex];
  if (!deleting) {
    // Add characters
    dynamicText.textContent = currentWord.slice(0, ++charIndex);
    if (charIndex === currentWord.length) {
      setTimeout(() => (deleting = true), 1500);
    }
  } else {
    // Remove characters
    dynamicText.textContent = currentWord.slice(0, --charIndex);
    if (charIndex === 0) {
      deleting = false;
      wordIndex = (wordIndex + 1) % words.length;
    }
  }
  setTimeout(typeEffect, deleting ? 60 : 100);
}

// START
typeEffect();
