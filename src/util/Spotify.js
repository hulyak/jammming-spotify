let accessToken;
const clientID = ' 71d43cd4e452450fa97fdae6d5a306cf';
const redirectURI = 'http://localhost:3000/';
const Spotify = {

  getAccessToken(){
    // if the user’s access token is already set, return the value saved to access token
    if (accessToken){
      return accessToken;
     }

      // If the access token is not already set, check the URL(window.location.href) to see if it has just been obtained.
      // You will be using the Implicit Grant Flow to setup a user’s account and make requests. The implicit grant flow returns a user’s access token in the URL.
      //  check for access token match
      const accessTokenMatch = window.location.href.match(/access_token=([^&]*/);
      const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);

      // If the access token and expiration time are in the URL
      // Set the access token value
      // Set a variable for expiration time
      // Set the access token to expire at the value for expiration time
        // Clear the parameters from the URL, so the app doesn’t try grabbing the access token after it has expired
      if(accessTokenMatch && expiresInMatch){
        accessToken = accessTokenMatch[1];
        const expiresIn = Number(expiresInMatch[1]);
        window.setTimeout(() => accessToken = '', expiresIn * 1000);
        window.history.pushState('Access Token', null, '/');
        return accessToken;
      }else {
        const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURI}`;
        window.location = accessUrl;
      }
    }
  }

export default Spotify;