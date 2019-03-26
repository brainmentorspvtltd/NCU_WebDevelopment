import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categories:any[]=[];
  constructor(private commonService:CommonService) { }

  ngOnInit() {
   let promise= this.commonService.getCategories();
   promise.then(response=>{
     response.json().then(data=>{
       console.log('data is ',data);
       this.categories = data['categories'];
     }).catch(err=>{
       console.log('Invalid Json ',err);
     }).catch(err=>{
       console.log('Unable to contact server',err);
     })
   })
  }

}
