const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const mainTitle = document.getElementById('mainTitle');

// Helper function to generate random values between min and max
function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to move the "NO" button away when hovered
function dodge() {
  noBtn.style.position = 'absolute';
  noBtn.style.left = `${rand(-40, 40)}%`;
  noBtn.style.top = `${rand(-40, 40)}%`;
}

// Event Listeners
noBtn.addEventListener('mouseenter', dodge);

yesBtn.addEventListener('click', () => {
  mainTitle.textContent = "Yayyy! I love you 💕";
  noBtn.style.display = 'none'; // Hide the "NO" button after clicking YES
});
