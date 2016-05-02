import React from 'react';
import ReactDOM from 'react-dom';

class Hello extends React.Component {
    render() {
        return <h1> Hello world </h1>;
    }
}

var container = document.getElementById("container");
ReactDOM.render(<Hello/>, container);
