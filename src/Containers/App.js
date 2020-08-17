import React, { Component } from 'react';
import './App.css';
import Persons from "../Components/Persons/Persons";
import Cockpit from "../Components/Cockpit/Cockpit";

class App extends Component {

    state = {
        persons: [
            {
                id: 'qw1',
                name: 'Dhwani',
                age: 29
            },
            {
                id: 'vhj2',
                name: 'Vaidehi',
                age: 25
            },
            {
                id: 'hjk0',
                name: 'Saloni',
                age: 24
            }
        ],
        showPersons: false,
    }

    togglePersonListHandler = () => {
        // const fuckYou = this.state.showPersons;
        this.setState({ showPersons: !(this.state.showPersons) });
    }

    deletePersonHandler = (event, index) => {
        console.log('event : ', event.target);
        const persons = [...this.state.persons];
        persons.splice(index, 1);
        this.setState({persons: persons});
    }

    nameChangedHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex((p) => {
            return p.id === id;
        });


        // this will return just pointer to actual object
        // so, in this case we gonna change the person state object directly
        // make sure not to use this ever
        // const person = this.state.persons[personIndex];
        // ALWAYS USE SPREAD OPERATOR OT SPLICE FOR FOR ARRAY
        const person = {...this.state.persons[personIndex]};
        person.name = event.target.value;

        const persons = [...this.state.persons];
        persons[personIndex] = person;

        this.setState({persons: persons});

    }

    render() {

        let persons = null;

        if(this.state.showPersons) {
            persons = <Persons persons={this.state.persons}
                               clicked={this.deletePersonHandler}
                               changed={this.nameChangedHandler}/>
        }

        return (
            <div className="App">
                <Cockpit clicked={() => this.togglePersonListHandler()}></Cockpit>
                { persons }
            </div>
        );
    }
}

export default App;
