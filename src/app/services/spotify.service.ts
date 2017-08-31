import { Injectable } from '@angular/core';
import {Headers, Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  artistas:any [] = [];
  urlBusqueda:string = 'https://api.spotify.com/v1/search';
  urlArtista:string = 'https://api.spotify.com/v1/artists';

  constructor( private http: Http ) { }

  getArtistas( termino:string ){
    let headers = new Headers();

    headers.append('authorization', 'Bearer BQCgFhis0bLIibRSt9kVtjxMTF0fDYK-GfuQ_B6gJ3sUa_ksH0V5nCzfOkckTl2bSsKRVW1FWZVj0mr_jW6SHw');

    let query = `?q=${ termino }&type=artist`;
    let url = this.urlBusqueda + query;

    return this.http.get( url, { headers } )
      .map( res =>{
        console.log( res.json().artists.items );
        this.artistas = res.json().artists.items;
        return res.json().artists.items;
      });
  }

  getArtista( id:string ){

    let headers = new Headers();

    headers.append('authorization', 'Bearer BQCgFhis0bLIibRSt9kVtjxMTF0fDYK-GfuQ_B6gJ3sUa_ksH0V5nCzfOkckTl2bSsKRVW1FWZVj0mr_jW6SHw');


    let query = `/${ id }`;
    let url = this.urlArtista + query;

    return this.http.get( url, { headers } )
      .map( res =>{
        console.log( res.json());
        return res.json();

      });
  }

  getTop( id:string ){

    let headers = new Headers();

    headers.append('authorization', 'Bearer BQCgFhis0bLIibRSt9kVtjxMTF0fDYK-GfuQ_B6gJ3sUa_ksH0V5nCzfOkckTl2bSsKRVW1FWZVj0mr_jW6SHw');


    let query = `/${ id }/top-tracks?country=es`;
    let url = this.urlArtista + query;

    return this.http.get( url, { headers } )
      .map( res =>{
        console.log( res.json().tracks);
        return res.json().tracks;

      });
  }
}
