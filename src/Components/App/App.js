import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      searchResults : [{
        name : 'Deep Pockets',
        artist: 'Drake',
        album : 'Dark Lane Demo Tapes',
        id : 1
      },
      {
      name : 'July',
      artist: 'Noah Cyrus',
      album : 'The End of Everything',
      id :2
    },
    {
      name : 'God is a Dancer',
      artist: 'Tiësto',
      album : 'The London Sessions',
      id : 3
    },
    ],

    playlistName : 'Hello world',
    playlistTracks : [{
      id: 1,
      name: 'bir',
      artist : 'bir',
      album : "bir"
    }]
    };

    this.addTrack = this.addTrack.bind(this);
  }

  addTrack(track){
    // check if the current song is in the playlistTracks state
    if(this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
      this.setState();
      // If the id is new, add the song to the end of the playlist
    }else{
      this.setState(this.state.playlistTracks.push(track.id));
    }
  }
  render(){
    return (
      <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
      <SearchBar />
      <div className="App-playlist">
      <SearchResults searchResults={this.state.searchResults}/>
      <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks}/>
      </div>
      </div>
    </div>
    )
  }
}

export default App;
