import React from 'react';
import { Carousel } from 'react-bootstrap';
import CalendarDay from './CalendarDay';

const Calendar = ({ date, handleDateCarouselIndexShift, dateCarouselIndex }) => {
  var week = new Array(7).fill(0).map((space, index) => {
    var startingDate = date.getDate();
    var currentDate = new Date(date);
    currentDate.setDate(startingDate + index);
    return currentDate;
  });

  console.log('dateCarouselIndex:', dateCarouselIndex);

  return (
    <Carousel activeIndex={dateCarouselIndex} onSelect={handleDateCarouselIndexShift}>
      <Carousel.Item>
        {week.map((day, index) => <CalendarDay key={index} date={day} />)}
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Second slide&bg=282c34"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=20232a"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Calendar;