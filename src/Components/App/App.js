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
        album : 'Dark Lane Demo Tapes'
      },
      {
      name : 'July',
      artist: 'Noah Cyrus',
      album : 'The End of Everything'
    },
    {
      name : 'God is a Dancer',
      artist: 'Tiësto',
      album : 'The London Sessions'
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
