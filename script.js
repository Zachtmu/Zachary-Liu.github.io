// Toggle Text Size
let isTextLarge = false;

function toggleTextSize() {
    if (!isTextLarge) {
        document.body.style.fontSize = "1.2em";
    } else {
        document.body.style.fontSize = "1em";
    }
    isTextLarge = !isTextLarge;
}

// Toggle Background Color for Accessibility
function toggleBackgroundColor() {
    let body = document.body;
    body.style.backgroundColor = body.style.backgroundColor === 'black' ? 'white' : 'black';
    body.style.color = body.style.color === 'white' ? 'black' : 'white';
}

// Display Alt Text for Images
function displayAltText() {
    const images = document.querySelectorAll('img');
    images.forEach((img) => {
        alert(img.alt);
    });
}
