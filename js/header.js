class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = 
`<nav class="navbar navbar-expand-md navbar-secondary">
<div class="container-fluid">
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon">More<i class="fa fa-caret-down" aria-hidden="true"></i></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" href="../../index.html">About Me</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href=".././html/carousel.html">Places I Love</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href=".././html/coffee.html">Coffee</a>
      </li>
    </ul>
  </div>
</div>
</nav>`;
  }
}

customElements.define('header-component', Header);