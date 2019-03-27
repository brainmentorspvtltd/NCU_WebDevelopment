import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  private behaviourSubject:BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor() { }
  getSubject():BehaviorSubject<string>{
    return this.behaviourSubject;
  }

}
