
// Initialize variables
let featuredUnicorn = ""

// function to change the featured unicorn
const changeFeaturedUnicorn = (unicornId) => {
  // if there is a current featured unicorn - remove the class on that unicorn
  if (featuredUnicorn) {
    featuredUnicorn.classList.remove("featured-unicorn")
  }
  // if the unicornId is not blank - assign the new featured unicorn and add the class to the new unicorn
  if (featuredUnicorn) {
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


