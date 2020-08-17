import React, { Component } from 'react';
import './Person.css';

class Person extends Component {

    render() {
        console.log('Person.js render()');
        return (
            <div className={'Person my-3'}>
                <button data-delete="qwerty" onClick={ this.props.click } className={'btn btn-danger'}>Delete</button>
                <p>My name is <b>{ this.props.name }</b>  and I am <b> { this.props.age } </b> years old</p>
                <p>My hobbies are { this.props.children ? this.props.children : 'Nothing' }</p>
                <input type="text" onChange={this.props.changed} value={ this.props.name }/>
            </div>
        );
    }
}
export default Person;
