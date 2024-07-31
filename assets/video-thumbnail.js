const mainElement = document.querySelectorAll('.video-thumbnail__main-slider');
const thumbnailCarousel = document.querySelectorAll('.video-thumbnail-slider');
if (mainElement.length > 0 && thumbnailCarousel.length > 0) {
  mainElement.forEach((element, index) => {
    const mainThumbnailSlider = new Splide(element, {
      type: 'slide',
      pagination: false,
      arrows: false,
      cover: true,
      lazyLoad: 'sequential',
      breakpoints: {}
    }).mount();

    const thumbnailSlider = new Splide(thumbnailCarousel[index], {
      fixedHeight: 150,
      isNavigation: true,
      gap: 20,
      focus: 'left',
      cover: true,
      lazyLoad: 'sequential',
      pagination: false,
      arrows: true,
      perPage: 5,
      classes: {
        pagination: 'splide__pagination ibc_pagination',
        page: 'splide__pagination__page ibc_page',
      },
      breakpoints: {
        750: {
          fixedHeight: 100,
          pagination: true,
          arrows: true,
          gap: 10,
          perPage: 3
        },
      }
    }).mount();
    
    mainThumbnailSlider.sync(thumbnailSlider);
    mainThumbnailSlider.mount();
    thumbnailSlider.mount();
  });
}
