import { Injectable } from '@angular/core';
import {Headers, Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  artistas:any [] = [];
  urlBusqueda:string = 'https://api.spotify.com/v1/search';
  urlArtistas:string = 'https://api.spotify.com/v1/artists';

  constructor( private http: Http ) { }

  getArtistas( termino:string ){
  let headers = new Headers();

  headers.append('authorization', 'Bearer BQA6kE_hBUSNForgLkgWZChbrCkXHVZu8tZSfN4VWP9dwksSBHQ7jofxhzjYVm_aLkOMrWaEJBaC2Hq16IlkNA');

    let query = `?q=${ termino }&type=artist`;
    let url = this.urlBusqueda + query;

    return this.http.get( url, { headers } )
      .map( res =>{
        console.log( res.json().artists.items );
        this.artistas = res.json().artists.items;
        return res.json().artists.items;
      });


  }
}
