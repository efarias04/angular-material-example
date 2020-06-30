import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class JsonplaceholderService {

  constructor(private http: HttpClient) {
    console.log('JsonplaceholderService works!')
  }

  /*
  * Servicio http GET
  */
  get(url: string) {
    return this.http.get(url);
  }

}
