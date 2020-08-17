import React, { Component } from 'react';
import './Person.css';
// ES6 equivalent of normal function declaration
class Person extends Component {

    componentWillUnmount() {
        console.log('Person.js componentWillUnmount');
    }

    render() {
        console.log('Person.js render()')
        // single braces says that this part should be executed as javascript and not as normal text.
        // return <p>I am a person. I am 2020 - 1994 years old</p>
        return (
            <div className={'Person mb-2'}>
                <button data-delete="qwerty" onClick={ this.props.click } className={'btn btn-danger'}>Delete</button>
                <p>My name is <b>{ this.props.name }</b>  and I am <b> { this.props.age } </b> years old</p>
                <p>My hobbies are { this.props.children ? this.props.children : 'Nothing' }</p>
                <input type="text" onChange={this.props.changed} value={ this.props.name }/>
            </div>
        );
    }
}
// make sure not to add round bracket other error will be there - ×
// Error: Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: object.
// export default person();
export default Person;
