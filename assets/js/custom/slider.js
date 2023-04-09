window.addEventListener('DOMContentLoaded', () => {
    const sliderElem = document.querySelector('.spotlights__slider');
    const slider = new Flickity(sliderElem, {
         wrapAround: false,
         cellAlign: 'left',
    });

   
    Fancybox.bind("[data-fancybox]", {
        groupAll: true
      });
})