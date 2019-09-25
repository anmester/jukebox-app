import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SpotifyService } from '../../services/spotify.service'

@Component({
  selector: 'search',
  templateUrl: 'search.component.html',
  providers: [SpotifyService]
})
export class SearchComponent {
  title = 'search';
  searchStr: string;

  constructor(private _spotifyService: SpotifyService) {

  }

  searchMusic() {
      this._spotifyService.searchMusic(this.searchStr)
        .subscribe(res => {
            console.log(res);
        })
  }
}