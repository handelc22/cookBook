import React from 'react';
import { Card, Button } from 'react-bootstrap';

var weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const CalendarDay = ({ date }) => {
  return (
    <Card style={{ width: '18rem', display: 'inline-block' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{weekday[date.getDay()]}</Card.Title>
        <Card.Title>{`${date.toString().slice(4, 10)},${date.toString().slice(10, 15)}`}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of
          the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  )
}

export default CalendarDay;