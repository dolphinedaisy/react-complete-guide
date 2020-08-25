import React, { Component } from 'react';
import './App.css';
import Blog from "./Blog/Blog";
import withClass from "../hoc/withClass";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Blog />
            </div>
        );
    }
}

export default withClass(App, 'text-center');
