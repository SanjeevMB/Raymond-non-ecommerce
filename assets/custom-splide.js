class SplideSlider extends HTMLElement {
    constructor() {
        super();
        this.id = this.getAttribute('id');
    }
    connectedCallback() {
        const splide = new Splide(`#${this.id}`, {
            type: 'slide',
            rewind: true,
            snap: true,
            perPage: 2,
            padding: {
                right: '25%'
            },
            gap: '2rem',
            arrows: false,
            pagination: false,
            breakpoints: {
                749: {
                    perPage: 1,
                    gap: '1.6rem',
                    padding: {
                        right: '43%'
                    },
                    pagination: false,
                    autoScroll: false,
                },
                980: {
                    perPage: 1,
                    gap: '1.6rem',
                    padding: {
                        right: '43%'
                    },
                    pagination: false,
                    autoScroll: false,
                }
            }
        });

        const bar = splide.root.querySelector('.my-slider-progress-bar');
        splide.on( 'mounted move', function () {
            var end  = splide.Components.Controller.getEnd() + 1;
            var rate = Math.min(( splide.index + 1 ) / end, 1 );
            bar.style.width = String( 100 * rate ) + '%';
            console.log(bar.style.width);
          });
        splide.mount();
    }
}
customElements.define('splide-slider', SplideSlider);