import { Injectable } from '@angular/core';
import { Phone } from './models/phonemodel';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhoneService {
  phoneList:Phone[] = [];
  bs:BehaviorSubject<Phone[]> = new BehaviorSubject<Phone[]>(this.phoneList);
  constructor() { }
  getSubject():BehaviorSubject<Phone[]>{
    return this.bs;
  }
  add(name:string, phone:string){
      let phoneObject:Phone = new Phone(name, phone);
      this.phoneList.push(phoneObject);
      this.bs.next(this.phoneList);

  }
}
