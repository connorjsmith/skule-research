// Single prof's info page
import React from 'react';
import ReactDOM from 'react-dom';

export default class Prof extends React.Component {
  constructor(props) {
    super(props);
  };

  render() {
    return <h1> This is the page for prof #{this.props.params.profID} </h1>;
  } 

}
