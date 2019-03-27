import { Component, OnInit } from '@angular/core';
import {CommonService} from '../common.service';
import { BehaviorSubject } from 'rxjs';
@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {
  title:string;
  price:number;
  object:{name:string,id:number,salary:number} = {name:'Ram',id:1001,salary:99999};
  constructor(private commonService:CommonService) { }

  ngOnInit() {
  }
  takeInput(event){
   let name =  event.target.value;
   this.title = name;
   let bs:BehaviorSubject<string> = this.commonService.getSubject();
   bs.next(name);
  }

}
