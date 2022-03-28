class Footer extends HTMLElement {
    constructor() {
      super();
    }
  
connectedCallback() {
    this.innerHTML = 
`<footer class="d-flex flex-row align-content-center justify-content-center fixed-bottom">
<div id="contact">
  <p>Connect with Me : </p>
    <!-- social icons -->
  <a href= "mailto:minka.tan@gmail.com">minka.tan@gmail.com</a>
</div>
<div>
  <a href="https://github.com/minkatan"><i class="fab fa-github"></i></a>
  <a href="https://twitter.com/tan_minka"><i class="fab fa-twitter"></i></a>
  <a href="https://www.linkedin.com/in/minkatan/"><i class="fab fa-linkedin"></i></a>
</div>
</footer>
`
    }
  }

  customElements.define('footer-component', Footer);