import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  message:string;

  constructor(private userService:UserService) {
    this.message = '';

   }

  ngOnInit() {
  }
  doLogin(userid:string, password:string):void{
      let promise = this.userService.doAuthenticate(userid, password);
      promise.then(response=>{
          response.json().then(data=>{
            console.log('Data is ',data);

             this.userService.getStatusSubject().next(data);
            this.message = data.message;
          }).catch(err=>{
            console.log('invalid json ',err);
          })
      }).catch(err=>{
          console.log('INvalid response ',err);
      })
    }

}
