import React from 'react';
import './TrackList.css';
import Track from '../Track/Track';

class TrackList extends React.Component{
  render(){
    return (
      <div className="TrackList">
      {/* render each track in the tracks property. */}
    {this.props.tracks.map((track) => {
      return <Track key={track.id} track={track} /> // track = {track} gets all the object keys name, artist, album
    }) 
    }
    </div>
    )
  }
}

export default TrackList;