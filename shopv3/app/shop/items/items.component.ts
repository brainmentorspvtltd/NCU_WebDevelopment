import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  @Input()
  item:any;
  constructor() {
    this.item = {id:0,name:null, price:0,quantity:0, likes:0};
  }

  ngOnInit() {
  }

}
