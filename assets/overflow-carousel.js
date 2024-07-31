class SplideCarousel extends HTMLElement {
  constructor() {
      super();
      this.id = this.getAttribute('id');
      this.perPageDesktop = parseInt(this.dataset.desktopPerPage) || 1;
      this.perpageMobile = parseInt(this.dataset.mobilePerPage) || 1;
      this.gapValueDesktop = parseInt(this.dataset.gapDesktop) || 0;
      this.gapValueMobile = parseInt(this.dataset.gapMobile) || 0;
      this.arrowDesktop = this.dataset.desktopArrow === 'true' ? true : false;
      this.arrowMobile = this.dataset.mobileArrow === 'true' ? true : false;
      this.paginationDesktop = this.dataset.desktopPagination === 'true' ? true : false;
      this.paginationMobile = this.dataset.mobilePagination === 'true' ? true : false;
      this.mobilePaddingLeft = this.dataset.leftPaddingMobile || '0px';
      this.mobilePaddingRight = this.dataset.rightPaddingMobile || '0px';
      this.desktopPaddingLeft = this.dataset.leftPaddingDesktop || '0px';
      this.desktopPaddingRight = this.dataset.rightPaddingDesktop || '0px';
      this.autoplay = this.dataset.autoplay === 'true' ? true : false;
  }
  connectedCallback() {
      new Splide(`#${this.id}`, {
          type: 'slide',
          rewind: false,
          rewindSpeed: 1000,
          start: 0,
          perMove: 1,
          autoplay: this.autoplay,
          drag: true,
          perPage: this.perPageDesktop,
          gap: `${this.gapValueDesktop}px`,
          arrows: this.arrowDesktop,
          pagination: this.paginationDesktop,
          interval: 3000,
          padding: { left: this.desktopPaddingLeft, right: this.desktopPaddingRight },
          classes: {
              pagination: 'splide__pagination ibc_pagination',
              page: 'splide__pagination__page ibc_page',
          },
          breakpoints: {
              767: {
                  perPage: this.perpageMobile,
                  arrows: this.arrowMobile,
                  pagination: this.paginationMobile,
                  gap: `${this.gapValueMobile}px`,
                  padding: { left: this.mobilePaddingLeft, right: `${this.mobilePaddingRight}px` },
              }
          }
      }).mount();
  }
}

customElements.define('splide-carousel', SplideCarousel);