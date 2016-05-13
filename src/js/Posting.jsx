// Detail about one posting
import React from 'react';
import ReactDOM from 'react-dom';

export default class Posting extends React.Component {
  constructor(props) {
    super(props);
  };

  render() {
    return <h1> This is a single posting #{this.props.params.postingID} </h1>;
  } 

}
