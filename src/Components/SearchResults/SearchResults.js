import React from 'react';
import './SearchResults.css';
import TrackList from '../TrackList/TrackList';

class SearchResults extends React.Component {
  render() {
    return (
      <div className="SearchResults">
        <h2>Results</h2>
        {/* Pass the search results from the SearchResults component to the TrackList component. */}
        {/* Pass onAdd from the SearchResults component to the TrackList component. */}
        {/* Pass isRemoval with a value of false down to TrackList. */}
        <TrackList
          tracks={this.props.searchResults}
          onAdd={this.props.onAdd}
          isRemoval={false}
        />
      </div>
    );
  }
}

export default SearchResults;
