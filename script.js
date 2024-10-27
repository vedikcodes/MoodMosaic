const moodSelector = document.getElementById('mood-selector');
const mosaic = document.querySelector('.mosaic');
const moodDescription = document.getElementById('mood-description');
const resetButton = document.getElementById('reset-button');

// Mood descriptions
const descriptions = {
    calm: "Feel relaxed and at ease. The calm mood promotes tranquility.",
    energetic: "Embrace the energy! The energetic mood boosts enthusiasm and action.",
    dreamy: "Let your imagination flow. The dreamy mood inspires creativity.",
    dark: "Enter a mysterious realm. The dark mood invites introspection."
};

// Function to hide all mood images
function hideAllImages() {
    const moodImages = document.querySelectorAll('.mood-image');
    moodImages.forEach(image => {
        image.style.display = 'none'; // Hide all images
    });
}

// Hide all images on initial load
hideAllImages();

// Event listener for mood selection
moodSelector.addEventListener('change', (event) => {
    // Clear existing classes and set the new mood class
    mosaic.classList.remove('calm', 'energetic', 'dreamy', 'dark');
    mosaic.classList.add(event.target.value);

    // Change the color of the mosaic cells based on the mood
    const mosaicCells = document.querySelectorAll('.mosaic-cell');
    mosaicCells.forEach(cell => {
        switch (event.target.value) {
            case 'calm':
                cell.style.backgroundColor = "#a3c6ff"; // Calm color
                break;
            case 'energetic':
                cell.style.backgroundColor = "#ff4f4f"; // Energetic color
                break;
            case 'dreamy':
                cell.style.backgroundColor = "#d1b3ff"; // Dreamy color
                break;
            case 'dark':
                cell.style.backgroundColor = "#333"; // Dark color
                cell.style.color = "#fff"; // Change text color for dark mode
                break;
        }
    });

    // Display the mood description
    moodDescription.textContent = descriptions[event.target.value];

    // Hide all images initially
    hideAllImages();

    // Show the selected mood image
    const selectedImage = document.getElementById(`${event.target.value}-image`);
    if (selectedImage) {
        selectedImage.style.display = 'block'; // Show the corresponding image
    }
});

// Reset button functionality
resetButton.addEventListener('click', () => {
    mosaic.classList.remove('calm', 'energetic', 'dreamy', 'dark');
    // Reset each cell's background color to the default
    const mosaicCells = document.querySelectorAll('.mosaic-cell');
    mosaicCells.forEach(cell => {
        cell.style.backgroundColor = "#ddd"; // Default color
        cell.style.color = "#333"; // Default text color
    });
    moodSelector.selectedIndex = 0; // Reset to first option
    moodDescription.textContent = ""; // Clear description

    // Hide all mood images
    hideAllImages();
});
