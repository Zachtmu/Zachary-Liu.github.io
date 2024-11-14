// Increase Text Size
function increaseTextSize() {
    document.body.style.fontSize = "1.2em";
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