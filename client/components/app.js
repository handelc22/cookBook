import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';
import $ from 'jquery';

import NavBar from './NavBar';
import GroceryList from './GroceryList';
import NewRecipe from './NewRecipe';
import Calendar from './Calendar';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groceries: [{name: 'apples', quantity: 5}, {name: 'oranges', quantity: 3}],
      showNewRecipeForm: false,
      date: ''
    }
    this.newRecipeModal = this.newRecipeModal.bind(this);
    this.shiftWeekForward = this.shiftWeekForward.bind(this);
    this.shiftWeekBackwards = this.shiftWeekBackwards.bind(this);
  }

  componentDidMount() {
    var currentDay = new Date();
    var sundayOfCurrentWeek = new Date(currentDay);
    sundayOfCurrentWeek.setDate(currentDay.getDate() - currentDay.getDay());
    this.setState({ date: sundayOfCurrentWeek });
    // d = new Date(d);
    // var day = d.getDay(),
    //     diff = d.getDate() - day + (day == 0 ? -6:1); // adjust when day is sunday
    // return new Date(d.setDate(diff));
  }

  newRecipeModal() {
    this.setState({ showNewRecipeForm: !this.state.showNewRecipeForm });
  }

  shiftFunc(dateChange) {
    var _this = this;
    $('.current-week').animate({
      'opacity': 0
    }, 200, function() {
      var newDate = new Date(_this.state.date);
      newDate.setDate(_this.state.date.getDate() + dateChange);
      _this.setState({ date: newDate });
      $('.current-week').animate({
        'opacity': 1
      }, 200);
    });
  }

  shiftWeekForward() {
    this.shiftFunc(7);
  }

  shiftWeekBackwards() {
    this.shiftFunc(-7);
  }

  render() {
    return (
      <Router>
        <NavBar />
        <Calendar date={this.state.date} shiftWeekForward={this.shiftWeekForward} shiftWeekBackwards={this.shiftWeekBackwards}/>

        <Button variant="primary" onClick={this.newRecipeModal}>
          Add New Recipe
        </Button>

        <Modal show={this.state.showNewRecipeForm} onHide={this.newRecipeModal}>
          <Modal.Header closeButton>
            <Modal.Title>New Recipe</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <NewRecipe />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.newRecipeModal}>
              Close
            </Button>
            <Button variant="primary" onClick={this.newRecipeModal}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>

        <Switch>
          <Route path='/groceries'>
            <GroceryList groceries={this.state.groceries} />
          </Route>
        </Switch>
      </Router>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));