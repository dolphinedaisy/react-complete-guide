import React, { Component } from 'react';
import './App.css';
// word after import can be anything, but best practice is using component name starting with capital character
// any tag starts with lowercase is used for built in tags like <div>, <h1>
// so custom component tag start with capital letter is best practice
// and can be easily differentiated
import Person from "./Person/Person";

class App extends Component {

    updatedPerson = {
        persons: [
            {
                name: 'Dhwani Joshi',
                age: 29
            },
            {
                name: 'Vaidehi',
                age: 25
            },
            {
                name: 'Saloni',
                age: 20
            }
        ],
    }
    state = {
        persons: [
            {
                name: 'Dhwani',
                age: 29
            },
            {
                name: 'Vaidehi',
                age: 25
            },
            {
                name: 'Saloni',
                age: 24
            }
        ],
    }

    switchNameHandler = () => {
        this.setState(this.updatedPerson);
    }

    render() {
        return (
            <div className="App">
                <h1>Hi, I am REACT App</h1>
                <p>This is actually working !!</p>
                <button className="btn btn-primary mb-3" onClick={this.switchNameHandler}>Switch Names</button>
                {/*this adding round bracket will call the function immediately, so do not use round bracket, just assign the handler*/}
                {/*<button className="btn btn-primary" onClick={this.switchNameHandler()}>Switch Names</button>*/}
                <Person clickLabel={ this.switchNameHandler }
                        name={ this.state.persons[0].name }
                        age={ this.state.persons[0].age } ></Person>
                <Person name={ this.state.persons[1].name } age={ this.state.persons[1].age } >Dancing and painting</Person>
                <Person name={ this.state.persons[2].name } age={ this.state.persons[2].age } ></Person>
            </div>
        );
    }
}

export default App;
