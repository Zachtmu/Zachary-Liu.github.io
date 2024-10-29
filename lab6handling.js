// Form handling script
document.getElementById('cosplayForm').onsubmit = function(event) {
    event.preventDefault(); // Prevent form from refreshing the page

    // Get all form values
    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let cosplayer = document.querySelector('input[name="cosplayer"]:checked').value;
    let props = document.getElementById('props').checked;
    let costumes = document.getElementById('costumes').checked;
    let makeup = document.getElementById('makeup').checked;
    let comments = document.getElementById('comments').value;
    let favcolor = document.getElementById('favcolor').value;

    // Call function to save data to localStorage
    saveToLocalStorage(username, email, cosplayer, props, costumes, makeup, comments, favcolor);

    alert("Your data has been saved!");
};
