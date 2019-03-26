import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import {CommonService} from  '../common.service';

@Component({
  selector: 'app-subcategory',
  templateUrl: './subcategory.component.html',
  styleUrls: ['./subcategory.component.css']
})
export class SubcategoryComponent implements OnInit {
  @Input()
  subCategories:any;
  @Output()
  shareToSubCategoryComponent:EventEmitter<number>  = new EventEmitter<number>();
  ngOnInit(){

  }

  getSubId(subId:number):void{
    this.shareToSubCategoryComponent.emit(subId);
  }







}
