import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';

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
      date: new Date(),
      dateCarouselIndex: 0
    }
    this.newRecipeModal = this.newRecipeModal.bind(this);
    this.handleDateCarouselIndexShift = this.handleDateCarouselIndexShift.bind(this);
  }

  newRecipeModal() {
    this.setState({ showNewRecipeForm: !this.state.showNewRecipeForm });
  }

  handleDateCarouselIndexShift = (selectedIndex, e) => {
    console.log('hit me', selectedIndex);
    this.setState({ dateCarouselIndex: selectedIndex });
  };

  render() {
    return (
      <Router>
        <NavBar />
        <Calendar date={this.state.date} handleDateCarouselIndexShift={this.handleDateCarouselIndexShift} dateCarouselIndex={this.state.dateCarouselIndex}/>

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