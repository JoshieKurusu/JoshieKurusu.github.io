class Header extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = `
            <header>
                <!-- NAVIGATION BAR -->
                <nav class="navbar navbar-expand-md">
                    <div class="container-fluid d-md-flex justify-content-md-around justify-content-lg-start">
                        <!-- LOGO WITH HOME LINK -->
                        <a href="./index.html"><img src="./img/logo/J__Logo-BlueGreen-removebg.png" alt="Joshie"></a>
                        <!-- HAMBURGER MENU BUTTON/MOBILE MENU BUTTON -->
                        <button class="navbar-toggler collapsed d-flex d-md-none flex-column justify-content-around" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="toggler-icon top-bar"></span>
                            <span class="toggler-icon middle-bar"></span>
                            <span class="toggler-icon bottom-bar"></span>
                        </button>
                        <!-- NAVBAR MENU -->
                        <div class="collapse-horizontal wrapper navbar-collapse collapse" id="navbarContent">
                            <!-- NAVBAR MENU NAVIGATION -->
                            <ul class="navbar-nav">
                                <!-- NAVIGATION ITEM & NAVIGATION LINK-->
                                <li class="nav-item"><a id="0" href="./index.html#welcoming" class="nav-link">HOME</a></li>
                                <!-- NAVIGATION ITEM & NAVIGATION LINK-->
                                <li class="nav-item"><a id="1" href="./index.html#professional" class="nav-link">PROFESSIONAL</a></li>
                                <!-- NAVIGATION ITEM & NAVIGATION LINK-->
                                <li class="nav-item"><a id="2" href="./index.html#experience" class="nav-link">EXPERIENCE</a></li>
                                <!-- NAVIGATION ITEM & NAVIGATION LINK-->
                                <li class="nav-item"><a id="3" href="./portfolio.html" class="nav-link">PORTFOLIO</a></li>
                                <!-- NAVIGATION ITEM & NAVIGATION LINK-->
                                <li class="nav-item"><a id="4" href="./index.html#contact" class="nav-link">CONTACT</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        `;
    }
}
customElements.define('header-component', Header);

const navigationLink = document.querySelectorAll('.nav-link');
navigationLink.forEach(navLinks => {
    navLinks.addEventListener('click', (event) => {
        // GET THE ID OF THE BUTTON LINK
        let linkIdBtn = event.target.id;
        // console.log(linkIdBtn);
        // REMOVE THE ACTIVE CLASS ON THE PREVIOUS BUTTON
        navigationLink.forEach(navLink => navLink.classList.remove('active'));
        if(linkIdBtn == 0) {
            navLinks.classList.add('active');
        }
        else if(linkIdBtn == 1) {
            navLinks.classList.add('active');
        }
        else if(linkIdBtn == 2) {
            navLinks.classList.add('active');
        }
        else if(linkIdBtn == 3) {
            navLinks.classList.add('active');
        }
        else if(linkIdBtn == 4) {
            navLinks.classList.add('active');
        }
        else {
            return navigationLink;
        }
    });
});
// IF THE PAGE IS IN THE PORTFOLIO ADD ACTIVE CLASS IN NAVIGATION LINK
if(window.location == 'https://joshmarveycruz.netlify.app/portfolio') {
    document.getElementById('3').classList.add('active');
}
else if(window.location == 'https://joshiekurusu.github.io/portfolio.html') {
    document.getElementById('3').classList.add('active');
}
else if(window.location == 'http://127.0.0.1:5501/portfolio.html') {
    document.getElementById('3').classList.add('active');
}
else {
    document.getElementById('3').classList.remove('active');
}
