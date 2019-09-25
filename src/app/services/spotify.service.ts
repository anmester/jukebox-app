import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()

export class SpotifyService{
    private searchUrl: string;

    constructor(private _http: HttpClient){
    }

    searchMusic(str: string, type='artist'){
        this.searchUrl = 'https://api.spotify.com/v1/search?query='+str+'&offset=0&limit=20&type='+type+'&market=US'
        return this._http.get(this.searchUrl)
            .pipe(
                map(res => res.json())
            )
    }
}