import React from 'react';
import './App.css';
// word after import can be anything, but best practice is using component name starting with capital character
// any tag starts with lowercase is used for built in tags like <div>, <h1>
// so custom component tag start with capital letter is best practice
// and can be easily differentiated
import Person from "./Person/Person";

function App() {
    // this is jsx or js not HTML, behind the scenes it will compile into line written below in the comment
    // see the className attr, in HTML we write just class not className
    return (
        <div className="App">
            <h1>Hi, I am REACT App</h1>
            <p>This is actually working !!</p>
            <Person name="Dhwani" age="26" ></Person>
            <Person name="Sangana" age="27" >Dancing and painting</Person>
            <Person name="Abhi" age="28" ></Person>
        </div>
    );

    // return (
    //     <div className="App">
    //         <h1>Hi, I am REACT App</h1>
    //     </div>
    //     <h1>Hello, this is not possible</h1>
    // );
    // JSX expression must have one root element
    // with JSX you can not return adjacent elements. There must be one and only one root element should be returned

    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work ?'));
}

export default App;
