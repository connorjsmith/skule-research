import React from 'react';
import ReactDOM from 'react-dom';

class Hello extends React.Component {
    render() {
        return <h1> Hello world </h1>;
    }
}

var container = document.getElementById("container");
// TODO: search, accessing the express.js resources defined in the routes
// TODO: react-router for the views
ReactDOM.render(<Hello/>, container);
