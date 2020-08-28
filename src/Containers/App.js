import React, { Component } from 'react';
import './App.css';
import Blog from "./Blog/Blog";
import withClass from "../hoc/withClass";
import { BrowserRouter } from "react-router-dom";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Blog />
                </div>
            </BrowserRouter>
        );
    }
}

export default withClass(App, 'text-center');
