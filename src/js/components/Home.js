import { select, templates } from '../settings.js';
/* global Flickity */
/* global app */

class Home {
  constructor(element) {
    const thisHome = this;
    thisHome.render(element);
    thisHome.initWidgets();
  }

  render(element) {
    const thisHome = this;
    const generatedHTML = templates.homeWidget();
    thisHome.dom = {};
    thisHome.dom.wrapper = element;
    thisHome.dom.wrapper.innerHTML = generatedHTML;
  }

  initWidgets() {
    const thisHome = this;
    const carouselElem = thisHome.dom.wrapper.querySelector('.main-carousel');
    thisHome.flickity = new Flickity(carouselElem, {
      cellAlign: 'left',
      contain: true,
      pageDots: true,
      wrapAround: true,
      autoPlay: 3000,
      imagesLoaded: true,
    });

    thisHome.dom.wrapper
      .querySelector(select.widgets.home.homeOrder)
      .addEventListener('click', () => {
        app.activatePage('order');
        window.location.hash = '#/order';
      });

    thisHome.dom.wrapper
      .querySelector(select.widgets.home.homeBook)
      .addEventListener('click', () => {
        app.activatePage('booking');
        window.location.hash = '#/booking';
      });
  }
}

export default Home;
