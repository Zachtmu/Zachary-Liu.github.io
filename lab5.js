// Cache frequently accessed elements
const nameButton = document.getElementById('nameButton');
const nameDisplay = document.getElementById('nameDisplay');
const profilePic = document.getElementById('profilePic');
const navMenu = document.getElementById('navMenu');

// Task a: Prompt user for their name and display it
nameButton.addEventListener('click', () => {
  const userName = prompt("Please enter your name:");
  if (userName) {
    nameDisplay.textContent = `Hello, ${userName}!`;
  }
});

// Task b: Toggle image size on click
profilePic.addEventListener('click', () => {
  const isSmall = profilePic.width === 200;
  profilePic.style.width = isSmall ? '400px' : '200px';
  profilePic.style.height = isSmall ? '400px' : '200px';
});

// Mouseover/Mouseout event handlers for navigation items
const originalTexts = {
  'page1lab5.html': 'Page 1',
  'page2lab5.html': 'Page 2'
};



// Task d: Toggle dropdown visibility
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  

  // Close the dropdown if the user clicks outside of it

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      for (var i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  } 
