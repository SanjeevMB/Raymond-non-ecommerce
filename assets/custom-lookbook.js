document.addEventListener('DOMContentLoaded', function () {
    new Splide('#lookbook', {
      type: 'loop',
      perMove: 1,
      focus: 0,
      perPage: 1,
      gap:'20px',
      padding: { right: '40%' }, 
      height:'51.7rem',
      breakpoints: {
        768: {
          perPage: 1,
           padding: { right: '0%' },
           height:'25rem',
           gap:'0px'
        }
      }
    }).mount();
  });



  //
  document.addEventListener('DOMContentLoaded', function () {
    new Splide('#diwali-slider', {
      type: 'slide',
      perMove: 1,
      perPage: 3,
      gap: '40px',
      breakpoints: {
        768: {
          perPage: 1,
        }
      }
    }).mount();
  });