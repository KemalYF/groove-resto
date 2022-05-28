class HeroSection extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="hero">
            <div class="hero__inner">
                <h1 tabindex="0" class="hero__title">The Groove Restaurant</h1>
                <h4 class="hero__about">
                    <a tabindex="0" href="#about">About Resto</a>
                </h4>
            </div>
        </div>
        `;
  }
}

customElements.define('hero-section', HeroSection);
