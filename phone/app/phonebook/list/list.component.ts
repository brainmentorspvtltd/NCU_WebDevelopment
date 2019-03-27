import { Component, OnInit } from '@angular/core';
import {PhoneService} from '../../phone.service';
import { Phone } from '../../models/phonemodel';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  phoneList:Phone[] = [];
  constructor(private phoneService:PhoneService) { }

  ngOnInit() {
    this.phoneService.getSubject().subscribe(data=>{
      this.phoneList = data;
    })
  }

}
