import React from 'react';
import './Playlist.css';
import TrackList from '../TrackList/TrackList';


class Playlist extends React.Component{
  render(){
    return (
      <div className="Playlist">
      <input defaultValue={'New Playlist'}/>
      {/* Pass the playlist tracks from the Playlist component to the TrackList component. */}
      <TrackList tracks={this.props.playlistTracks} onRemove={this.props.onRemove} isRemoval={true} /> 
      <button className="Playlist-save">SAVE TO SPOTIFY</button>
      </div>
    )
  }
}
export default Playlist;