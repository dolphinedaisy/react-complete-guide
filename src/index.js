import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Containers/App';
import * as serviceWorker from './serviceWorker';
import axios from "axios";

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";
axios.defaults.headers.common['Authorization'] = "AUTH TOKEN";
axios.defaults.headers.post['Content-Type'] = "application/json";

axios.interceptors.request.use((request) => {
    console.log('interceptors Request : ', request);
    // you must return the request otherwise you are blocking the request
    return request
}, error => {
    // this catch block can be used for local error like no internet connection
    // those error that blocks the request can be catch and managed here
    console.log('interceptors Error : ', error);
    return Promise.reject(error);
});

axios.interceptors.response.use((response) => {
    console.log('interceptors Response : ', response);
    // must return response from here
    // otherwise you won't receive it in then block
    return response;
}, error => {
    console.log('interceptors Error : ', error);
    return Promise.reject(error);
});

ReactDOM.render(
  //  https://stackoverflow.com/a/61091205
  // <React.StrictMode>
    <App appTitle={"Person Manger"} />,
  // </React.StrictMode>,
  document.getElementById('root')
);

// ReactDOM.render(
//   <h1>Hello</h1>,
//   document.getElementById('root')
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
