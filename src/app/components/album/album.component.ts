import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service'
import { Album } from '../../../../Album'
import { Artist } from '../../../../Artist'
import { ActivatedRoute } from '@angular/router'
import { map } from 'rxjs/operators';

@Component({
  selector: "album",
  templateUrl: "album.component.html",
  providers: [SpotifyService]
})

export class AlbumComponent implements OnInit {
    title = 'album';
    id: string;
    artist: Artist[];
    album: Album[];
    constructor(
        private _spotifyService: SpotifyService,
        private _route: ActivatedRoute) {
    }

    ngOnInit() {
      console.log('params in album', this._route.params)
      this._route.params.pipe(
          map(params => params['id']))
          .subscribe(id => {
              this._spotifyService.getAlbum(id)
                  .subscribe(album => {
                      this.album = album
                  })
          })
    }
}
