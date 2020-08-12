import React from 'react';

// ES6 equivalent of normal function declaration
const person = (props) => {
    // single braces says that this part should be executed as javascript and not as normal text.
    // return <p>I am a person. I am 2020 - 1994 years old</p>
    return <p>I am a person - <b>{ props.name }</b> I am <b> { props.age } </b> years old</p>
};
// make sure not to add round bracket other error will be there - ×
// Error: Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: object.
// export default person();
export default person;
