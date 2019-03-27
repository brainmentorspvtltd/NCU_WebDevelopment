import { Component, OnInit } from '@angular/core';
import {CommonService} from '../common.service';
import { BehaviorSubject } from 'rxjs';
@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {
  message:string;
  constructor(private commonService:CommonService) {
    this.message = 'Nothing Comes';
   }

  ngOnInit() {
  let bs:BehaviorSubject<string> = this.commonService.getSubject();
  bs.subscribe(data=>{
    this.message = data;
  },err=>{
    this.message = err;
  },()=>{
    this.message = 'Completed...';
  });
}

}
