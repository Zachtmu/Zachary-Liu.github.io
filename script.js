// Toggle Text Size
let isTextLarge = false;
let isDarkMode = false;

function toggleTextSize() {
    if (!isTextLarge) {
        document.body.style.fontSize = "1.2em";
    } else {
        document.body.style.fontSize = "1em";
    }
    isTextLarge = !isTextLarge;
}

// Toggle Background Color for Accessibility and Change Caption Colors
function toggleBackgroundColor() {
    let body = document.body;
    let captions = document.querySelectorAll('figcaption');
    
    if (!isDarkMode) {
        body.style.backgroundColor = "black";
        body.style.color = "white";
        captions.forEach(caption => {
            caption.style.color = "white";
        });
    } else {
        body.style.backgroundColor = "white";
        body.style.color = "black";
        captions.forEach(caption => {
            caption.style.color = "#555"; // Reset to original color
        });
    }
    isDarkMode = !isDarkMode;
}

// Display Alt Text for Images
function displayAltText() {
    const images = document.querySelectorAll('img');
    images.forEach((img) => {
        alert(img.alt);
    });
}
