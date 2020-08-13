import React, { Component } from 'react';
import './App.css';
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

    render() {

        let persons = null;

        if(this.state.showPersons) {
            persons = (
                <div>
                    {
                        this.state.persons.map((person, index) => {
                            return <Person key={index}
                                           click={this.deletePersonHandler.bind(this, index)}
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
