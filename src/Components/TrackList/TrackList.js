import React from 'react';
import './TrackList.css';
import Track from '../Track/Track';

class TrackList extends React.Component{
  render(){
    return (
      <div className="TrackList">
      {/* render each track in the tracks property. */}
      {/* Pass onAdd from the TrackList component to the Track component */}
      {/* Pass onRemove and isRemoval from the TrackList component to the Track component. */}
    {
      this.props.tracks.map( track => {
      return <Track key={track.id} 
              track={track} 
              onAdd={this.props.onAdd}
              onRemove={this.props.onRemove} isRemoval={this.props.isRemoval}
      /> // track = {track} gets all the object keys name, artist, album
    }) 
    }
    </div>
    )
  }
}

export default TrackList;