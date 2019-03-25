import { Component } from '@angular/core';

@Component({
  selector:'app-root',
  templateUrl:'app.component.html',
  //template:`<h1>Hello Angular I am USing Template</h1>`,
  styleUrls:['app.component.css']
})
export class AppComponent{
  flag:boolean;
  name:string;
  myclass:string;
  takeInput(event):void{
    this.name = event.target.value;
    this.myclass = this.name.length>4?'green':'red';
  }
  showHideIt():void{
    this.flag = !this.flag;
    this.myclass = this.flag?'red':'green';
  }
  constructor(){
    this.name = 'Amit';
    this.flag = true;
    this.myclass = 'red';
  }

}
