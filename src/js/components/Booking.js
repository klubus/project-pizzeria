import { select, templates } from '../settings.js';
import AmountWidget from './AmountWidget.js';

class Booking {
  constructor(element) {
    const thisBooking = this;

    thisBooking.render(element);
    thisBooking.initWidgets();
  }

  render(element) {
    const thisBooking = this;

    const generatedHTML = templates.bookingWidget();

    thisBooking.dom = {};
    thisBooking.dom.wrapper = element;
    thisBooking.dom.wrapper.innerHTML = generatedHTML;

    thisBooking.dom.peopleAmount = thisBooking.dom.wrapper.querySelector(
      select.widgets.booking.peopleAmount
    );
    thisBooking.dom.hoursAmount = thisBooking.dom.wrapper.querySelector(
      select.widgets.booking.hoursAmount
    );
  }
  initWidgets() {
    const thisBooking = this;
    thisBooking.amountWidgetPeople = new AmountWidget(
      thisBooking.dom.peopleAmount
    );
    thisBooking.amountWidgetHours = new AmountWidget(
      thisBooking.dom.hoursAmount
    );

    thisBooking.amountWidgetPeople.addEventListener('updated', function () {});

    thisBooking.amountWidgetHours.addEventListener('updated', function () {});
  }
}

export default Booking;
