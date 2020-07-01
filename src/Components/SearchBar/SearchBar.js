import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      term : ''
    };
    this.search = this.search.bind(this);
    this.handleTermChange = this.handleTermChange.bind(this);
  }

  // passes the state of the term to this.props.onSearch
  search(){
    this.props.onSearch(this.state.term);
  }

  // Sets the state of the search bar’s term to the event target’s value.
  handleTermChange(e){
    this.setState({ term : e.target.value});
  }
  render(){
    return (
      <div className="SearchBar">
      <input placeholder="Enter A Song, Album, or Artist" 
          onChange={this.handleTermChange} onSearch={this.search}
      />
      <button className="SearchButton">SEARCH</button>
    </div>
    )
  }
}
export default SearchBar;