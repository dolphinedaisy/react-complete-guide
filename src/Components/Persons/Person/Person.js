import React, { Component } from 'react';
import './Person.css';
import ReactAux from '../../hoc/ReactAux';

class Person extends Component {

    componentWillUnmount() {
        console.log('Person.js componentWillUnmount');
    }

    render() {
        console.log('Person.js render()');

        // alternative to return adjacent DOM elements
        // option - 1
        // return [
        //     <button key={'btn-person-btn'} data-delete="qwerty" onClick={ this.props.click } className={'btn btn-danger'}>Delete</button>,
        //     <p key={'p-name'}>My name is <b>{ this.props.name }</b>  and I am <b> { this.props.age } </b> years old</p>,
        //     <p key={'p-hobby'}>My hobbies are { this.props.children ? this.props.children : 'Nothing' }</p>,
        //     <input key={'input-name'} type="text" onChange={this.props.changed} value={ this.props.name }/>
        // ];

        // option - 2
        return (
            <ReactAux>
                <hr/>
                <button data-delete="qwerty" onClick={ this.props.click } className={'btn btn-danger'}>Delete</button>
                <p>My name is <b>{ this.props.name }</b>  and I am <b> { this.props.age } </b> years old</p>
                <p>My hobbies are { this.props.children ? this.props.children : 'Nothing' }</p>
                <input type="text" onChange={this.props.changed} value={ this.props.name }/>
                <hr/>
            </ReactAux>
        );
    }
}
// make sure not to add round bracket other error will be there - ×
// Error: Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: object.
// export default person();
export default Person;
