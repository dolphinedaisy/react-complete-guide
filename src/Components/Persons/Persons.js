import React from "react";
import Person from "./Person/Person";

const Persons = (props) => props.persons.map((person, index) => {
        return <Person key={person.id}
                       click={(event) => props.clicked(event, index)}
                       changed={(event) => props.changed(event, person.id)}
                       name={person.name}
                       age={person.age}/>
    });

export default Persons;
