// Function to save form data to localStorage
function saveToLocalStorage(username, email, cosplayer, props, costumes, makeup, comments, favcolor) {
    localStorage.setItem("username", username);
    localStorage.setItem("email", email);
    localStorage.setItem("cosplayer", cosplayer);
    localStorage.setItem("props", props);
    localStorage.setItem("costumes", costumes);
    localStorage.setItem("makeup", makeup);
    localStorage.setItem("comments", comments);
    localStorage.setItem("favcolor", favcolor);
}

// Function to clear data from localStorage (optional)
function clearLocalStorage() {
    localStorage.clear();
}
