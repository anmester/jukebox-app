import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SpotifyService } from '../../services/spotify.service'
import { Artist } from '../../../../Artist'

@Component({
  selector: 'search',
  templateUrl: 'search.component.html',
  providers: [SpotifyService]
})
export class SearchComponent {
  title = 'search';
  searchStr: string;
  searchRes: Artist[]

  constructor(private _spotifyService: SpotifyService) {

  }

  searchMusic() {
      this._spotifyService.searchMusic(this.searchStr)
        .subscribe(res => {
          this.searchRes = res.artists.items;
        })
  }
}