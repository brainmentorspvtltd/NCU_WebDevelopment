import { Component, OnInit } from '@angular/core';
import { UserService } from './login/user.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  data:any;
  status:string;
  constructor(private userService:UserService) { }

  ngOnInit() {
    this.userService.getStatusSubject().subscribe(data=>{
      this.data = data;
      this.status = data['status'];
      console.log('Data is ',data);
    },(err)=>{
      console.log('Error is ',err);
    },()=>{
      console.log('Complete');
    })
  }

}
