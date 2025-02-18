// Initialize variables
let featuredUnicorn = ""
const menu = document.querySelector(".menu")
const hamburger = document.getElementById("hamburger")
const hamburgerIcon = document.querySelector(".hamburger-icon")
const menuItems = document.querySelectorAll(".menu-item")

console.log(menuItems)

// function to toogle the hamburger menu
const toggleMenu = () => {
  // if the menu is visible - hide the menu
  if (menu.classList.contains("show-menu")) {
    menu.classList.remove("show-menu")
    hamburgerIcon.classList.remove("closing-icon")
  }
  // if the menu is hidden - show the menu
  else {
    menu.classList.add("show-menu")
    hamburgerIcon.classList.add("closing-icon")
  }
}

// iterate through the links to hide the menu when a link is clicked
menuItems.forEach(
  function (menuItem) {
    menuItem.addEventListener("click", toggleMenu);
  }
)

// function to change the featured unicorn
const changeFeaturedUnicorn = (unicornId) => {
  // if there is a current featured unicorn - remove the class on that unicorn
  if (featuredUnicorn) {
    featuredUnicorn.classList.remove("featured-unicorn")
  }
  // if the unicornId is not blank - assign the new featured unicorn and add the class to the new unicorn
  if (unicornId) {
    featuredUnicorn = document.getElementById(unicornId)
    featuredUnicorn.classList.add("featured-unicorn")
  }
}

// function to change featured unicorn when more a info button is clicked
const showInfo = (clicked) => {
  // get id of the clicked button
  const buttonId = clicked
  // get the unicorn element of the unicorn which button was clicked
  const selectedUnicorn = document.getElementById(buttonId).parentElement.parentElement
  // change the featurd unicorn
  changeFeaturedUnicorn(selectedUnicorn.id)
}


