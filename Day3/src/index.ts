
class JukeBox{
    private static allPlaylist: Playlist[] =[];

    static addPlaylist(playlist:Playlist):void{
        this.allPlaylist.push(playlist);
    }

    static getPlaylistByName(name:string):Playlist|null{
        for(let p of JukeBox.allPlaylist){
            if(p.getName()===name){
                return p
            }
        }
        return null;
    }
}

class Playlist{
    private songs: Song[]=[];
    private name: string;

    constructor(name:string){
        this.name = name;
    }

    addSong(song:Song):void{
        this.songs.push(song);
    }

    selectRandomSong():Song{
        return this.songs[Math.floor(Math.random() * this.songs.length)];
    }

    getSongs():Song[]{
        return this.songs;
    }

    getName():string{
        return this.name;
    }

}

class Song{
    private title: string;
    private album: string;
    private artist: string;

    constructor(title:string,album:string,artist:string){
        this.title=title;
        this.album=album;
        this.artist=artist;
    }

    getTitle():string{
        return this.title;
    }

    getAlbum():string{
        return this.album;
    }

    getArtist():string{
        return this.artist;
    }

    stringSong():string{
        return `title=${this.title} album=${this.album} artist=${this.artist}`;
    }
}

let myPlaylist: Playlist = new Playlist("Playlist_1");
myPlaylist.addSong(new Song("Better","Suncity","Khalid"));
myPlaylist.addSong(new Song("LSD","AT.LONG.LAST.A$AP","A$AP Rocky"));
myPlaylist.addSong(new Song("She Knows","Born Sinner","J Cole"));

JukeBox.addPlaylist(myPlaylist);

let myPlaylist2: Playlist = new Playlist("Playlist_2");
myPlaylist2.addSong(new Song("The Count","The Marina","Wiz Khalifa"));
myPlaylist2.addSong(new Song("Psycho","SINGLE","Caleb Colossus, ChiChi"));
myPlaylist2.addSong(new Song("Didn't I","Let My People Go","Darondo"));

JukeBox.addPlaylist(myPlaylist2);


let playlist1= JukeBox.getPlaylistByName("Playlist_1");
if(playlist1!==null){
    console.log(playlist1.selectRandomSong().stringSong());
}

let playlist2= JukeBox.getPlaylistByName("Playlist_2");
if(playlist2!==null){
    console.log(playlist2.selectRandomSong().stringSong());
}








