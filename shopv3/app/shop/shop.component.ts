import { Component, OnInit } from '@angular/core';
import {CommonService} from './common.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  currentId:number;
  all:any[] = [];
  item:any;
  items:any[] =[];
  subCategories:any[]  = [];



  constructor(private commonService:CommonService) {
    this.currentId = 0;
   }

  ngOnInit() {
    let promise= this.commonService.getSubCategory();
    promise.then(response=>{
      response.json().then(data=>{
        console.log('Sub Category data is ',data);
        this.all = data;
      }).catch(err=>{
        console.log('Invalid Json ',err);
      }).catch(err=>{
        console.log('Unable to contact server',err);
      })
    })

    let promise2= this.commonService.getItems();
    promise2.then(response=>{
      response.json().then(data=>{
        console.log('Sub Category data is ',data);
        this.items = data['items'];
      }).catch(err=>{
        console.log('Invalid Json ',err);
      }).catch(err=>{
        console.log('Unable to contact server',err);
      })
    })


  }
    printItems(subid:number){
        console.log("Sub Item is ",subid);
  }
  printSubCategories(id:number){
    this.subCategories = this.all[id];
    console.log('Sub Cat ',this.subCategories);
  }

  shareToSub(id:number){
    console.log("Share Sub Item is :::::: ",id);
    this.item = this.items.find(item=>item.id==id);
  }
  shareToCategory(id:number){
    this.currentId = id;
    this.printSubCategories(this.currentId);
    console.log('Id Rec from Category ::::: ',id);
  }

}
