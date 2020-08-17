import React, { Component } from "react";
import Person from "./Person/Person";

class Persons extends Component {

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('----------------------------------------------');
        console.log('Persons.js getSnapshotBeforeUpdate');
        console.log('Persons.js prevProps: ', prevProps);
        console.log('Persons.js prevState: ', prevState);
        console.log('----------------------------------------------');
        return {message: "I will buy that house"};
    }

    static getDerivedStateFromProps(props, state) {
        console.log('Persons.js getDerivedStateFromProps: ', props);
        return state;
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log('Persons.js shouldComponentUpdate');
        return true;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('----------------------------------------------');
        console.log('Persons.js componentDidUpdate');
        console.log('snapshot: ', snapshot);
        console.log('----------------------------------------------');
    }

    render() {
        console.log('Persons.js render()');
        return this.props.persons.map((person, index) => {
            return (
                <Person key={person.id}
                        click={(event) => this.props.clicked(event, index)}
                        changed={(event) => this.props.changed(event, person.id)}
                        name={person.name}
                        age={person.age}/>
            );
        })
    }
}

export default Persons;
