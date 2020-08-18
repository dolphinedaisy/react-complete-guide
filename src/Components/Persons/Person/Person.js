import React, { Component } from 'react';
import './Person.css';
import withClass from "../../../hoc/withClass";
import ReactAux from "../../../hoc/ReactAux";
import PropTypes from "prop-types";
import AuthContext from "../../../Context/auth-context";

class Person extends Component {

    constructor(props) {
        super(props);
        // option 2
        this.inputElementRef = React.createRef();
    }
    componentDidMount() {
        // option 1
        // this.inputElement.focus();
        // option 2
        this.inputElementRef.current.focus();
    }

    render() {
        console.log('Person.js render()');
        return (
            <ReactAux>
                <AuthContext.Consumer>
                    {(context) => {
                        return <p className={'font-italic font-weight-bold'}>{ context.authenticated ? 'Welcome' : 'Login' }</p>
                    }}
                </AuthContext.Consumer>
                <button data-delete="qwerty" onClick={ this.props.click } className={'btn btn-danger'}>Delete</button>
                <p>My name is <b>{ this.props.name }</b>  and I am <b> { this.props.age } </b> years old</p>
                <p>My hobbies are { this.props.children ? this.props.children : 'Nothing' }</p>
                {/* option 1 */}
                {/*<input type="text"*/}
                {/*       ref={(textEl) => { this.inputElement = textEl; }}*/}
                {/*       onChange={this.props.changed}*/}
                {/*       value={ this.props.name }/>*/}
            {/* option 2 */}
                <input type="text"
                       ref={this.inputElementRef}
                       onChange={this.props.changed}
                       value={ this.props.name }/>
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
