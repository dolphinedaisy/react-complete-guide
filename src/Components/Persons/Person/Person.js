import React, { Component, Fragment } from 'react';
import './Person.css';
import WithClass from '../../hoc/WithClass';

class Person extends Component {

    componentWillUnmount() {
        console.log('Person.js componentWillUnmount');
    }

    render() {
        console.log('Person.js render()');
        return (
            <WithClass classes={'Person my-3'}>
                <button data-delete="qwerty" onClick={ this.props.click } className={'btn btn-danger'}>Delete</button>
                <p>My name is <b>{ this.props.name }</b>  and I am <b> { this.props.age } </b> years old</p>
                <p>My hobbies are { this.props.children ? this.props.children : 'Nothing' }</p>
                <input type="text" onChange={this.props.changed} value={ this.props.name }/>
            </WithClass>
        );
    }
}
// make sure not to add round bracket other error will be there - ×
// Error: Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: object.
// export default person();
export default Person;
