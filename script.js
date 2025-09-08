// === PART 2: JavaScript Functions ===

// Global variable
let resultDisplay = document.getElementById("result");

// Function to calculate area of rectangle
function calculateArea(length, width) {
    // Local scope variables
    let area = length * width;
    return area; // Returning value
}

// Event listener for calculate button
document.getElementById("calcBtn").addEventListener("click", function () {
    let length = 10;
    let width = 5;
    let area = calculateArea(length, width);
    resultDisplay.textContent = `The area is: ${area} sq units`;
});

// === PART 3: Combining CSS + JavaScript ===

// 1. Animate Box on Click
const jsBox = document.getElementById("jsBox");
document.getElementById("animateBtn").addEventListener("click", () => {
    jsBox.classList.toggle("active");
});

// 2. Flip Card on Button Click
const card = document.getElementById("flipCard");
document.getElementById("flipBtn").addEventListener("click", () => {
    card.classList.toggle("flip");
});

// 3. Popup Modal Open & Close
const modal = document.getElementById("modal");
const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");

openModalBtn.addEventListener("click", () => {
    modal.style.display = "flex";
});

closeModalBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

// Close modal when clicking outside
window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});
