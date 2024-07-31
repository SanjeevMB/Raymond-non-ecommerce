class BannerCarousel extends HTMLElement{
    constructor(){
        super();
        this.id = this.getAttribute('id');
    }

    connectedCallback(){
        new Splide(`#${this.id}`, {
            arrows: false,
            pagination: false,
            perPage: 3,
            gap: '16px',
            drag: false,
            breakpoints:{
              980: {
                type: 'slide',
                perPage: 1,
                pagination: true,
                arrows: false,
                rewind: true,
                drag: true,
              }
            }
          }).mount();
    }
}

customElements.define('banner-carousel', BannerCarousel)