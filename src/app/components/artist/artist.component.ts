import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service'
import { Album } from '../../../../Album'
import { Artist } from '../../../../Artist'
import { ActivatedRoute } from '@angular/router'
import { map } from 'rxjs/operators';

@Component({
    selector: 'artist',
    templateUrl: 'artist.component.html',
    providers: [SpotifyService]
})
export class ArtistComponent implements OnInit {
  title = 'artist';
  id: string;
  artist: Artist[];
  album: Album[];
  constructor(
      private _spotifyService: SpotifyService,
      private _route: ActivatedRoute) {

  }

  ngOnInit() {
    console.log('route params?', this._route.params)
    this._route.params.pipe(
        map(params => params['id']))
        .subscribe(id => {
            this._spotifyService.getArtist(id)
                .subscribe(artist => {
                    this.artist = artist
                })
            
            this._spotifyService.getAlbums(id)
                .subscribe(albums => {
                    this.albums = albums.items
                })
        })
    }
}