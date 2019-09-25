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

    constructor(private _http: HttpClient){
    }

    searchMusic(str: string, type = 'artist') {
        console.log('headers', httpOptions)
        this.searchUrl = 'https://api.spotify.com/v1/search?query=' + str + '&offset=0&limit=20&type=' + type + '&market=US';
        return this._http.get(this.searchUrl, httpOptions)
            .pipe(
                map(res => console.log('res', res))
            )
    }
}
