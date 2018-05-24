import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {

  // private apiUrl: 'https://onesignal.com/api/v1/notifications';
  // private data: any;
  constructor(public http: HttpClient) {
  }
  createNotification(data) {
    // let message = {'en':"Test"};
    return new Promise((resolve,reject) => {
      this.http.post('https://onesignal.com/api/v1/notifications',JSON.stringify(data),{
        headers: new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8')
          .set('Authorization', 'Basic ODgxYjQ5ZDMtY2E5MS00NGEyLTk2NmYtMDU5ZGY0MDBjZDIw'),
      }).subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

}
