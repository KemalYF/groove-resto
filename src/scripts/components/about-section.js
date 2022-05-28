class AboutSection extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <section id="about" class="about__content">
            <div class="container_img_about">
                <picture>
                    <img tabindex="0" class="img__about lazyload" data-src="../images/groove-resto-large.jpg" alt="Groove Resto Logo">
                </picture>
            </div>
            <div class="about__details">
                <h2 tabindex="0" class="about__title">
                    ABOUT GROOVE RESTAURANT
                </h2>
                <p tabindex="0" class="about__description">
                    GROOVE Restaurant, Patio and Ballroom is the newest offshoot of PIER 22, the award-winning waterfront destination headed by restaurateurs Hugh Miller and Greg Campbell. 
                    A fine-casual restaurant, GROOVE specializes in a wide-ranging selection of house-made meals served in several distinct dining areas giving guests a choice of cuisine and scene.
                </p>
                <p tabindex="0" class="about__description">
                    The restaurant draws its name from the sown acres of great evergreen that have long provided an idyllic existence for those living and visiting the Lakewood Ranch area. 
                    The pine found in our logo embodies elements of our values including heart, balance and spirit. GROOVE is re imagining an immersive dining experience, 
                    and "We're committed to using quality fresh ingredients along with innovative cooking methods to inspire, nourish and wholly satisfy our guests," notes chef Greg Campbell.
                </p>
            </div>
        </section>
        `;
  }
}

customElements.define('about-section', AboutSection);
