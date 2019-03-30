import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private statusBS:BehaviorSubject<any> = new BehaviorSubject<any>({});
  constructor() { }
  getStatusSubject():BehaviorSubject<any>{
    return this.statusBS;
  }
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
