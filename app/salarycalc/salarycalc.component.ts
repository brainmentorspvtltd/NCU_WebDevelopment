
import { Component } from '@angular/core';
import {SalaryService} from './salarycalc.service';
@Component({
  selector:'app-salarycalc',
  templateUrl:'salarycalc.component.html',
  styleUrls:['salarycalc.component.css']
})
export class SalaryCalcComponent{
  basicSalary:number;
  salaryModel:SalaryService ;
  constructor(){
    this.basicSalary = 0;
    this.salaryModel = new SalaryService();
  }
  computeIt():void{
    this.salaryModel.setSalary(this.basicSalary);
  }
  takeSalary(event):void{
    this.basicSalary = event.target.value;
  }
}
