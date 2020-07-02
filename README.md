# Jammming - Spotify app

*Website that allows users to search the Spotify library, create a custom playlist, then save it to their Spotify account.*

## Set-Up

1. Clone this repository into your local machine using the terminal (mac) or Gitbash (PC) > `git clone CLONEURL`
2. CD to the folder cd FOLDERNAME
3. Run > `npm install` to install the project dependencies
4. Run > `npm start` to start live preview server

## Deployment with [Surge](https://surge.sh/) 

1. Install surge globally. In your console, run `npm install --global surge`
2. Before you deploy,  think of a domain name with the following format:

```
SOME_NAME.surge.sh
```

- **SOME_NAME** can be replaced with anything you like.

- Next, you need to replace or add this URI to two locations in your project.

- In *Spotify.js*, set `redirectUri` to your new domain
In your [Spotify application](https://developer.spotify.com/dashboard/), add your new domain as a redirect URI under settings.

3. Back in the command line, from the Jammming project’s root directory, run `npm run build`
  
4. `cd` into the build directory and run the command `surge`
Follow the steps on the screen. Change the domain value to your new URI.

5. If you have an error, check this [page](https://www.thetopsites.net/article/53111172.shtml). You may need to use `cp index.html 200.html` command.
  

## Checklist

1. **Create Static Components**
   
- Create 6 components and css files

2. **Pass Down Search Result and Render Result List**

- Pass the state of a **searchResults** parameter through a series of components to render an array of tracks.
- When a user requests data from Spotify, the JSON response will include a set of song tracks. Each *track* will contain a field for *name*, *artist*, and *album*. For each track in the results list, Jammming web app will display the song name, artist, and album.
- In a later section, we will build a method that sets the state of the search results parameter to a response from the Spotify API.

3. **Pass down Playlist to TrackList**

- Pass the state of a user’s custom playlist title and tracks from the App component down to components that render them.

- When a user adds songs from the search results list to their playlist, a method will update the state of a playlist parameter in App.js, and Jammming will render the song in the user’s playlist.

- In a later assessment, we will write methods that add and remove songs from the playlist. We will also write a method that updates the playlist’s title.

4. **Add Tracks to a Playlist**
   
- Implement a process for adding a song from the search results track list to the user’s custom playlist.

- Add a method to App.js called *addTrack* that adds a song to the playlist state. The application passes the method through a series of components to Track. The user can trigger the .addTrack() method by clicking the + sign from the search results list.

5. **Remove Tracks from a Playlist**

- Implement a process that removes a song from a user’s custom playlist when the user selects the - sign inside of a rendered track. 

6. **Change the Name of a Playlist**
   
- Implement code that allows a user to change the name of their playlist, and save the updated value to the App component’s state.

7. **Create a Method that Saves the Playlist to a User's Spotify  Account**

- Create a method that will save a user’s playlist to their Spotify account and resets the state of the playlist name and tracks array.

- To accomplish the goal of this assessment, you will need to access a track property named [uri](https://developer.spotify.com/documentation/web-api/). Spotify uses this field to reference tracks in the Spotify library. You will create an array containing the uri of each track in the playlistTracks property.

- In a later section, you will pass the playlist name and the array of uris to a Spotify-linked method that writes the tracks in playlistTracks to a user’s account.

8. **Hook up Search Bar to Spotify Search**

- Create a method that updates the searchResults parameter in the App component with a user’s search results. You will write the logic that allows a user to enter a search parameter, receives a response from the Spotify API, and updates the searchResults state with the results from a Spotify request.

- In a later section, you will hook the .search() method up to the Spotify API.

9. **Obtain a Spotify Access Token**

- Write three methods that accomplish the following:

  - Get a Spotify user’s access token
  - Send a search request to the Spotify API
  - Save a user’s playlist to their Spotify account.

- Before you begin, you will need to create an empty JavaScript module called Spotify located in src/util/Spotify.js.

- In this assessment, you will register a Spotify application and create a method called *getAccessToken* in the Spotify module. The method will get a user’s access token so that they can make requests to the Spotify API.

- Use the [Spotify Applications Registration Flow](https://developer.spotify.com/dashboard/) and [Spotify Authentication](https://developer.spotify.com/documentation/general/guides/authorization-guide/) guide to help you write the method.

- Register your application using the [Spotify application registration flow](https://developer.spotify.com/dashboard/applications).

- Give your application a relevant name and description. Also, add the following Redirect URI under settings tab:

`http://localhost:3000/`

10. **Implement Spotify Search Request**

- Create a method in **Spotify.js** that accepts a search term input, passes the search term value to a Spotify request, then returns the response as a list of tracks in JSON format.

- You will need the user’s access token to make requests to the Spotify API. You will use the request parameters in step four of the [implicit grant flow](https://developer.spotify.com/documentation/general/guides/authorization-guide/) to make requests. In the following steps, we will use fetch() to make our requests, but any method will work.

- You should use the `/v1/search?type=TRACK` endpoint when making your request. Use the [Spofity Web API Endpoint Reference](https://developer.spotify.com/documentation/web-api/reference/) to help format your request.

11. **Save a User's Playlist**
    
- Create a method called *savePlaylist* that writes the learner’s custom playlist in Jammming to their Spotify account.

- The .savePlaylist() method accepts a playlist name and an array of track URIs. It makes the following three requests to the Spotify API:

  - GET current user’s ID
  
  - POST a new playlist with the input name to the current user’s Spotify account. Receive the playlist ID back from the request.
  
  - POST the track URIs to the newly-created playlist, referencing the current user’s account (ID) and the new playlist (ID)

- You will update the .savePlaylist() method in App.js to use the new Spotify.savePlaylist() method.

### Potential new Jammming Features

- Pressing enter triggers a search
- Include preview samples for each track
- Only display songs not currently present in the playlist in the search results
- Add a loading screen while playlist is saving
- Update the access token logic to expire at exactly the right time, instead of setting expiration from when the user initiates their next search
- After user redirect on login, restoring the search term from before the redirect
- Ensure playlist information doesn’t get cleared if a user has to refresh their access token
- Provide a way to fetch and see all your existing playlists