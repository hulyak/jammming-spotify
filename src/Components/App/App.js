import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import Spotify from '../../util/Spotify';

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

    // user can change the playlistName
    playlistName : 'My Playlist',
    playlistTracks : [{
      id: 1,
      name: 'bir',
      artist : 'bir',
      album : "bir"
    }]
    };
   
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
  }

  addTrack(track){
    let tracks = this.state.playlistTracks;
    // check if the current song is in the playlistTracks state
    if(tracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    }
     // If the id is new, add the song to the end of the playlist
     tracks.push(track);
    this.setState({playlistTracks : tracks});
  }

  removeTrack(track){
    let tracks = this.state.playlistTracks;
    // Uses the track’s id property to filter it out of playlistTracks
    tracks = tracks.filter(current => current.id !== track.id)
    this.setState({ playlistTracks : tracks})
  }

  // Sets the state of the playlistName to the input argument
  updatePlaylistName(name){
    this.setState({name :this.state.playlistName});
  }

  // Generates an array of uri values called trackURIs from the playlistTracks property
  //later, will pass the trackURIs array and playlistName to a method that will save the user’s playlist to their account.
  savePlaylist(){
    const trackURIs = this.state.playlistTracks.map(track => track.uri);
  }

  // hook this method up to the Spotify API.
  //Update the state of searchResults with the value resolved from Spotify.search()‘s promise.
  search(term){
    Spotify.search(term).then(searchResults  => {
      this.setState({searchResults : searchResults });
    });
  }

  render(){
    return (
      <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
      {/* search for a song  */}
      <SearchBar onSearch = {this.search}/>

      <div className="App-playlist">

      <SearchResults searchResults={this.state.searchResults} 
                      onAdd={this.addTrack} />

      <Playlist playlistName={this.state.playlistName} 
                playlistTracks={this.state.playlistTracks} 
                onRemove={this.removeTrack}
                onNameChange={this.updatePlaylistName}
                onSave = {this.savePlaylist}
                />
      </div>
      </div>
    </div>
    )
  }
}

export default App;
