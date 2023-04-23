import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private _apiUrl = environment.apiUrl;
  private _token = undefined;

  get token(){
    return this._token
  }

  set token(value){
    this._token = value;
  }

  constructor(
    private httpClient: HttpClient,
  ) { 
    this._token = localStorage.getItem('token') || 'no-value';
  }

  get(uri: string, otherHeaders = {}){
    return new Promise((resolve, reject) => {
      const headers = {
        'x-auth-token': this._token,
        ...otherHeaders
      }
      const url = `${this._apiUrl}/${uri}`;
      this.httpClient.get(url, { headers })
        .subscribe(res => {
          resolve(res);
        }, error => {
          reject(error)
        })
    })
  }

  getExternal(url: string, otherHeaders = {}){
    return new Promise((resolve, reject) => {
      const headers = {
        'x-auth-token': this._token,
        ...otherHeaders
      }
      this.httpClient.get(url, { headers })
        .subscribe(res => {
          resolve(res);
        }, error => {
          reject(error)
        })
    })
  }
  
  post(uri, body){
    return new Promise((resolve, reject) => {
      const headers = {
        'x-auth-token': this._token
      }
      this.httpClient.post(`${this._apiUrl}/${uri}`, body, { headers })
        .subscribe(res => {
          resolve(res);
        }, err => {
          reject(err)
        })
    })
  }

  


}
