import React from 'react';
import ReactDOM from 'react-dom';
import queryString from 'query-string';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    // Look for a URL parameter and expand if present
    let queryDict = queryString.parse(location.search);
    let textQuery = queryDict['q'] === undefined ? null : queryDict['q'];
    let disciplines = queryDict['disc'] === undefined ? null : queryDict['disc'].split(',');

    this.state = {
      expanded: textQuery !== null,
      textQuery: textQuery,
      disciplines: disciplines,
      term: queryDict["term"],
      results: [] // this is where we will dump the JSON from our server
    };

    console.log(this.state);

    // Fix ES6 bindings
    this.unexpandedSearch = this.unexpandedSearch.bind(this);
  }
  unexpandedSearch(event) {
    let query = event.target.elements["query"].value;
    console.log("Searching!! " + query);
    console.log(event);
    window.history.pushState("Skule Research Portal", "Research Position Search: " + event.target.elements["query"].value, "/?q="+query);
    this.setState({expanded: true, textQuery: query});
  }
  renderUnexpanded() {
    return (
      <form onSubmit={this.unexpandedSearch}>
        <input name="query" type="search" placeholder="Unexpanded Search Bar"/>
        <input type="submit" value="Search"/>
      </form>);
  }
  renderExpanded() {
    return (<div> <p> We are searching for "{this.state.textQuery}" in the disciplines of [{this.state.disciplines}] for the {this.state.term} term</p> </div>);
  }
  render() {
    if (this.state.expanded) {
      return this.renderExpanded();
    } else {
      return this.renderUnexpanded();
    }
  }
}

var container = document.getElementById("container");
// TODO: search, accessing the express.js resources defined in the routes
// TODO: react-router for the views
ReactDOM.render(<SearchBar/>, container);
