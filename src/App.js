import React, { Component } from 'react';
import './App.css';
// word after import can be anything, but best practice is using component name starting with capital character
// any tag starts with lowercase is used for built in tags like <div>, <h1>
// so custom component tag start with capital letter is best practice
// and can be easily differentiated
import Person from "./Person/Person";

class App extends Component {

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

    switchNameHandler = (newName, newAge) => {
        this.setState({
            persons: [
                {
                    name: newName,
                    age: newAge
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
        });
    }

    nameChangedHandler = (event) => {
        this.setState({
            persons: [
                {
                    name: 'Dhwani',
                    age: 10
                },
                {
                    name: 'Vaidehi',
                    age: 25
                },
                {
                    name: event.target.value,
                    age: 20
                }
            ],
        });
    }

    render() {
        return (
            <div className="App">
                <h1>Hi, I am REACT App</h1>
                <p>This is actually working !!</p>
                {/*<button className="btn btn-primary mb-3" onClick={ this.switchNameHandler.bind(this, 'Dhwani Joshi', 27)}>Switch Names</button>*/}
                {/*do not use following onClick way to write click event, react can render certain thins, too often so this can be inefficient way*/}
                <button className="btn btn-primary mb-3" onClick={() => this.switchNameHandler('Dhwani Joshi', 27)}>Switch Names</button>
                {/*this adding round bracket will call the function immediately, so do not use round bracket, just assign the handler*/}
                {/*<button className="btn btn-primary" onClick={this.switchNameHandler()}>Switch Names</button>*/}
                <Person clickLabel={ this.switchNameHandler.bind(this, 'Aparna', 19) }
                        name={ this.state.persons[0].name }
                        age={ this.state.persons[0].age } ></Person>
                <Person name={ this.state.persons[1].name } age={ this.state.persons[1].age } >Dancing and painting</Person>
                <Person changed={ this.nameChangedHandler }
                        name={ this.state.persons[2].name }
                        age={ this.state.persons[2].age } ></Person>
            </div>
        );
    }
}

export default App;
