"use strict";
class JukeBox {
    static addPlaylist(playlist) {
        this.allPlaylist.push(playlist);
    }
    static getPlaylistByName(name) {
        for (let p of JukeBox.allPlaylist) {
            if (p.getName() === name) {
                return p;
            }
        }
        return null;
    }
}
JukeBox.allPlaylist = [];
class Playlist {
    constructor(name) {
        this.songs = [];
        this.name = name;
    }
    addSong(song) {
        this.songs.push(song);
    }
    selectRandomSong() {
        return this.songs[Math.floor(Math.random() * this.songs.length)];
    }
    getSongs() {
        return this.songs;
    }
    getName() {
        return this.name;
    }
}
class Song {
    constructor(title, album, artist) {
        this.title = title;
        this.album = album;
        this.artist = artist;
    }
    getTitle() {
        return this.title;
    }
    getAlbum() {
        return this.album;
    }
    getArtist() {
        return this.artist;
    }
    stringSong() {
        return `title=${this.title} album=${this.album} artist=${this.artist}`;
    }
}
let myPlaylist = new Playlist("Playlist_1");
myPlaylist.addSong(new Song("Better", "Suncity", "Khalid"));
myPlaylist.addSong(new Song("LSD", "AT.LONG.LAST.A$AP", "A$AP Rocky"));
myPlaylist.addSong(new Song("She Knows", "Born Sinner", "J Cole"));
JukeBox.addPlaylist(myPlaylist);
let myPlaylist2 = new Playlist("Playlist_2");
myPlaylist2.addSong(new Song("The Count", "The Marina", "Wiz Khalifa"));
myPlaylist2.addSong(new Song("Psycho", "SINGLE", "Caleb Colossus, ChiChi"));
myPlaylist2.addSong(new Song("Didn't I", "Let My People Go", "Darondo"));
JukeBox.addPlaylist(myPlaylist2);
let playlist1 = JukeBox.getPlaylistByName("Playlist_1");
if (playlist1 !== null) {
    console.log(playlist1.selectRandomSong().stringSong());
}
let playlist2 = JukeBox.getPlaylistByName("Playlist_2");
if (playlist2 !== null) {
    console.log(playlist2.selectRandomSong().stringSong());
}
//# sourceMappingURL=index.js.map