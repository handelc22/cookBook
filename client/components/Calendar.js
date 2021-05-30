import React from 'react';
import { Carousel, Button } from 'react-bootstrap';
import CalendarDay from './CalendarDay';

const Calendar = ({ date, shiftWeekForward, shiftWeekBackwards }) => {
  if (date) {
    var week = new Array(7).fill(0).map((space, index) => {
      var startingDate = date.getDate();
      var currentDate = new Date(date);
      currentDate.setDate(startingDate + index);
      return currentDate;
    });
  }

  return date ? (
    <div className='calendar'>
      <Button variant="light" onClick={shiftWeekBackwards} style={{ position: 'relative', left: '2.5%' }}>{'<'}</Button>
      <div className="current-week" style={{ maxWidth: 'calc(90% - 64px)', display: 'inline-block', margin: 'auto' }}>
        {week.map((day, index) => <CalendarDay key={index} date={day} index={index}/>)}
      </div>
      <Button variant="light" onClick={shiftWeekBackwards} style={{ position: 'relative', right: '2.5%' }}>{'>'}</Button>
    </div>
  ) : null;
}

export default Calendar;