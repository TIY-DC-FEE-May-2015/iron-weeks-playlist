## Iron Weeks Playlist

A simple audio-player interface perfect for currating a weekly playlist. 

Preview working version at <a href="http://younglearnersguide.com/playlist.html">http://younglearnersguide.com/playlist.html</a>

Includes:

* Angular
* Angular Routes
* Howler

## About

The playlist comes loaded with a handful of songs culled from KEXP Seattle's "Song of the Day" podcast. Play mode allows all the basics of pausing and skipping track. Click a song in the right column to skip to that track.

Edit mode allows you to remove songs or add a song with a URL. This is not linked to any database functionality so it only lasts until the page is refreshed.

## Known Bugs

The "currently playing" indicator arrow only advances on a user action (play/pause, change view, advance). Angular's digest automatically changes the song displayed in the bottom tray, but not this.