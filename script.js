// Hamburger menu no scroll when clicked
const navbar_btn = document.querySelector(".navbar-toggler");
navbar_btn.onclick = function() {
  document.body.classList.toggle("show");
}

// Get the container element
var btnContainer = document.querySelector(".navbar-nav");
// Get all buttons with class="btn" inside the container
var btn = btnContainer.querySelectorAll(".nav-link");
// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    // If there's no active class
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active", "");
    }
    //Add the active class to the current/clicked button
    this.className += " active";
  });
}

// Close the sidebar bar menu when the navbar links are clicked
const sidebar = document.getElementById('navbarContent');
const button = document.querySelector(".collapsed");
const links = document.querySelectorAll('ul li a');
links.forEach(item => {
  item.addEventListener('click', (event) => {
    sidebar.classList.toggle('show');
    button.classList.toggle("collapsed");
    if (document.body.classList.contains("show")) {
      document.body.classList.remove("show");
    }
    if (sidebar.classList.contains("show")) {
      sidebar.classList.remove("show");
    }
    if (button.classList.add("collapsed")) {
      event.stopPropagation();
    }
  });
});

// Display Text When a Button is Clicked with
function displayText() {
  var text = document.querySelector(".success-msg");
  text.classList.add("fade-in");
  setTimeout(function() {
    text.classList.remove("fade-in");
  }, 3000) // Set time out to three seconds to account for the second the element fades in
}

const project_logo = gsap.utils.toArray('.project-logo');
//The transition of the Project logo in the Home page
project_logo.forEach((contain, index) => {
  gsap.set(contain, {y: 80});
  ScrollTrigger.create({
    id: index,
    trigger: contain,
    start: () => `top-=${gsap.getProperty(contain, 'y')} bottom-=200`,
    end: () => `+=${contain.clientHeight}`,
    markers: false,
    onEnter: () => {
      $(contain).addClass('inaction');
      gsap.to(contain, {y: 0});
    },
  })
})