import { templates } from '../settings.js';
/* global Flickity */

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
      wrapAround: true,
    });
  }
}

export default Home;
