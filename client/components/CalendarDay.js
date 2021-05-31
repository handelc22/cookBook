import React from 'react';
import { Card, Button } from 'react-bootstrap';

var weekday = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

const CalendarDay = ({ date, index }) => {
  return (
    <Card className={`day-${index}`} style={{ display: 'inline-block', margin: '5px', width: '15%', backgroundColor: '#eee', border: 'none' }}>
      <Card.Body>
        <Card.Title className='calendar-day' style={{ backgroundColor: '#fff', color: '#000', backgroundColor: '#eee' }}>{weekday[date.getDay()]}</Card.Title>
        <Card.Title className='calendar-date' style={{ textAlign: 'center' }}>{date.getDate()}</Card.Title>
        <Card.Text style={{ height: '200px', overflow: 'scroll', paddingTop: '5px' }}>
          <span className='calendar-row'>
            <span className='time'>
              8 AM
            </span>
            <span className='calendar-block first'></span>
          </span>
          <span className='calendar-row'>
            <span className='time'>
              9 AM
            </span>
            <span className='calendar-block'></span>
          </span>
          <span className='calendar-row'>
            <span className='time'>
              10 AM
            </span>
            <span className='calendar-block'></span>
          </span>
          <span className='calendar-row'>
            <span className='time'>
              11 AM
            </span>
            <span className='calendar-block'></span>
          </span>
          <span className='calendar-row'>
            <span className='time'>
              12 PM
            </span>
            <span className='calendar-block'></span>
          </span>
          <span className='calendar-row'>
            <span className='time'>
              1 PM
            </span>
            <span className='calendar-block'></span>
          </span>
          <span className='calendar-row'>
            <span className='time'>
              2 PM
            </span>
            <span className='calendar-block'></span>
          </span>
          <span className='calendar-row'>
            <span className='time'>
              3 PM
            </span>
            <span className='calendar-block'></span>
          </span>
          <span className='calendar-row'>
            <span className='time'>
              4 PM
            </span>
            <span className='calendar-block'></span>
          </span>
          <span className='calendar-row'>
            <span className='time'>
              5 PM
            </span>
            <span className='calendar-block'></span>
          </span>
          <span className='calendar-row'>
            <span className='time'>
              6 PM
            </span>
            <span className='calendar-block'></span>
          </span>
          <span className='calendar-row'>
            <span className='time'>
              7 PM
            </span>
            <span className='calendar-block'></span>
          </span>
          <span className='calendar-row'>
            <span className='time'>
              8 PM
            </span>
            <span className='calendar-block'></span>
          </span>
          <span className='calendar-row'>
            <span className='time'>
              9 PM
            </span>
            <span className='calendar-block'></span>
          </span>
          <span className='calendar-row'>
            <span className='time'>
              10 PM
            </span>
          </span>
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  )
}

export default CalendarDay;