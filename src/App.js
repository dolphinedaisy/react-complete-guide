import React, { Component } from 'react';
import './App.css';
import Person from "./Person/Person";

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

    deletePersonHandler = (index) => {
        const persons = [...this.state.persons];
        persons.splice(index, 1);
        this.setState({persons: persons});
    }

    nameChangedHandler = (event, id) => {
        debugger
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
            persons = (
                <div>
                    {
                        this.state.persons.map((person, index) => {
                            return <Person key={person.id}
                                           click={this.deletePersonHandler.bind(this, person.id)}
                                           changed={(event) => this.nameChangedHandler(event, person.id)}
                                           name={person.name}
                                           age={person.age}/>
                        })
                    }
                </div>
            );
        }

        // whatever style written here inside is scoped to the component, it is NOT GLOBAL.
        // restriction are there, like you can not add :hover lie pseudo class
        const btnStyleGreen = {
            'color': '#fff',
            'backgroundColor': '#28a745',
            'borderColor': '#28a745',
        }

        return (
            <div className="App">
                <h1>Hi, I am REACT App</h1>
                <p>This is actually working !!</p>

                <button style={ btnStyleGreen } className="btn mb-3"
                        onClick={() => this.togglePersonListHandler()}>Toggle</button>

                { persons }

            </div>
        );
    }
}

export default App;
