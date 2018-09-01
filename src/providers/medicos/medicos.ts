import { Injectable } from '@angular/core';
import { Http } from '@angular/Http';

/*
  Generated class for the MedicosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MedicosProvider {

  public api_url = "https://api.coinmarketcap.com/v2/ticker/?structure=array&convert=BTC";

  constructor(public http: Http) {
    console.log('Hello MedicosProvider Provider');
  }

  getMoedas() {
    return this.http.get(this.api_url);
  }

}
