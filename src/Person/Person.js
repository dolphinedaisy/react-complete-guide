import React from 'react';

// ES6 equivalent of normal function declaration
const person = () => {
    return <p>I am a person.</p>
};
// make sure not to add round bracket other error will be there - ×
// Error: Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: object.
// export default person();
export default person;
