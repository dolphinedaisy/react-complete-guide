import React, { Component } from 'react';
import './Person.css';
import withClass from "../../../hoc/withClass";
import ReactAux from "../../../hoc/ReactAux";
import PropTypes from "prop-types";

class Person extends Component {

    render() {
        console.log('Person.js render()');
        return (
            <ReactAux>
                <button data-delete="qwerty" onClick={ this.props.click } className={'btn btn-danger'}>Delete</button>
                <p>My name is <b>{ this.props.name }</b>  and I am <b> { this.props.age } </b> years old</p>
                <p>My hobbies are { this.props.children ? this.props.children : 'Nothing' }</p>
                <input type="text" onChange={this.props.changed} value={ this.props.name }/>
            </ReactAux>
        );
    }
}

Person.propTypes = {
    click: PropTypes.func,
    changed: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number
}

export default withClass(Person, 'Person my-3');
