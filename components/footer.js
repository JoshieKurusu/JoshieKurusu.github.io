class Footer extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
        this.innerHTML = `
            <footer>
                <div class="container-fluid">
                    <!-- Logo w/ Home Link -->
                    <a href="./index.html"><img src="./img/logo/J__Logo-BlueGreen-removebg.png" alt="Joshie"></a>
                    <!-- Text w/ Wix Link -->
                    <div class="text">
                        <p>&copy 2023 by Josh Marvey Cruz. Proudly designed with <a href="https://www.wix.com/" target="_blank">Wix</a></p>
                    </div>
                </div>
            </footer>
        `;
    }
  }
  customElements.define('footer-component', Footer);