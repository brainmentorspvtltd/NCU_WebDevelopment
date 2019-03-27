import { Component, OnInit } from '@angular/core';
import {PhoneService} from '../../phone.service';
@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  constructor(private phoneService:PhoneService) { }

  ngOnInit() {
  }
  add(name:string, phone:string){
    this.phoneService.add(name,phone);
  }

}
