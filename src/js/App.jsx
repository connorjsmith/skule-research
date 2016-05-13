// This is where we would put the navigation links and the "login" button
import React from 'react';
import ReactDOM from 'react-dom';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  };

  render() {
    return (
      <div>
        <h1> This is the app </h1>
        {this.props.children}
      </div>
    );
  } 

}
