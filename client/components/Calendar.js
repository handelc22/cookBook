import React from 'react';
import { Carousel, Button } from 'react-bootstrap';
import CalendarDay from './CalendarDay';

const Calendar = ({ date, shiftWeekForward, shiftWeekBackwards }) => {
  if (date) {
    var startingDate = date.getDate();
    var week = new Array(7).fill(0).map((space, index) => {
      var startingDate = date.getDate();
      var currentDate = new Date(date);
      currentDate.setDate(startingDate + index);
      return currentDate;
    });

    var yearAtStartOfWeek = date.getFullYear();
    var monthAtStartOfWeek = date.toString().slice(4, 7);
    var monthAtEndOfWeek = new Date(date);
    monthAtEndOfWeek.setDate(startingDate + 7);
    var yearAtEndOfWeek = monthAtEndOfWeek.getFullYear();
    monthAtEndOfWeek = monthAtEndOfWeek.toString().slice(4, 7);
    if (monthAtStartOfWeek !== monthAtEndOfWeek) {
      if (yearAtStartOfWeek !== yearAtEndOfWeek) {
        var month = `${monthAtStartOfWeek} ${yearAtStartOfWeek} - ${monthAtEndOfWeek} ${yearAtEndOfWeek}`
      } else {
        var month = `${monthAtStartOfWeek} - ${monthAtEndOfWeek} ${yearAtStartOfWeek}`
      }
    } else {
      var month = `${monthAtStartOfWeek} ${yearAtStartOfWeek}`;
    }
  }


  return date ? (
    <div className='calendar' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '80px', position: 'relative' }}>

      <div style={{ position: 'absolute', top: '10px' }}>
        {month}
      </div>

      {/* <Card.Title className='calendar-date'>{`${date.toString().slice(4, 10)},${date.toString().slice(10, 15)}`}</Card.Title> */}
      <Button variant="light" onClick={shiftWeekBackwards} style={{ margin: '1%' }}>{'<'}</Button>
      <div className="current-week" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '90%' }}>
        {week.map((day, index) => <CalendarDay key={index} date={day} index={index}/>)}
      </div>
      <Button variant="light" onClick={shiftWeekForward} style={{ margin: '1%' }}>{'>'}</Button>
    </div>
  ) : null;
}

export default Calendar;