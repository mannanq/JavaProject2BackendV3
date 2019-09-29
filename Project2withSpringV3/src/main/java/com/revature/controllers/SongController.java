package com.revature.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.revature.models.Song;
import com.revature.services.SongService;

@RestController
@RequestMapping("/songs")
public class SongController {


		@Autowired
		private SongService ss;

		@GetMapping
		public List<Song> getAll() {

			return ss.findAllSongs();
		}

		@GetMapping("/{id}")
		public Song getSongById(@PathVariable("id") Integer id) {
			return ss.findSongById(id);
		}
		
		@GetMapping("playlists/{id}")
		public List<Song> getSongsByPlaylistId(@PathVariable("id") Integer id) {
			return ss.findSongsByPlaylistId(id);
		}
		/*
		@GetMapping("playlists/users/{id}")
		public List<Song> getSongsByPlaylistIdByUserId(@PathVariable("id") Integer id) {
			return ss.findSongsByPlaylistByUserId(id);
		}
		*/
		@PostMapping
		public ResponseEntity<Song> addSong(@RequestBody Song song) {
			ss.addSong(song);
			return new ResponseEntity<Song>(song, HttpStatus.CREATED);
		}
		/*
		@PostMapping
		public ResponseEntity<Song> addSong(@RequestParam("spotifySongId") String spotifySongId, @RequestParam("playlistId") Integer playlistId) {
			Song s = ss.addSong(new Song(spotifySongId, new Playlist(playlistId)));
			return new ResponseEntity<Song>(s, HttpStatus.CREATED);
		}
		*/

		@PutMapping("/{id}")
		public Song updateSong(@PathVariable("id") Integer id, @RequestBody Song Song) {
			Song.setSongId(id);
			return ss.updateSong(Song);
		}

		@DeleteMapping("/{id}")
		public Song deleteSong(@PathVariable("id") Integer id) {
			return ss.deleteSong(new Song(id));
		}
	
}
