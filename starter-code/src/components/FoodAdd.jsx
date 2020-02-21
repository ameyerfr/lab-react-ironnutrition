import React, { Component } from 'react';

class FoodAdd extends Component {

  onChange = (e) => {
    this.setState({[e.target.name] : e.target.value })
  }

  render() {
    return (
      <form onChange={this.onChange} onSubmit={ (e) => this.props.clbk(e, {...this.state} )} >

        <div className="field">
          <label className="label">Name</label>
          <div className="control">
            <input className="input" type="text" placeholder="Food name" name="name" />
          </div>
        </div>

        <div className="field">
          <label className="label">Calories</label>
          <div className="control">
            <input className="input" type="text" placeholder="Calories / serving" name="calories" />
          </div>
        </div>

        <div className="field">
          <label className="label">Image url</label>
          <div className="control">
            <input className="input" type="text" placeholder="Image url" name="image" />
          </div>
        </div>

        <div className="control">
          <button type="submit" className="button is-link">Add food</button>
        </div>

      </form>
    )
  }

}

export default FoodAdd;
