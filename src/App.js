import React, { Component } from "react";
import "./App.css";
import * as Persons from './components/Persons'

class App extends Component {
  state = {
    selectedPerson: ""
  };

  renderSelector() {
    return (
      <div className="selector">
        <label htmlFor="">Select Person</label>
        <select
          name=""
          id=""
          onChange={e => {
            this.setState({
              selectedPerson: e.target.value
            });
          }}
        >
          <option />
          <option>PersonA</option>
          <option>PersonB</option>
        </select>
      </div>
    );
  }

  renderSelecterPerson(selectedPerson) {
    if(!selectedPerson) {
      return null;
    }

    const Person = Persons[selectedPerson]
    return <Person />
  }

  render() {
    console.log(this.state.selectedPerson);
    return (
      <div className="app">
        <h1>Select persons</h1>
        {this.renderSelector()}
        <section>
          {this.renderSelecterPerson(this.state.selectedPerson)}
        </section>
      </div>
    );
  }
}




export default App;
