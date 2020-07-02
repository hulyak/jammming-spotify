let accessToken;
const clientId = '71d43cd4e452450fa97fdae6d5a306cf';
const redirectUri = 'http://jumbled-land.surge.sh';

const Spotify = {
  getAccessToken() {
    // if the user’s access token is already set, return the value saved to access token
    if (accessToken) {
      return accessToken;
    }
    // If the access token is not already set, check the URL(window.location.href) to see if it has just been obtained.
    // You will be using the Implicit Grant Flow to setup a user’s account and make requests. The implicit grant flow returns a user’s access token in the URL.
    //  check for access token match
    const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
    const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);

    // If the access token and expiration time are in the URL
    // Set the access token value
    // Set a variable for expiration time
    // Set the access token to expire at the value for expiration time
    if (accessTokenMatch && expiresInMatch) {
      accessToken = accessTokenMatch[1];
      const expiresIn = Number(expiresInMatch[1]);
      window.setTimeout(() => accessToken = '', expiresIn * 1000);
      window.history.pushState('Access Token', null, '/'); // This clears the parameters, allowing us to grab a new access token when it expires.
      return accessToken;
    } else {
      const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`;
      window.location = accessUrl;
    }
  },

  search(term) {
    const accessToken = Spotify.getAccessToken();
    return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      }).then(response => response.json())
      // map the converted JSON to an array of tracks. If the JSON does not contain any tracks, return an empty array.
      .then(jsonResponse => {
        if (!jsonResponse.tracks) {
          return [];
        }
        return jsonResponse.tracks.items.map(track => ({
          id: track.id,
          name: track.name,
          artist: track.artists[0].name,
          album: track.album.name,
          uri: track.uri
        }));
      });
  },

  // check if there are values saved to the method’s two arguments. If not, return.
  savePlaylist(name, trackUris) {
    if (!name || !trackUris.length) {
      return;
    }
    const accessToken = Spotify.getAccessToken();
    const headers = {
      Authorization: `Bearer ${accessToken}`
    };
    let userId;

    // Make a request that returns the user’s Spotify username.
    // Convert the response to JSON and save the response id parameter to the user’s ID variable.
    return fetch('https://api.spotify.com/v1/me', {
        headers: headers
      }).then(res => res.json())
      .then(jsonResponse => {
        userId = jsonResponse.id;

        // Use the returned user ID to make a POST request that creates a new playlist in the user’s account and returns a playlist ID
        // endpoint creates a new playlist.
        return fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
            headers: headers,
            method: 'POST',
            body: JSON.stringify({
              // Set the playlist name to the value passed into the method.
              name: name
            })
          }).then(res => res.json())
          .then(jsonResponse => {
            const playlistId = jsonResponse.id;

            // Use the returned user ID to make a POST request that creates a new playlist in the user’s account and returns a playlist ID.
            // endpoint adds tracks to a playlist.
            return fetch(`https://api.spotify.com/v1/users/${userId}/playlists/${playlistId}/tracks`, {
              headers: headers,
              method: 'POST',
              // Set the URIs parameter to an array of track URIs passed into the method.
              body: JSON.stringify({
                uris: trackUris
              })
            });
          });
      });
  }
};

export default Spotify;