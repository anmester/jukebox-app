import { Injectable } from '@angular/core'
import { HttpClient, HttpRequest, HttpHeaders } from '@angular/common/http'
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment'

const accessToken = environment.SPOTIFY_KEY

const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Bearer ' + accessToken
    })
  };

@Injectable()

export class SpotifyService{
    private searchUrl: string;
    private artistUrl: string;
    private albumsUrl: string;
    private albumUrl: string;

    constructor(private _http: HttpClient){
    }

    searchMusic(str: string, type = 'artist') {
        this.searchUrl = 'https://api.spotify.com/v1/search?query=' + str + '&offset=0&limit=20&type=' + type + '&market=US';
        return this._http.get(this.searchUrl, httpOptions)
            .pipe(
                map(res => res)
            )
    }

    getArtist(id: string) {
      this.artistUrl = 'https://api.spotify.com/v1/artists/' + id;
      return this._http.get(this.artistUrl, httpOptions)
          .pipe(
              map(res => res)
          )
    }

    getAlbums(artistId: string) {
      this.albumsUrl = 'https://api.spotify.com/v1/artists/' + artistId + '/albums';
      return this._http.get(this.albumsUrl, httpOptions)
          .pipe(
              map(res => res)
          )
    }

    getAlbum(id: string) {
      console.log('id', id)
      this.albumUrl = 'https://api.spotify.com/v1/albums/' + id;
      return this._http.get(this.albumUrl, httpOptions)
          .pipe(
              map(res => res)
          )
    }
}
