import React from 'react';
import './App.css';

function App() {
    // this is jsx or js not HTML, behind the scenes it will compile into line written below in the comment
    // see the className attr, in HTML we write just class not className
    return (
        <div className="App">
            <h1>Hi, I am REACT App</h1>
        </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work ?'));
}

export default App;
