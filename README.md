# Jammming - Spotify app

## Checklist

1. Create Static Components
   
- Create 6 components and css files

2. Pass Down Search Result and Render Result List

- Pass the state of a **searchResults** parameter through a series of components to render an array of tracks.
- When a user requests data from Spotify, the JSON response will include a set of song tracks. Each *track* will contain a field for *name*, *artist*, and *album*. For each track in the results list, Jammming web app will display the song name, artist, and album.
- In a later section, we will build a method that sets the state of the search results parameter to a response from the Spotify API.

3. Pass down Playlist to TrackList

- Pass the state of a user’s custom playlist title and tracks from the App component down to components that render them.

- When a user adds songs from the search results list to their playlist, a method will update the state of a playlist parameter in App.js, and Jammming will render the song in the user’s playlist.

- In a later assessment, we will write methods that add and remove songs from the playlist. We will also write a method that updates the playlist’s title.