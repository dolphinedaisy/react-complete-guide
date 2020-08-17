import React, { PureComponent } from "react";
import Person from "./Person/Person";

class Persons extends PureComponent {

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
