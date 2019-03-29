import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  doAuthenticate(userid:string, password:string){
      var userObject = {
        'userid':userid,'password':password
      }
      console.log('JSON is ',JSON.stringify(userObject));
      let promise = fetch(environment.loginURL,{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userObject)
      });
      return promise;
  }

}
