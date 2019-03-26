import { Component, OnInit, Input } from '@angular/core';
import {CommonService} from  '../common.service';

@Component({
  selector: 'app-subcategory',
  templateUrl: './subcategory.component.html',
  styleUrls: ['./subcategory.component.css']
})
export class SubcategoryComponent implements OnInit {
  @Input()
  subCategories:any;







}
