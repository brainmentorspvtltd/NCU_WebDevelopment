export class SalaryService{
  basicSalary:number;
  constructor(){
    this.basicSalary = 0;
  }
  setSalary(basicSalary:string):void{
    this.basicSalary = parseFloat(basicSalary);
  }
  hra():number{
    return this.basicSalary  * 0.30;
  }
  da():number{
    return this.basicSalary  * 0.20;
  }
  ta():number{
    return this.basicSalary  * 0.10;
  }
  pf():number{
    return this.basicSalary  * 0.05;
  }
  gs():number{
    return this.basicSalary  + this.da() + this.ta() - this.pf();
  }
  tax():number{
    return this.gs() * 0.10;
  }
  ns():number{
    return this.gs() - this.tax();
  }

}
