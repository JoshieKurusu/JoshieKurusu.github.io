// REMOVE THE SCROLL OF THE BROWSER WHEN THE MOBILE MENU CLICKED
const navbar_btn = document.querySelector(".navbar-toggler");
navbar_btn.onclick = function() {
  document.body.classList.toggle("show");
}

// CLOSE THE SIDEBAR MENU WHEN THE NAVBAR LINKS ARE CLICKED
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

// TRANSITION OF THE PROJECT LOGO/S IN THE HOME PAGE
const project_logo = gsap.utils.toArray('.project-logo');
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
  });
});

// DISPLAY SUCCESS MESSAGE AFTER SUBMITTING THE FORM
const myForm = document.querySelector('#contact-form');
const msg = document.querySelector(".success-msg");
myForm.addEventListener('submit', onSubmit);
function onSubmit(event) {
  event.preventDefault();
  msg.style.display = "block";
  setTimeout(() => msg.style.display = "none", 2000)
}