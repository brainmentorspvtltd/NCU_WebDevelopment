import { Component, OnInit, Input } from '@angular/core';
import { Phone } from '../../../models/phonemodel';

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.css']
})
export class RecordComponent implements OnInit {
  @Input()
  currentPhone:Phone;
  @Input()
  counter:number
  constructor() { }

  ngOnInit() {
  }

}
