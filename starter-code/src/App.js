import React, { Component } from 'react';
import FoodBox from './components/FoodBox';
import FoodAdd from './components/FoodAdd';
import 'bulma/css/bulma.css';
import './App.css';

import foodList from './foods.json';

class App extends Component {

  constructor(props) {
    super(props);
    this.addForm = React.createRef();
  }

  state = {
    foodItems : []
  }

  showAddForm = () => {
    this.addForm.current.classList.remove('is-hidden');
  }

  onFormSubmit = (e, formValues) => {
    e.preventDefault();
    this.setState({ foodItems : [...this.state.foodItems, formValues] })
    this.addForm.current.classList.add('is-hidden');
  }

  getAllFoods = () => {
    return foodList.concat(this.state.foodItems);
  }

  render() {
    return (
      <div id="root" className="App">
        <div className="container">

          <div><button onClick={this.showAddForm} className="button">ADD FOOD</button></div>

          <div className="columns">

            <div className="column">
              <div className="foodList">
                {this.getAllFoods().map((food, i) => (
                  <FoodBox food={food} key={i} />
                ))}
              </div>
            </div>

            <div className="column">

              <div ref={this.addForm} className="is-hidden" >
                <FoodAdd clbk={this.onFormSubmit} />
              </div>

            </div>

          </div>

        </div>

      </div>
    );
  }
}

export default App;
