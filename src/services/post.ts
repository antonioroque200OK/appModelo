import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

<<<<<<< HEAD
@Injectable()
export class Post {
  server = 'http://localhost:8888/apiionic/';

  constructor(private http: HttpClient) {
  }

  dadosApi(dados: any, api: string) {
    const httpOptions = {
      headers: new HttpHeaders({'Content-type' :  'application/json'})
    };
    const url = this.server + api;
    return this.http.post(url, JSON.stringify(dados), httpOptions).map(res => res);
  }
}
=======

@Injectable()
export class Post{
    
    server: string = 'http://localhost:8888/apiionic/';

    constructor(private http: HttpClient){
    }

    dadosApi(dados: any, api: string){
        const httpOptions = {
            headers: new HttpHeaders({'Content-type' : 'application/json'})
        }
        let url = this.server + api;
        return this.http.post(url,JSON.stringify(dados),httpOptions).map(res => res);
    }

}
>>>>>>> 37eb65933db83225e8c8573fc6e29e3eff1a963e
