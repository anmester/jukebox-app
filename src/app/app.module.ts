import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistComponent } from './components/artist/artist.component';
import { AlbumComponent } from './components/album/album.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: SearchComponent },
      { path: 'about', component: AboutComponent },
      { path: 'artist/:id', 
        component: ArtistComponent, 
        children: [
          { 
            path: 'album/:id', 
            component: AlbumComponent
          }
        ]
      },
      { path: 'album/:id', component: AlbumComponent}
    ])
  ],
  declarations: [
    AppComponent,
    NavBarComponent,
    AboutComponent,
    SearchComponent,
    ArtistComponent,
    AlbumComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
